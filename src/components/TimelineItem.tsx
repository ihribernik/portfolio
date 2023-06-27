const styles = {
  timelineItem: "mb-10 ml-4",
  timelineItemDot:
    "absolute w-3 h-3 bg-yellow-700 rounded-full mt-1.5 border border-white -left-1.5",
  timelineItemContent: "sm:flex items-center space-x-1",
  timelineItemDuration: "rounded-md px-3 bg-yellow-500",
  timelineItemDurationText: "text-base font-semibold",
  timelineItemPosition: "text-base font-bold",
  timelineItemDate: "text-sm",
  timelineItemDetails: "",
  timelineItemStack: "pt-3",
  timelineItemStackTitle: "font-bold pr-2",
  timelineItemStackContent: "text-yellow-600",
};

const TimelineItem = ({
  date,
  details,
  duration,
  employer,
  position,
  stack,
}: {
  date: string;
  details: string[];
  duration?: number;
  employer: string;
  position: string;
  stack?: string[];
}) => {
  return (
    <li className="mb-10 ml-4">
      {/* TODO: cambiar este div vacio por algo mas representativo, algo como ul con un li para que sea mas semantico */}
      <div className="absolute w-3 h-3 bg-yellow-700 rounded-full mt-1.5 border border-white -left-1.5 "></div>
      <div className="sm:flex items-center space-x-1">
        {duration && (
          <div className="rounded-md px-3 bg-yellow-500">
            <div className="text-base font-semibold">
              {duration > 1 ? `${duration} meses` : "ahora"}
            </div>
          </div>
        )}
        <p className="text-base font-bold">
          {position} en {employer}
        </p>
        <p className="text-sm">{date}</p>
      </div>
      <div>
        {details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
      {stack && stack.length > 0 && (
        <p className="pt-3">
          <span className="font-bold pr-2">stack:</span>
          <b className="text-yellow-600">{stack.join(", ")}</b>
        </p>
      )}
    </li>
  );
};

export default TimelineItem;
