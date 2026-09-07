import Card from "../common/Card";

function OverviewCard({
  title,
  value,
  description,
  icon: Icon,
  className = "",
}) {
  return (
    <Card className={`p-5 ${className}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-neutral-400">{title}</p>

          <p className="mt-3 text-3xl font-semibold tracking-tight">
            {value}
          </p>
        </div>

        {Icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-100">
            <Icon size={19} />
          </div>
        )}
      </div>

      {description && (
        <p className="mt-4 text-xs text-neutral-400">
          {description}
        </p>
      )}
    </Card>
  );
}

export default OverviewCard;