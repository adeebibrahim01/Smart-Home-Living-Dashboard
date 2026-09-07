import Card from "../common/Card";

function ActivityCard({ activities = [] }) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Recent activity</h3>

        <button
          type="button"
          className="text-xs font-medium text-neutral-400 hover:text-black"
        >
          View all
        </button>
      </div>

      <div className="mt-5 divide-y divide-black/5">
        {activities.length ? (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center gap-3 py-4 first:pt-0 last:pb-0"
            >
              <div className="h-2 w-2 rounded-full bg-black" />

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">
                  {activity.title}
                </p>

                <p className="mt-1 text-xs text-neutral-400">
                  {activity.time}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="py-4 text-sm text-neutral-400">
            No recent activity
          </p>
        )}
      </div>
    </Card>
  );
}

export default ActivityCard;