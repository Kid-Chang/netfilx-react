import { useRef } from "react";

function HotItemLayout({ index, src, title }) {
  const element = useRef();
  const zoomIn = () => {
    // console.log("it's work");
    element.current.style.transition = "all 0.5s";
    element.current.style.transform = "scale(1.2)";
    element.current.style.zIndex = 20;
  };

  const zoomOut = () => {
    element.current.style.transition = "all 0.5s";
    element.current.style.transform = "scale(1.0)";
    element.current.style.zIndex = 0;
  };

  return (
    <div className={`content${index} content-hots`}>
      <img
        ref={element}
        onMouseEnter={zoomIn}
        onMouseLeave={zoomOut}
        src={src}
        alt=""
        style={{ height: "140px" }}
      />
    </div>
  );
}

export default HotItemLayout;
