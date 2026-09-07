export default {
  async fetch(request, env, ctx) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=33.6844&longitude=73.0479&current_weather=true"
      );
      const data = await response.json();

      return new Response(
        JSON.stringify({
          location: "Islamabad, PK",
          temperature: `${Math.round(data.current_weather?.temperature ?? 0)}°`,
          forecasts: [],
        }),
        { headers: corsHeaders }
      );
    } catch (err) {
      return new Response(JSON.stringify({ error: "Failed to fetch weather" }), {
        status: 500,
        headers: corsHeaders,
      });
    }
  },
};