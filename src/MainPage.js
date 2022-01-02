import { useEffect, useRef, useState } from "react";
import "./MainPage.css";
import { useLocation, useNavigate } from "react-router";
import VidItemLayout from "./itemLayoutComp/VidItemLayout";
import Navigator from "./mainpageComp/Navigator";
import RepresentComp from "./mainpageComp/RepresentComp";
import MainHomeComp from "./mainpageComp/MainHomeComp";
import MainTvComp from "./mainpageComp/MainTvComp";
import MainMyWishComp from "./mainpageComp/MainMyWishComp";
import TvRepresentComp from "./mainpageComp/TvRepresentComp";

function MainPage() {
    // const headerLayer = useRef();

    const Nav = useNavigate();
    const goUserSelect = () => {
        Nav("/userSelect");
    };
    const [nowPage, setNowPage] = useState("home");

    // 여러페이지로 갈아끼우기.
    return (
        <>
            <div>
                <div className="main-full">
                    <Navigator setNowPage={setNowPage} />
                    {nowPage === "home" ? (
                        <>
                            <RepresentComp />
                            <MainHomeComp />
                        </>
                    ) : null}
                    {nowPage === "series" ? (
                        <>
                            <TvRepresentComp />
                            <MainTvComp />
                        </>
                    ) : null}
                    {nowPage === "myWistList" ? (
                        <div>
                            <MainMyWishComp />
                        </div>
                    ) : null}
                    <br />
                    <br />
                </div>
            </div>
        </>
    );
}

export default MainPage;
