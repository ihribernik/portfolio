import data from "../data/jobs";
import TimelineItem from "./TimelineItem";

const styles = {
  timeline: "py-3",
  timelineTitle: "text-3xl font-bold pb-4 underline",
  timelineList: "flex flex-col relative border-l border-yellow-300",
};

const Timeline = () => {
  return (
    <div className="py-3">
      <h1 className="text-3xl font-bold pb-4 underline">Timeline</h1>

      <ol className="flex flex-col relative border-l border-yellow-300">
        {data &&
          data.map((job, index) => (
            <TimelineItem
              key={index}
              date={job.date}
              details={job.details}
              employer={job.employer}
              position={job.position}
              stack={job.stack}
              duration={job.duration}
            />
          ))}
      </ol>
    </div>
  );
};

export default Timeline;
