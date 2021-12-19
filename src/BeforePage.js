import React, { useState } from "react";
import "./BeforePage.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

function BeforePage() {
  const email_print = () => {
    const email_value = document.getElementById("email_input").value;
    alert(email_value);
  };

  const StyledLink = styled(Link)`
    background-color: #e50815;
    margin: 0 auto;
    width: 75px;
    height: 35px;
    margin-top: 10%;
    border-radius: 5px;
  `;

  const qnaContents = [
    {
      title: "넷플릭스란 무엇인가요?",
      content:
        "넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다. 저렴한 월 요금으로 일체의 광고 없이 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 시리즈와 영화가 제공됩니다.",
      index: 1,
    },
    {
      title: "넷플릭스 요금은 얼마인가요?",
      content:
        "스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은 월 9,500원부터 17,000원까지 다양합니다. 추가 비용이나 약정이 없습니다.",
      index: 2,
    },
  ];

  return (
    <div>
      <div id={"main_1"}>
        <div id="_1_img">
          <img
            id={"main_1_img"}
            src={
              "https://assets.nflxext.com/ffe/siteui/vlv3/ddd4085b-8ed5-416a-9b80-5085784ba0e9/5e3ba062-2e50-4086-8d83-65bbe3c485c1/KR-ko-20211206-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            }
            alt={"background_1"}
            style={{ height: "930px" }}
          />
        </div>
        <header id="Before_header">
          <div id={"logo_div"} className={"header_div_B"}>
            <img
              id={"logo_B"}
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
              }
              alt=""
            />
          </div>
          <div className={"header_div_B"}></div>
          <div id={"lang_div"} className={"header_div_B"}>
            <select>
              <option>한국어</option>
              <option>영어</option>
            </select>
          </div>
          <div id={"login_div"} className={"header_div_B"}>
            <StyledLink to={"/UserSelect"}>
              <p style={{ marginTop: "15%", textAlign: "center" }}>로그인</p>
            </StyledLink>
          </div>
        </header>

        <div id={"_1_desc"} className={"desc_div"}>
          <p
            className={"desc_title"}
            id={"main_title"}
            style={{ fontWeight: 900 }}
          >
            영화와 시리즈를 무제한으로.
          </p>
          <br />
          <p className={"desc"} id={"main_desc"}>
            다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
          </p>
          <br />
          <p
            className={"desc_lower"}
            id={"main_desc_lower"}
            style={{ marginBottom: "20px" }}
          >
            시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
            주소를 입력하세요.
          </p>
          <form className={"input_email"} onSubmit={email_print}>
            <input
              type="email"
              name="email_input"
              required
              id="email_input"
              placeholder="이메일 주소"
              style={{
                width: "450px",
                height: "60px",
                boxSizing: "border-box",
              }}
            />
            <button
              type="submit"
              style={{
                width: "166px",
                height: "60px",
                backgroundColor: "red",
                color: "white",
              }}
              box-sizing="border-box"
            >
              시작하기
            </button>
          </form>
        </div>
      </div>

      <div id="main_2">
        <div id="_2_desc" className="desc_div">
          <p className="desc_title">TV로 즐기세요. </p>
          <br />
          <p className="desc">
            스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이
            플레이어 등 다양한 디바이스에서 시청하세요.
          </p>
        </div>
        <div id="_2_img" className="before_imgs">
          <img
            id="main_2_img"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            // style={{ width: "40vw" }}
            alt=""
          />
        </div>
      </div>
      <div id="main_3">
        <div id="3_img" className="before_imgs">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
            // style={{ width: "40vw" }}
          />
        </div>
        <div id="_3_desc" className="desc_div">
          <p className="desc_title">
            즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.
          </p>
          <br />
          <p className="desc">간편하게 저장하고 빈틈없이 즐겨보세요.</p>
        </div>
      </div>

      <div id="main_4">
        <div id="4_desc" className="desc_div">
          <p className="desc_title">다양한 디바이스에서 시청하세요.</p> <br />
          <p className="desc">
            각종 영화와 TV 프로그램을 스마트폰, 태블릿, 노트북, TV에서
            무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다.
          </p>
        </div>
        <div id="4_img" className="before_imgs">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
            // style={{ width: "40vw" }}
            alt=""
          />
        </div>
      </div>
      <div id="main_5">
        <div id="5_img" className="before_imgs">
          <img
            src="https://occ-0-2218-1361.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABTyynLTvOBU46RmBnCIPyjAryrXCZKImpoXdp7Mz54jVGKnBQ1X84bzR-3vtD-RA4uu2b1FjrDgfxE6KElG14WAXW19X.png?r=acf"
            // style={{ width: "40vw" }}
            alt=""
          />
        </div>
        <div id="5_desc" className="desc_div">
          <p className="desc_title">
            어린이 전용 프로필을
            <br /> 만들어 보세요.
          </p>{" "}
          <br />
          <p className="desc">
            자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이
            특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.
          </p>
        </div>
      </div>

      <div id="main_6">
        <p className="desc_title">자주 묻는 질문</p>
        <input type="radio" name="accordion" id="answer01" />
        <label className="faq_question" for="answer01">
          <p className="ques-title">넷플릭스란 무엇인가요?</p>
        </label>
        <div>
          <p className="faq_answer desc">
            넷플릭스는 각종 수상 경력에 빛나는 TV 프로그램, 영화, 애니메이션,
            다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의
            디바이스에서 시청할 수 있는 스트리밍 서비스입니다.
            <br />
            <br />
            저렴한 월 요금으로 일체의 광고 없이 원하는 시간에 원하는 만큼 즐길
            수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 TV
            프로그램과 영화가 제공됩니다.
          </p>
        </div>
        <input type="radio" name="accordion" id="answer02" />
        <label for="answer02" className="faq_question">
          <p className="ques-title">넷플릭스 요금은 얼마인가요?</p>
        </label>
        <div>
          <p className="faq_answer desc">
            스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한
            디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은
            월 9,500원부터 17,000원까지 다양합니다. 추가 비용이나 약정이
            없습니다.
          </p>
        </div>
        <input type="radio" name="accordion" id="answer03" />
        <label for="answer03" className="faq_question">
          <p className="ques-title">어디에서 시청할 수 있나요?</p>
        </label>
        <div>
          <p className="faq_answer desc">
            언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면
            PC에서 netflix.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어
            있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV, 스마트폰, 태블릿,
            스트리밍 미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수
            있습니다.
            <br />
            iOS, Android, Windows 10용 앱에서는 좋아하는 프로그램을 저장할 수도
            있습니다. 저장 기능을 이용해 이동 중이나 인터넷에 연결할 수 없는
            곳에서도 시청하세요. 넷플릭스는 어디서든 함께니까요.
          </p>
        </div>

        {/* <ul className="faq_list">
          <li className="faq_list_item what_is_netfilx">
            <button className="faq_question" onClick="showQna">
              넷플릭스란 무엇인가요?
            </button>
            <div className="closed faq_answer desc">
              <p>
                넷플릭스는 각종 수상 경력에 빛나는 TV 프로그램, 영화,
                애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한
                수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다.
                <br />
                <br />
                저렴한 월 요금으로 일체의 광고 없이 원하는 시간에 원하는 만큼
                즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주
                새로운 TV 프로그램과 영화가 제공됩니다.
              </p>
            </div>
          </li>
          <li className="faq_list_item what_is_netfilx">
            <button className="faq_question">
              넷플릭스 요금은 얼마인가요?
            </button>
            <div className="closed faq_answer desc">
              <p>
                스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한
                디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십
                요금은 월 9,500원부터 17,000원까지 다양합니다. 추가 비용이나
                약정이 없습니다.
              </p>
            </div>
          </li>
          <li className="faq_list_item what_is_netfilx">
            <button className="faq_question">어디에서 시청할 수 있나요?</button>
            <div className="closed faq_answer desc">
              <p>
                언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면
                PC에서 netflix.com을 통해 바로 시청할 수 있으며, 인터넷이
                연결되어 있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV,
                스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔 등)에서도
                언제든지 시청할 수 있습니다.
                <br />
                iOS, Android, Windows 10용 앱에서는 좋아하는 프로그램을 저장할
                수도 있습니다. 저장 기능을 이용해 이동 중이나 인터넷에 연결할 수
                없는 곳에서도 시청하세요. 넷플릭스는 어디서든 함께니까요.
              </p>
            </div>
          </li>
        </ul> */}
      </div>
      <footer>
        <div className="footer_box">
          <ul className="footer_box_ul">
            <li className="footer-link-item">자주 묻는 질문</li>
            <li className="footer-link-item">투자정보</li>
            <li className="footer-link-item">개인정보</li>
            <li className="footer-link-item">속도 테스트</li>
            <li className="footer-link-item">고객센터</li>
            <li className="footer-link-item"></li>
            <li className="footer-link-item"></li>
            <li className="footer-link-item"></li>
            <li className="footer-link-item"></li>
            <li className="footer-link-item"></li>
            <li className="footer-link-item"></li>
            <li className="footer-link-item"></li>
            <li className="footer-link-item"></li>
            <li className="footer-link-item"></li>
            <li className="footer-link-item"></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default BeforePage;
