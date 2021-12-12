import react from "react";

const Top10Layout = ({ index, rank, src, title }) => {
  return (
    <div className={`content${index} content-10s`}>
      {rank}
      <img src={src} alt="" style={{ height: "18vw" }} />
    </div>
  );
};

export default Top10Layout;
