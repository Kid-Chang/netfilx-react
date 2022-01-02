const RepresentComp = () => {
    return (
        <div className="top-video-div" style={{ height: "40vw" }}>
            <div className="top-video">
                {/* <img
                id="top-video-vid"
                src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZ69OBwRoR4HTLLWfIgOB_bg7N5kL3k7RdcVYDxAwLXm9s36AW9YMvtg3MfEAIivc1WnMlpBSHqwNV_hz7Pkl15djfUi.webp?r=e04"
                alt=""
                style={{ width: "98.5vw" }}
              /> */}
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
                        className="vid-desc"
                        style={{ backgroundColor: "rgba(0,0,0,0)" }}
                    >
                        말기 암 진단이 그를 범죄의 세계로 밀어 넣었다. 아니,
                        그런 줄 알았다. 제자와 함께 메스를 제조하기로 한 것은
                        순전히 가족을 지키려는 결정이었건만, 악과 타협한 그
                        순간, 그는 다가올 거대한 제국을 선택한 것이었다.
                    </div>
                    <div
                        style={{
                            height: "20px",
                            backgroundColor: "rgba(0,0,0,0)",
                        }}
                    ></div>
                    <div className="vid-buttons">
                        <div className="vid-play-button">
                            <i className="fas fa-play"></i>
                            재생
                        </div>
                        <div className="vid-info-button">
                            <i className="fal fa-info-circle" />
                            상세정보
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RepresentComp;
