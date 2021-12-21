import { useRef } from "react";

function VidItemLayout({ index, src, title }) {
  const element = useRef();
  const zoomInPunch = () => {
    // console.log("it's work");
    element.current.style.transition = "all 0.5s";
    element.current.style.transform = "scale(1.2)";
    element.current.style.transitionDelay = "0.5s";
  };

  const zoomOut = () => {
    element.current.style.transition = "all 0.5s";
    element.current.style.transform = "scale(1.0)";
    element.current.style.zIndex = 0;
  };

  return (
    <div className={`content${index} vid-content`}>
      <img
        ref={element}
        onMouseEnter={zoomInPunch}
        onMouseLeave={zoomOut}
        src={src}
        alt=""
        style={{ height: "140px" }}
      />
    </div>
  );
}

export default VidItemLayout;
