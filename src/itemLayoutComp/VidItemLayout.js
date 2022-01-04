// 이게 아마 컴포넌트...?
import { useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loginAction } from "../store/actions/login";
import { addWishAction, delWishAction } from "../store/actions/wish";
const PreviewContainer = styled.div`
    padding-top: 20px;
    background-color: #141414;
    width: 248px;
    height: 100px;
    // display: none;
    border-radius: 3px;
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

function VidItemLayout({
    index,
    src,
    title,
    desc,
    setViewMoreCheckOn,
    wished,
    ageAndSeason,
    describe,
}) {
    setTimeout(() => {}, 200);

    const dispatch = useDispatch();
    const [wishCheck, setWishCheck] = useState(wished);
    const [PreviewCheckOn, setPreviewCheckOn] = useState(false);
    // useEffect(() => console.log("하단 바 삽입."), [PreviewCheckOn]);
    const element = useRef();
    const previewRef = useRef();

    const zoomInPunch = () => {
        setPreviewCheckOn(true);
        element.current.style.zIndex = 20;
        element.current.style.transform = "scale(1.4)";
        element.current.style.transition = "all 0.5s";
        element.current.style.transitionDelay = "0.5s";
        // element.current.style.transform = "translate(-100%)";
    };
    const addWishList = () => {
        console.log("add wish");
        setWishCheck(true);
        dispatch(
            addWishAction({
                index: index,
                src: src,
                title: title,
                desc: desc,
                wishCheck,
            }),
        );
    };
    const delWishList = () => {
        console.log("del wish");
        setWishCheck(false);
        dispatch(delWishAction({ title: title }));
    };
    const viewMoreClick = () => {
        setViewMoreCheckOn(true);
        dispatch(
            loginAction({
                src: src,
                title: title,
                desc: desc,
                describe: describe,
                ageAndSeason: ageAndSeason,
            }),
        );
    };

    const zoomOut = () => {
        setPreviewCheckOn(false);

        element.current.style.transition = "all 0.5s";
        element.current.style.transform = "scale(1.0)";
        element.current.style.zIndex = -10;
    };

    return (
        <div className={`content${index} vid-content`} ref={element}>
            <img
                onMouseEnter={zoomInPunch}
                onMouseLeave={zoomOut}
                src={src}
                alt=""
                style={{
                    width: "248px",
                    marginBottom: "-10px",
                    borderRadius: "3px",
                }}
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
                            {wishCheck ? (
                                <i
                                    class="fas fa-check"
                                    onClick={() => delWishList()}
                                ></i>
                            ) : (
                                <i
                                    class="fas fa-plus"
                                    onClick={() => addWishList()}
                                ></i>
                            )}

                            {/* 위시에 추가하기 */}
                            {/* 여기서 위시에 추가됬냐안됬냐에 따라 추가 제거 기능 구현...? */}
                        </div>
                        <div>
                            <i class="far fa-thumbs-up"></i>
                        </div>
                        <div>
                            <i class="far fa-thumbs-down"></i>
                        </div>
                        <div style={{ marginLeft: "65px" }}>
                            <i
                                class="fas fa-chevron-down"
                                onClick={viewMoreClick}
                            ></i>
                        </div>
                    </PreviewInnerContainer>
                    <div
                        style={{
                            position: "relative",
                            top: "2vh",
                            left: "15px",
                        }}
                    >
                        <div style={{}}>
                            <p style={{ display: "inline" }}>{ageAndSeason}</p>
                            <p
                                style={{
                                    marginLeft: "10px",
                                    border: "1px solid white",
                                    display: "inline",
                                    fontSize: "5px",
                                    position: "relative",
                                    top: "-1px",
                                }}
                            >
                                HD
                            </p>
                            <br />
                            {desc}
                        </div>
                    </div>
                </PreviewContainer>
            ) : null}
        </div>
    );
}

export default VidItemLayout;
