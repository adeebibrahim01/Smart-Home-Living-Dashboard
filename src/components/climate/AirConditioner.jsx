import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import GlassCard from "../common/GlassCard";
import Toggle from "../common/Toggle";
import TemperatureGauge from "./TemperatureGauge";

const AC_API_URL =
  "https://smart-home-weather.adeebibrahim01.workers.dev/api/ac";

const fetchAC = async () => {
  const response = await fetch(AC_API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch AC state");
  }

  return response.json();
};

const updateAC = async (active) => {
  const response = await fetch(AC_API_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ active }),
  });

  if (!response.ok) {
    throw new Error("Failed to update AC state");
  }

  return response.json();
};

function AirConditioner() {
  const queryClient = useQueryClient();

  const {
    data: acData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["acState"],
    queryFn: fetchAC,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });

  const mutation = useMutation({
    mutationFn: updateAC,

    onMutate: async (nextActive) => {
      await queryClient.cancelQueries({
        queryKey: ["acState"],
      });

      const previousAC = queryClient.getQueryData(["acState"]);

      queryClient.setQueryData(["acState"], (currentAC) => ({
        ...(currentAC ?? {}),
        active: nextActive,
        deviceKey:
          currentAC?.deviceKey ?? "living-room-ac",
        name:
          currentAC?.name ?? "Air Conditioner",
        room:
          currentAC?.room ?? "living room",
      }));

      return {
        previousAC,
      };
    },

    onError: (_error, _nextActive, context) => {
      if (context?.previousAC) {
        queryClient.setQueryData(
          ["acState"],
          context.previousAC
        );
      }
    },

    onSuccess: (updatedAC) => {
      queryClient.setQueryData(
        ["acState"],
        updatedAC
      );
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["acState"],
      });
    },
  });

  const active = acData?.active ?? true;

  const handleToggle = (nextValue) => {
    const nextActive =
      typeof nextValue === "boolean"
        ? nextValue
        : nextValue?.target?.checked;

    if (typeof nextActive !== "boolean") {
      return;
    }

    mutation.mutate(nextActive);
  };

  return (
    <GlassCard className="h-full p-4 sm:p-5">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-[13px] font-medium">
            Air Conditioner
          </h3>

          <p className="mt-1 text-[9px] text-[#818181]">
            living room
          </p>
        </div>

        <Toggle
          checked={active}
          onChange={handleToggle}
          disabled={isLoading || mutation.isPending}
          label="Air Conditioner"
        />
      </div>

      <div
        className={
          active
            ? "opacity-100 transition-opacity"
            : "opacity-10 transition-opacity"
        }
      >
        <TemperatureGauge />
      </div>

      {isError && (
        <p className="mt-2 text-[9px] text-red-500">
          Failed to load AC state
        </p>
      )}
    </GlassCard>
  );
}

export default AirConditioner;