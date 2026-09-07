export default {
  async fetch(request, env, ctx) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
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

    // Allow only GET and HEAD requests
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        {
          status: 405,
          headers: corsHeaders,
        }
      );
    }

    try {
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