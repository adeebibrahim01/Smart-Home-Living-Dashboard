const WEATHER_API = "https://api.open-meteo.com/v1/forecast";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // API route
    if (url.pathname === "/api/weather") {
      return getWeather();
    }

    // React/Vite assets
    return env.ASSETS.fetch(request);
  },
};

async function getWeather() {
  try {
    const apiUrl = new URL(WEATHER_API);

    // Pendleton, Oregon — existing UI ke location ke mutabiq
    apiUrl.searchParams.set("latitude", "45.6721");
    apiUrl.searchParams.set("longitude", "-118.7886");

    apiUrl.searchParams.set(
      "current",
      "temperature_2m,weather_code"
    );

    apiUrl.searchParams.set(
      "daily",
      "weather_code,temperature_2m_max,temperature_2m_min"
    );

    apiUrl.searchParams.set("temperature_unit", "celsius");
    apiUrl.searchParams.set("timezone", "auto");
    apiUrl.searchParams.set("forecast_days", "7");

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Open-Meteo returned ${response.status}`);
    }

    const data = await response.json();

    const weather = {
      location: "Pendleton, Pendleton",
      temperature: formatTemperature(
        data.current?.temperature_2m
      ),
      forecasts: buildForecasts(data.daily),
    };

    return Response.json(weather, {
      headers: {
        "Cache-Control": "public, max-age=900",
      },
    });
  } catch (error) {
    console.error("Weather API error:", error);

    return Response.json(
      {
        error: "Unable to load weather data",
      },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  }
}

function formatTemperature(value) {
  if (typeof value !== "number") {
    return "--°";
  }

  const rounded = Math.round(value);

  return `${rounded > 0 ? "+" : ""}${rounded}°`;
}

function buildForecasts(daily) {
  if (!daily?.time) {
    return [];
  }

  return daily.time.slice(1, 7).map((date, index) => {
    const dataIndex = index + 1;

    return {
      day: getDayName(date),
      temperature: formatTemperature(
        daily.temperature_2m_max?.[dataIndex]
      ),
      icon: getWeatherIcon(
        daily.weather_code?.[dataIndex]
      ),
    };
  });
}

function getDayName(date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function getWeatherIcon(code) {
  if (
    code === 95 ||
    code === 96 ||
    code === 99
  ) {
    return "storm";
  }

  if (code >= 51 && code <= 82) {
    return "rain";
  }

  return "cloud";
}