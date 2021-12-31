import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const PreviewContainer = styled.div`
    padding-top: 10px;
    background-color: #141414;
    width: 248px;
    height: 100px;
    // display: none;
`;

const PreviewInnerContainer = styled.div`
    display: flex;

    & > div {
        margin-left: 5px;
        display: flex;
        justify-content: center;
        background-color: #3c3a35;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        align-items: center;
        border: 2px solid gray;
    }
`;

function VidItemLayout({ index, src, title, desc }) {
    const [PreviewCheckOn, setPreviewCheckOn] = useState(false);
    useEffect(() => console.log("하단 바 삽입."), [PreviewCheckOn]);
    const element = useRef();
    const previewRef = useRef();

    const zoomInPunch = () => {
        setPreviewCheckOn(true);
        element.current.style.transition = "all 0.5s";
        element.current.style.transform = "scale(1.2)";
        element.current.style.transitionDelay = "0.5s";
        // element.current.style.transform = "translate(-100%)";

        element.current.style.zIndex = 20;
    };

    const zoomOut = () => {
        setPreviewCheckOn(false);

        element.current.style.transition = "all 0.5s";
        element.current.style.transform = "scale(1.0)";
        element.current.style.zIndex = 0;
    };

    return (
        <div className={`content${index} vid-content`} ref={element}>
            <img
                onMouseEnter={zoomInPunch}
                onMouseLeave={zoomOut}
                src={src}
                alt=""
                style={{ width: "248px" }}
            />

            {/* //// */}

            {PreviewCheckOn ? (
                <PreviewContainer
                    ref={previewRef}
                    onMouseEnter={zoomInPunch}
                    onMouseLeave={zoomOut}
                >
                    <PreviewInnerContainer>
                        <div
                            style={{
                                marginLeft: "10px",
                                backgroundColor: "white",
                            }}
                        >
                            <i
                                class="fas fa-play"
                                style={{ paddingLeft: "2px", color: "black" }}
                            ></i>
                        </div>
                        <div>
                            <i class="fas fa-plus"></i>
                        </div>
                        <div>
                            <i class="far fa-thumbs-up"></i>
                        </div>
                        <div>
                            <i class="far fa-thumbs-down"></i>
                        </div>
                        <div style={{ marginLeft: "65px" }}>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                    </PreviewInnerContainer>
                    <div
                        style={{
                            position: "relative",
                            top: "3vh",
                            left: "15px",
                        }}
                    >
                        {desc}
                    </div>
                </PreviewContainer>
            ) : null}
        </div>
    );
}

export default VidItemLayout;
