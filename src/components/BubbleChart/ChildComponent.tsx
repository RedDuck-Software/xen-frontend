import React from "react";

export default function Child(props: any) {
  // console.log(props);
  return (
    <div
      style={{
        backgroundColor: "red",
      }}
      className={"dummyBubble"}
    >
      {props.bubbleSize ? (
        <p className="dummyBubbleText">
          Size:
          <br />
          {Math.round(props.bubbleSize)}
        </p>
      ) : null}
    </div>
  );
}
