import styled from "styled-components";

const VidDiv = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), black),
        url(https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYq6a-_69bq9w-EIAkmky4I553b5AX9i1eDSsA53dHENcrJehYfH9dlI7XRL8EoxQCkUao_HI5lGF8J_zcy_jVw4zekd.webp?r=853);
    background-size: 100vw;
`;

const TvRepresentComp = () => {
    return (
        <VidDiv style={{ height: "40vw" }}>
            <div className="top-video">
                <img
                    id="top-video-logo"
                    src="https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABen3k145AxOtqJZtu7iJusjHrHLqErGCG3eRhvx5QKxCNDAGgW668Q6bjI4OfEBveHxjVMXh85RGnVzyPMsOwCA5HLPcAYBT5rzX6ot_DfUPjRfw9zDAPOCyM_8gK9yAnu83bs1WKf4Y1Bd1kj7wyys-xuIHcgt97dEzCp80jgTEng.webp?r=bde"
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
                        1950년대 한 보육원, 체스에 천재적인 재능을 보이는 소녀.
                        점점 더 넓은 세계로 향하며, 체스 스타의 여정을 이어간다.
                        하지만 더 이기고 싶다면 중독부터 극복해야 한다.
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
        </VidDiv>
    );
};

export default TvRepresentComp;
