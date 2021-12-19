import { useEffect, useRef, useState } from "react";
import "./MainPage.css";
import Top10Layout from "./Top10Layout";
import HotItemLayout from "./HotItemLayout";
import { useLocation, useNavigate } from "react-router";
import VidItemLayout from "./VidItemLayout";

function MainPage() {
  const container_Carousel_Hot = useRef();
  const container_Carousel_Top = useRef();
  const [nowX_hot, setNowX_hot] = useState(0);
  const [nowX_top, setNowX_top] = useState(0);

  useEffect(() => {
    container_Carousel_Hot.current.style.transform = `translateX(${nowX_hot}vw)`;
    container_Carousel_Top.current.style.transform = `translateX(${nowX_top}vw)`;
  }, [nowX_hot, nowX_top]);

  const location = useLocation();

  const Nav = useNavigate();

  const goUserSelect = () => {
    Nav("/userSelect");
  };

  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);

  setTimeout(() => {
    setTop10Contents([
      {
        index: 1,
        rank: (
          <svg
            id="rank-1"
            height="10vw"
            viewBox="-20 0 70 154"
            className="svg-icon svg-icon-rank-1 top-10-rank"
          >
            <path
              stroke="#595959"
              stroke-linejoin="square"
              stroke-width="4"
              d="M35.377 152H72V2.538L2 19.362v30.341l33.377-8.459V152z"
            ></path>
          </svg>
        ),
        src: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABc-bIO3lcRf9thk5HbFGEyv79oLzEqA2zZa9LAIDwC9NjxnKDm5-RcnDfM-s5Cn17g3PUdm5XHPbuxTtaPfp-J-JPrPlgUVdNLESVUsFkE2Ek7glnj7U5KcWD3ZmaA.webp?r=3be",
        title: "지옥",
      },
      {
        index: 2,
        rank: (
          <svg
            id="rank-2"
            height="10vw"
            viewBox="0 0 80 154"
            className="svg-icon svg-icon-rank-2 top-10-rank"
          >
            <path
              stroke="#595959"
              stroke-linejoin="square"
              stroke-width="4"
              d="M3.72 152H113v-30.174H50.484l4.355-3.55 29.453-24.012c5.088-4.124 9.748-8.459 13.983-13.004 4.16-4.464 7.481-9.339 9.972-14.629 2.449-5.203 3.678-11.113 3.678-17.749 0-9.428-2.294-17.627-6.875-24.645-4.597-7.042-10.941-12.494-19.07-16.376C77.803 3.957 68.496 2 58.036 2 47.591 2 38.37 4.023 30.347 8.06c-8.015 4.032-14.457 9.578-19.352 16.654-4.492 6.493-7.389 13.803-8.693 21.952h34.055c1.236-3.52 3.398-6.52 6.459-8.97 3.54-2.834 8.277-4.224 14.147-4.224 5.93 0 10.552 1.537 13.76 4.681 3.181 3.12 4.791 7.024 4.791 11.594 0 4.151-1.16 7.934-3.468 11.298-2.192 3.194-5.987 7.124-11.405 11.84L3.72 122.465V152z"
            ></path>{" "}
          </svg>
        ),
        src: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABfm0HWOpXFENn0JWOB9crJO9e3vQr62VXywsnE1gwRibDlC3MUZKXCfrzfNdQ1DxVwbjCDAHv75w2nQc8Bs-DH5k0ZlDgnoxzt1orcTodQnGik94iangubva9sb1aOeEpyg8NBzBj5HtDw.webp?r=4/dd",
        title: "연모",
      },
      {
        index: 3,
        rank: (
          <svg
            id="rank-3"
            height="10vw"
            viewBox="0 0 80 154"
            className="svg-icon svg-icon-rank-3 top-10-rank"
          >
            <path
              stroke="#595959"
              stroke-linejoin="square"
              stroke-width="4"
              d="M3.809 41.577h33.243c1.3-2.702 3.545-4.947 6.674-6.72 3.554-2.015 7.83-3.01 12.798-3.01 5.555 0 10.14 1.11 13.723 3.376 3.839 2.427 5.782 6.283 5.782 11.315 0 4.553-1.853 8.395-5.473 11.38-3.547 2.926-8.18 4.37-13.821 4.37H41.44v28.366h16.77c5.572 0 10.275 1.227 14.068 3.711 4.02 2.633 6.071 6.581 6.071 11.616 0 5.705-1.943 9.975-5.853 12.562-3.658 2.42-8.292 3.61-13.863 3.61-5.205 0-9.82-.94-13.827-2.836-3.698-1.75-6.32-4.272-7.785-7.529H2.33c2.096 12.089 7.761 21.65 17.028 28.78C29.242 148.175 42.594 152 59.476 152c10.706 0 20.175-1.783 28.42-5.337 8.185-3.528 14.575-8.486 19.208-14.884 4.595-6.346 6.896-13.938 6.896-22.837 0-6.952-1.93-13.494-5.81-19.666-3.815-6.07-9.68-10.367-17.683-12.908l-5.46-1.735 5.353-2.04c6.659-2.538 11.667-6.338 15.083-11.412 3.431-5.096 5.142-10.806 5.142-17.181 0-8.471-2.262-15.778-6.787-21.985-4.574-6.275-10.7-11.17-18.408-14.696C77.683 3.775 69.109 2 59.687 2 44.084 2 31.515 5.816 21.91 13.415c-9 7.119-15.025 16.486-18.101 28.162z"
            ></path>
          </svg>
        ),
        src: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABVb3i_YVwaHb1BencBDFwPhYDQ_QA6fdnobRg344aiKjJ_9iJXSrzIQvJNV-qL-FLQR_7jL4uvfSaQXJNCncpjYa-P8ut_yk5LDgSwQoasGDtD0rS6dDfUYiBSmyHyDBwT6Vdk1NCatBig.webp?r=0/e6",
        title: "너를 닮은 사람",
      },
      {
        index: 4,
        rank: (
          <svg
            id="rank-4"
            height="10vw"
            viewBox="0 0 81 154"
            className="svg-icon svg-icon-rank-4 top-10-rank"
          >
            <path
              stroke="#595959"
              stroke-linejoin="square"
              stroke-width="4"
              d="M72 152h35.333v-30.977H128V92.497h-20.667V2H69.89L2 92.712v28.311h70V152zM36.202 92.188l35.93-47.998v47.998h-35.93z"
            ></path>
          </svg>
        ),
        src: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABTUldQsltni_TGsCjuEbQREZILK8qOhQVeNs53SLquX44wM-Jz1SmHUi1r7fjV2S0ol62IsG1Xzhr2FPr3Rzx6fHZRyD.webp?r=9/69",
        title: "싱크홀",
      },
      {
        index: 5,
        rank: (
          <svg
            id="rank-5"
            height="10vw"
            viewBox="0 0 81 154"
            className="svg-icon svg-icon-rank-5 top-10-rank"
          >
            <path
              stroke="#595959"
              stroke-linejoin="square"
              stroke-width="4"
              d="M105.588 32.174V2H13.534l-8.3 88.357h32.463c2.145-2.362 4.866-4.254 8.143-5.675 3.585-1.554 7.543-2.328 11.859-2.328 6.247 0 11.418 1.745 15.418 5.255 4.061 3.564 6.104 8.37 6.104 14.265 0 6.041-2.044 10.89-6.121 14.387-3.999 3.43-9.162 5.132-15.401 5.132-4.299 0-8.17-.694-11.601-2.095-3.11-1.268-5.577-2.946-7.368-5.042H2.592c3.308 11.593 9.782 20.623 19.46 27.164C32.472 148.464 45.64 152 61.602 152c10.12 0 19.294-1.99 27.548-5.966 8.198-3.949 14.711-9.718 19.572-17.335 4.844-7.59 7.278-16.95 7.278-28.123 0-9.182-2.013-17.314-6.032-24.431-4.02-7.118-9.514-12.7-16.51-16.775-6.99-4.072-14.849-6.109-23.612-6.109-11.06 0-20.099 3.483-27.234 10.461l-3.892 3.806 3.273-35.354h63.595z"
            ></path>
          </svg>
        ),
        src: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABYb4RFfvR5JFbA2p1v-RUZx58MMzNBWploHEYsaloBzObjA1S9CXKOdgYPpf7zc8poY2Ya3eXlU_X0rHDt9Y_G1TyQ-PWaPgDlCb44S7PEFDJylF9SmnX-m402SFBULlZhipvxH3g_QTvg.webp?r=7/08",
        title: "나는 솔로",
      },
      {
        index: 6,
        rank: (
          <svg
            id="rank-6"
            height="10vw"
            viewBox="0 0 81 154"
            className="svg-icon svg-icon-rank-6 top-10-rank"
          >
            <path
              stroke="#595959"
              stroke-linejoin="square"
              stroke-width="4"
              d="M79.482 38.192h35.551c-3.284-10.945-8.963-19.573-17.048-25.938C89.323 5.434 77.531 2 62.545 2 50.756 2 40.35 4.86 31.277 10.577c-9.064 5.712-16.198 14.09-21.412 25.178C4.63 46.893 2 60.425 2 76.365c0 14.416 2.356 27.344 7.059 38.798 4.667 11.368 11.573 20.34 20.734 26.956C38.904 148.7 50.225 152 63.816 152a61.513 61.513 0 0019.922-3.278 53.546 53.546 0 0017.378-9.792c5.154-4.33 9.255-9.64 12.314-15.947 3.042-6.273 4.57-13.556 4.57-21.868 0-8.812-2.062-16.636-6.182-23.51-4.134-6.897-9.643-12.293-16.55-16.212-6.905-3.917-14.48-5.874-22.76-5.874-14.546 0-25.34 4.55-32.569 13.63l-4.003 5.03.443-6.413c.874-12.636 3.56-21.85 8.168-27.654 4.69-5.907 10.885-8.9 18.421-8.9 4.26 0 7.826.734 10.685 2.24 2.445 1.287 4.396 2.867 5.829 4.74zM62.605 123c-5.825 0-10.902-1.894-15.136-5.655C43.173 113.528 41 108.603 41 102.71c0-5.881 2.164-10.864 6.44-14.818C51.674 83.975 56.762 82 62.604 82c5.847 0 10.906 1.98 15.074 5.905C81.878 91.859 84 96.837 84 102.71c0 5.885-2.131 10.805-6.35 14.622-4.167 3.77-9.214 5.668-15.045 5.668z"
            ></path>
          </svg>
        ),
        src: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABaw08mONqNcP5RvMQaR8vhogallZP4fcuY0xVlfMq6xRYcbWVCGqcVzKWY-4ljEHrE43Wzk_3Tsz26gHBdgVvunPtfkoxdm70rUvym0lH056UHZEpUp7TYYP0-tRJA.webp?r=8/f7",
        title: "아케인",
      },
      {
        index: 7,
        rank: (
          <svg
            id="rank-7"
            height="10vw"
            viewBox="0 0 78 154"
            className="svg-icon svg-icon-rank-7 top-10-rank"
          >
            <path
              stroke="#595959"
              stroke-width="4"
              d="M113,2 L2,2 L2,33.4022989 L75.9665929,33.4022989 L21.22571,152 L60.28102,152 L113,32.7672283 L113,2 Z"
              stroke-linejoin="square"
            ></path>
          </svg>
        ),
        src: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABY69o787in86R66VQnhZjDvOAq6XhpUq89MaP33uhYTFllBpp2n9oQkZreJl7km92rC0rHKBpHT3UeKAUBNJr2RlgrlkUpgY03LqL9XLvqnB6NYZm1c4iKr5wVsVTxwMBNz9DlL37bapkQ.webp?r=1/1e",
        title: "구경이",
      },
    ]);

    setHotNowContents([
      {
        index: "1",
        src: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcierLxhc-d_iIUgnGOqUU_BTLgkSPcJeLgsNMYq3MmhEkYIMuoKXAddGYkP6f5vWQPIZUm9_s0wBcQvaGqLZEywtuBK4M8m9tS_hNe8O2b91lVP_uTMjB-3rn6OjxAPi5Q9KsCV0pbnAyAP6naMUaKuDVQAGshmoL7MOthwXoiiVy7UXBhVgos.jpg?r=cbd",
        title: "아케인",
      },
      {
        index: "2",
        src: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVP1nhY92OjXJ2236yl0-GUVJK_jUzSpcJUF7VIMTD6RhjFGAzavpHlbwcWVV1rCS5NEoDSDPXLQYcvAP3XbgBHEhMpoeAR1xA_zCNUktmFrfgO4SgP7kyXTl12u7fH4q_XzjejpFHrWlw7Eye_9dXOh7e3kaGmfWPEvTajHXwbUZD3WNPsUU5M.jpg?r=b45",
        title: "마이네임",
      },
      {
        src: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQw4x67ePluiVqxJDubRlwPiu-X8prhErG1xVicrPhlZbExfiw4U3QVS9rKHtuPOR3vAGUPbTFMQsSGC_52VsV1LJeaFVrHdbEdCWsSP-XZgkNpRuva8PNYVU9sde9fjRr4jYqQzYAZsJuZhitL2nMzfImE.webp?r=ebb",
        title: "싱크홀",
      },
      {
        src: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbRimFoshBDFc5ebs3TXbgMP9qctTPHLzPQ7O2i2LLWdBz7zFhO9Ms5cPZPWmF133AYpF1aDId1zPUClOgQLqs7pMUA.webp?r=c75",
        title: "프리즌 브레이크",
      },
      {
        src: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABROzB4UrA2hplCOUBtwplePj2-vinbbYmuRMYNrkil00kryIpTfoozQWOVzviATkJjK9bxg___XFZbPBWjL3uaZkV30HUtWCCltF9ujagxO2aPlZaHNG3a7pCDAZ.jpg?r=f37",
        title: "로스트 인 스페이스",
      },
      {
        src: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeidbTI7C_3mB-Fl3gIFnKAGd6awhF23c5e8KMWxY47irfDBZ4AGdwTvGpYs1ne0jiqIMxSSJRhDNQyXYNebutYaV5IrnWY0TtzRCpsnjg0-vG5BI6b7OjNP_EJK.jpg?r=229",
        title: "카우보이 비밥",
      },
    ]);
  }, 2000);

  const [top10Contents, setTop10Contents] = useState([]);

  const [hotNowContents, setHotNowContents] = useState([]);

  return (
    <>
      <div>
        <div className="main-full">
          <div className="top-video-div" style={{ height: "40vw" }}>
            <div className="top-video">
              {/* <img
                id="top-video-vid"
                src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZ69OBwRoR4HTLLWfIgOB_bg7N5kL3k7RdcVYDxAwLXm9s36AW9YMvtg3MfEAIivc1WnMlpBSHqwNV_hz7Pkl15djfUi.webp?r=e04"
                alt=""
                style={{ width: "98.5vw" }}
              /> */}
              <header id="navigater">
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
                  <ul className="nav-option-items-ul">
                    <li className="option-item">
                      <a className="option-item-select" href="">
                        홈
                      </a>
                    </li>
                    <li className="option-item">
                      <a className="option-item-select" href="">
                        TV 프로그램
                      </a>
                    </li>
                    <li className="option-item">
                      <a className="option-item-select" href="">
                        영화
                      </a>
                    </li>
                    <li className="option-item">
                      <a className="option-item-select" href="">
                        NEW! 요즘 대세 컨텐츠
                      </a>
                    </li>
                    <li className="option-item">
                      <a className="option-item-select" href="">
                        내가 찜한 컨텐츠
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-search-admin">
                  <div className="nav-search">
                    <button>
                      <img
                        src={"img/pngegg.png"}
                        alt=""
                        style={{ height: "30px" }}
                      />
                    </button>
                  </div>
                  <div className="nav-alarm">
                    <button>
                      <img
                        src={"img/bell.png"}
                        alt=""
                        style={{ height: "30px" }}
                      />
                    </button>
                  </div>
                  <div className="nav-user">
                    <img
                      src={location.state}
                      width={"50vw"}
                      alt=""
                      onClick={goUserSelect}
                    />
                  </div>
                </div>
              </header>
              <img
                id="top-video-logo"
                src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABbJH1Cn553LqrCQspPbTaT0kfIUngZ-UpLoRfAancb5MbbEApHjG3NYN3JGuWFagsgay4-kKFDSH5yaE1wp4dMXMAMdwWwsNqTxC.webp?r=295"
                alt=""
              />
              <div
                id="top-video-desc"
                style={{ backgroundColor: "rgba(0,0,0,0)" }}
              >
                <div
                  class="vid-desc"
                  style={{ backgroundColor: "rgba(0,0,0,0)" }}
                >
                  말기 암 진단이 그를 범죄의 세계로 밀어 넣었다. 아니, 그런 줄
                  알았다. 제자와 함께 메스를 제조하기로 한 것은 순전히 가족을
                  지키려는 결정이었건만, 악과 타협한 그 순간, 그는 다가올 거대한
                  제국을 선택한 것이었다.
                </div>
                <div
                  style={{ height: "20px", backgroundColor: "rgba(0,0,0,0)" }}
                ></div>

                <button class="vid-play">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="Hawkins-Icon Hawkins-Icon-Standard"
                  >
                    <path
                      d="M3 2.69127C3 1.93067 3.81547 1.44851 4.48192 1.81506L21.4069 11.1238C22.0977 11.5037 22.0977 12.4963 21.4069 12.8762L4.48192 22.1849C3.81546 22.5515 3 22.0693 3 21.3087V2.69127Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  재생
                </button>
                <button class="vid-info">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="Hawkins-Icon Hawkins-Icon-Standard"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  상세정보
                </button>
              </div>
            </div>
          </div>
          <div className="top-10-div">
            <p className="content-title">오늘 한국의 TOP10 콘텐츠</p>
            <div className="Carousel_outbox">
              <label
                className="left"
                onClick={() => {
                  nowX_top < 0
                    ? setNowX_top(nowX_top + 20)
                    : setNowX_top(nowX_top);
                }}
              >
                left
              </label>
              <label
                className="right"
                onClick={() => {
                  setNowX_top(nowX_top - 20);
                }}
              >
                right
              </label>
              <div
                className="top-10-contents Carousel_inbox"
                style={{ height: "230px" }}
                ref={container_Carousel_Top}
              >
                {top10Contents.map((Top10Content) => (
                  <Top10Layout
                    rank={Top10Content.rank}
                    index={Top10Content.index}
                    src={Top10Content.src}
                    title={Top10Content.title}
                    key={Top10Content.index}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="hot-now-contents-div">
            <p className="content-title">지금 뜨는 컨텐츠</p>
            <div className="Carousel_outbox">
              {/*캐러셀 외부 구현*/}
              <label
                className="left_hot"
                onClick={() => {
                  console.log({ nowX_hot });
                  nowX_hot < 0
                    ? setNowX_hot(nowX_hot + 20)
                    : setNowX_hot(nowX_hot);
                }}
              >
                left
              </label>
              <label
                className="right_hot"
                onClick={() => {
                  setNowX_hot(nowX_hot - 20);
                }}
              >
                right
              </label>
              <div
                className="hot-now-contents Carousel_inbox"
                style={{ height: "190px" }}
                ref={container_Carousel_Hot}
              >
                {/*캐러셀 내부 구현*/}
                {/* 여기에 jsx 이용. */}
                {hotNowContents.map((HotNowContent) => (
                  <HotItemLayout
                    index={HotNowContent.index}
                    src={HotNowContent.src}
                    title={HotNowContent.title}
                    key={HotNowContent.index}
                  />
                ))}
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default MainPage;
