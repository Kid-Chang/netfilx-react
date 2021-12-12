import react from "react";



function HotItemLayout({index, src, title}) {
    return (
        <div className={`content${index} content-hots`} >
        <img src={src} alt="" />
        </div>);
};

export default HotItemLayout;