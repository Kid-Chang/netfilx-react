import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";

const SearchBar = styled.input.attrs({
    type: "text",
    placeholder: "제목, 사람, 장르",
})`
    border: 0 solid black;
    outline: none;
    display: block;
    width: 10vw;
    height: 2vh;
    background-color: black;
    position: relative;
    color: white;
    top: -8px;
`;

const NavOptionBar = styled.a`
    cursor: pointer;
`;

function Navigater({ setNowPage }) {
    const [searchButtonHover, setSearchButtonHover] = useState(false);
    const searchRef = useRef();
    const showSearchSpace = () => {
        setSearchButtonHover(true);
    };
    const disappearSearchSpace = () => {
        setSearchButtonHover(false);
    };
    const headerLayer = useRef();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            // console.log(window.scrollY);
            if (headerLayer.current !== null) {
                if (window.scrollY > 100) {
                    headerLayer.current.style.backgroundColor = "black";
                } else {
                    headerLayer.current.style.backgroundColor = "rgba(0,0,0,0)";
                }
            }
        });
    });
    const location = useLocation();

    const Nav = useNavigate();

    const goUserSelect = () => {
        Nav("/userSelect");
    };

    return (
        <>
            <header id="Navigator" ref={headerLayer}>
                <div className="nav-logo">
                    <img
                        id="logo"
                        style={{ height: "31px" }}
                        src={
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
                        }
                        alt=""
                    />
                </div>
                <div className="nav-option">
                    <ul
                        className="nav-option-items-ul"
                        style={{ paddingTop: "10px" }}
                    >
                        <li className="option-item">
                            <NavOptionBar
                                className="option-item-select"
                                onClick={() => {
                                    setNowPage("home");
                                }}
                            >
                                홈
                            </NavOptionBar>
                        </li>
                        <li className="option-item">
                            <NavOptionBar
                                className="option-item-select"
                                onClick={() => setNowPage("series")}
                            >
                                시리즈
                            </NavOptionBar>
                        </li>
                        <li className="option-item">
                            <NavOptionBar className="option-item-select">
                                영화
                            </NavOptionBar>
                        </li>
                        <li className="option-item">
                            <NavOptionBar className="option-item-select">
                                NEW! 요즘 대세 컨텐츠
                            </NavOptionBar>
                        </li>
                        <li className="option-item">
                            <NavOptionBar
                                className="option-item-select"
                                onClick={() => setNowPage("myWistList")}
                            >
                                내가 찜한 컨텐츠
                            </NavOptionBar>
                        </li>
                    </ul>
                </div>
                <div className="nav-search-admin">
                    {searchButtonHover ? (
                        <div
                            style={{
                                border: "2px solid white",
                                backgroundColor: "black",
                                height: "4vh",
                                top: "10px",
                            }}
                            onMouseLeave={() => disappearSearchSpace()}
                        >
                            <i
                                class="fas fa-search fa-2x"
                                style={{
                                    marginLeft: "10px",
                                    marginRight: "10px",
                                    display: "inline-block",
                                    position: "relative",
                                    top: "10px",
                                }}
                            ></i>
                            <SearchBar
                                style={{
                                    display: "inline-block",
                                    position: "relative",
                                    top: "5px",
                                }}
                                ref={searchRef}
                            />
                        </div>
                    ) : (
                        <div className="nav-search menu-item">
                            <i
                                class="fas fa-search fa-2x"
                                onClick={() => showSearchSpace()}
                            ></i>
                        </div>
                    )}

                    <div className="nav-alarm menu-item">
                        <i class="fas fa-bell fa-2x"></i>
                    </div>
                    <div
                        className="nav-user menu-item"
                        style={{ marginTop: "7px" }}
                    >
                        <img
                            src={location.state}
                            width={"50vw"}
                            alt=""
                            onClick={goUserSelect}
                        />
                    </div>
                </div>
            </header>
        </>
    );
}
export default Navigater;
