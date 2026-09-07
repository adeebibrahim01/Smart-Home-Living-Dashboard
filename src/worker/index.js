export default {
  async fetch(request, env, ctx) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, HEAD, PUT, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    };

    // Handle CORS preflight request
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    // Allow only GET, HEAD and PUT requests
    if (
      request.method !== "GET" &&
      request.method !== "HEAD" &&
      request.method !== "PUT"
    ) {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        {
          status: 405,
          headers: corsHeaders,
        }
      );
    }

    try {
      // =========================
      // AIR CONDITIONER - GET
      // =========================
      if (
        new URL(request.url).pathname === "/api/ac" &&
        request.method === "GET"
      ) {
        const device = await env.smart_home_db
          .prepare(
            `SELECT device_key, name, room, is_on
             FROM devices
             WHERE device_key = ?`
          )
          .bind("living-room-ac")
          .first();

        if (!device) {
          return new Response(
            JSON.stringify({
              error: "Air Conditioner not found",
            }),
            {
              status: 404,
              headers: corsHeaders,
            }
          );
        }

        return new Response(
          JSON.stringify({
            deviceKey: device.device_key,
            name: device.name,
            room: device.room,
            active: Boolean(device.is_on),
          }),
          {
            status: 200,
            headers: corsHeaders,
          }
        );
      }

      // =========================
      // AIR CONDITIONER - PUT
      // =========================
      if (
        new URL(request.url).pathname === "/api/ac" &&
        request.method === "PUT"
      ) {
        const body = await request.json();

        if (typeof body.active !== "boolean") {
          return new Response(
            JSON.stringify({
              error: "active must be a boolean",
            }),
            {
              status: 400,
              headers: corsHeaders,
            }
          );
        }

        await env.smart_home_db
          .prepare(
            `UPDATE devices
             SET is_on = ?
             WHERE device_key = ?`
          )
          .bind(
            body.active ? 1 : 0,
            "living-room-ac"
          )
          .run();

        return new Response(
          JSON.stringify({
            deviceKey: "living-room-ac",
            name: "Air Conditioner",
            room: "living room",
            active: body.active,
          }),
          {
            status: 200,
            headers: corsHeaders,
          }
        );
      }

      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=33.60557&longitude=73.94814&current_weather=true"
      );

      if (!response.ok) {
        throw new Error(`Open-Meteo returned ${response.status}`);
      }

      const data = await response.json();

      const weather = {
        location: "Tatta Pani, Kotli, AJK",
        temperature: `${Math.round(
          data.current_weather?.temperature ?? 0
        )}°`,
        forecasts: [],
      };

      return new Response(JSON.stringify(weather), {
        status: 200,
        headers: {
          ...corsHeaders,
          "Cache-Control": "public, max-age=300, s-maxage=300",
        },
      });
    } catch (err) {
      return new Response(
        JSON.stringify({
          error: "Failed to fetch weather data",
        }),
        {
          status: 500,
          headers: corsHeaders,
        }
      );
    }
  },
};