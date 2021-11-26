import SingleNotificationCard from "../SingleNotificationCard/SingleNotificationCard";
import { useState, useEffect } from "react";

function SingleNotification(props) {
  const [arrToRender, setArrToRender] = useState(props.nots);

  useEffect(() => {
    setArrToRender(props.nots);
  }, [props.nots]);

  function removeFromArrayHandler(someId) {
    setArrToRender((prevRenderedArr) => {
      return prevRenderedArr.filter((nots) => nots.notId !== someId);
    });
  }

  return (
    <div>
      {arrToRender.map((singleNot) => {
        return (
          <div key={singleNot.notId}>
            <SingleNotificationCard
              notification={singleNot}
              removeArr={removeFromArrayHandler}
            />
          </div>
        );
      })}
    </div>
  );
}

export default SingleNotification;
