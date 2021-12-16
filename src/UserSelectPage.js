import React, { useState } from "react";
import "./UserSelectPage.css";
import { useNavigate } from "react-router";

function UserSelectPage() {
  const Nav = useNavigate();
  const goMain = (e) => {
    Nav("/Main", { state: e.target.currentSrc });
  };

  return (
    <div>
      <header id="userSelect_header">
        <div id="logo_div" class="header_div">
          <img
            id="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
        <div class="header_div"></div>
        <div class="header_div"></div>
        <div class="header_div"></div>
      </header>

      <div class="select-div">
        <div class="select-title">
          <p class="title">넷플릭스를 시청할 프로필을 선택하세요.</p>
        </div>
        <div class="choose-profile">
          <div class="section1">
            <img
              class="profile"
              onClick={goMain}
              src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYBfhbQeRdRi16o-W9eLCR_X7RY5rzo3s4wFxENudg0cZxSl-5n1q3wDVK3gMF1y3gEwJpx8rLyuqkY0H-jSlRqo-wdo.png?r=a53"
              alt=""
            />
            <p class="name">profile 1</p>
          </div>
          <div class="section2">
            <img
              class="profile"
              onClick={goMain}
              src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABSDfl6WDSQG2Dbr75-WHIzCvEwFDfdowGJuwkLmp4TbauGzMw_XP0ZxcedJRHVy-2Ul6oi0d_TZ23nmroGbhj7CdGCVn.png?r=215"
              alt=""
            />
            <p class="name">profile 2</p>
          </div>
          <div class="section3">
            <img
              class="profile"
              onClick={goMain}
              src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABU5nnlwd-Hd9Yor33HmcSsYYXktWIsAU-5PkqWfC8X8iDSySP1bQAAn5PT-3Ymfg5W4uRRc9BZFpWrAGyc_ngENF9z6K.png?r=a13"
              alt=""
            />
            <p class="name">profile 3</p>
          </div>
          <div class="section4">
            <img
              class="profile"
              onClick={goMain}
              src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUj0IOV0_QieKfsxvEo082aAfiQ6rf_952WGCQGudOv8rz6apgEkWqIi4Q5dU_IdGskVQwNxtJEfvKROhf6herM588wE.png?r=e97"
              alt=""
            />
            <p class="name">profile 4</p>
          </div>
          <div class="section5">
            <img
              class="profile"
              onClick={goMain}
              src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABW0tFAL06k209hntna4GaBTUqnV_DS2mCxXG46r5eWV6iPaKY9uUC0wb6C2zBF36dmcymcmVtPeDVLZYwojCGC3Mavrw.png?r=3af"
              alt=""
            />
            <p class="name">profile 5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSelectPage;
