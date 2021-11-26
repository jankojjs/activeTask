import TimeContext from "../../store/time-context";
import { useState, useEffect, useContext } from "react";
import StopwatchCard from "../StopwatchCard/StopwatchCard";

function Stopwatch() {
  const TimeCtx = useContext(TimeContext);
  const [isTracking, setIsTracking] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("active_task") !== null) {
      setIsTracking(true);
    } else {
      setIsTracking(false);
    }
  }, [TimeCtx]);

  function pauseClick() {
    TimeCtx.pauseCounting();
    setIsTracking(false);
  }

  return (
    <div>
      {isTracking && (
        <StopwatchCard
          onClick={pauseClick}
          taskId={localStorage.getItem("active_task")}
        />
      )}
    </div>
  );
}

export default Stopwatch;
