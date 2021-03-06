import { useRef } from "react";

const Top10Layout = ({ index, rank, src, title }) => {
  const element = useRef();
  const zoomIn = () => {
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
    <div className={`content${index} content-10s`}>
      {rank}
      <img
        src={src}
        alt=""
        ref={element}
        onMouseEnter={zoomIn}
        onMouseLeave={zoomOut}
        style={{ height: "180px" }}
      />
    </div>
  );
};

export default Top10Layout;
