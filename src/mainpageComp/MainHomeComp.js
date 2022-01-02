import { useEffect, useRef, useState } from "react";
import Top10Layout from "../Top10Layout";
import VidItemLayout from "../itemLayoutComp/VidItemLayout";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const LargeViewContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    border-radius: 20px;
    & > div {
        width: 850px;
        height: 90vh;
        background-color: #181818;
        position: fixed;
        left: calc(50% - 425px);
        top: 5vh;
        z-index: 30;
    }
    & > div > img {
        position: relative;
        top: -40px;
        width: 100%;
    }
    & > div > div {
        top: 12px;
        left: 790px;
        width: 40px;
        height: 40px;
        position: relative;
        z-index: 10;
        border-radius: 100%;
        background-color: black;
        color: white;
        line-height: 20px;
    }
    & > div > div > i {
        padding: 10px 0 0 14px;
    }
    & > label {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 1;
    }
`;

function MainHomeComp() {
    const container_Carousel_Hot = useRef();
    const container_Carousel_Top = useRef();
    const container_Carousel_Blockbuster = useRef();
    const container_Carousel_TvHot = useRef();
    const container_Carousel_TvRising = useRef();

    const [nowX_hot, setNowX_hot] = useState(6);
    const [nowX_top, setNowX_top] = useState(6);
    const [nowX_blockbuster, setNowX_blockbuster] = useState(6);
    const [nowX_tvHot, setNowX_tvHot] = useState(6);
    const [nowX_tvRising, setNowX_tvRising] = useState(6);

    const [viewMoreCheckOn, setViewMoreCheckOn] = useState(false);

    const [top10Contents, setTop10Contents] = useState([]);
    const [hotNowContents, setHotNowContents] = useState([]);
    const [blockbusterContents, setBlockbusterContents] = useState([]);
    const [tvHotNowContents, setTvHotNowContents] = useState([]);
    const [tvRisingNowContents, setTvRisingNowContents] = useState([]);

    const LargeViewOff = () => {
        setViewMoreCheckOn(false);
    };

    useEffect(() => {
        container_Carousel_Hot.current.style.transform = `translateX(${nowX_hot}vw)`;
        container_Carousel_Top.current.style.transform = `translateX(${nowX_top}vw)`;
        container_Carousel_Blockbuster.current.style.transform = `translateX(${nowX_blockbuster}vw)`;
        container_Carousel_TvHot.current.style.transform = `translateX(${nowX_tvHot}vw)`;
        container_Carousel_TvRising.current.style.transform = `translateX(${nowX_tvRising}vw)`;
    }, [nowX_hot, nowX_top, nowX_blockbuster, nowX_tvHot, nowX_tvRising]);

    //global state
    const { modalInfo } = useSelector((state) => state.ModalReducer);
    const { src: modalSrc, title: modalTitle, desc: modalDesc } = modalInfo;

    setTimeout(() => {
        setTvRisingNowContents([
            {
                index: "1",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf_5K8OTBMrZQcpfCcYWXdxD3UE5XKOxcIq8mvX7eBIOCEAw2JD1U4dc54RS1HNQZN9VcB4PDv8R5z1p0Mxe9fdJR-sbjkf2ElV39wbWiku2Po3rObpd6n9-sLDA.jpg?r=b45",
                title: "마이네임",
                desc: "격투",
                wished: false,
            },
            {
                index: "2",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcAfVwM_UQ-8HLReFHoCTqhd97pa10An2t-LgSrfYXjvWuJHm86bj-hmBK5aXfs9pOdBInqGJtaJfNj8sOdy1gpi9q7DpflOYyRE9iU6ril3eRK_tF2RHGUMk2Dy0P9-1c5ROXU3oPxEtFWGm5qaCN7Axy3bKNbR6nVhvgPVD6wTBezyWFm6B_psbN9T0yxjxAcmBPCPtE-memGlOHUNLUam.jpg?r=15d",
                title: "에밀리 파리에 가다",
                desc: "뭘까이건",
                wished: false,
            },
            {
                index: "3",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdLz78qXJWNiie-2lf1foN5Z98ZQ-0hmUNj15KIMMckgxRQZQVjchx1FhhESueojKCjUhlAdJDGWK4SU2riZQ4a3E7sc1ol335Xlksk-X378lU9rHeUMKkuv_gWv.jpg?r=157",
                title: "종이의 집",
                desc: "인기짱",
                wished: false,
            },
            {
                index: "4",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT_bVcdgbT53vxz33vp5V1zSNvQ2n2BfjhUuAWHaOq3_i-EgjP_6_5rzxC_aRMGJ3V_3yNi1RdAd7CJMCUFvPVNUudCQ4n-VghpHuQLtVYRvMmocRhvZIcxQyWIg.jpg?r=62a",
                title: "마블 아이언피스트",
                desc: "마.블.",
                wished: false,
            },
            {
                index: "5",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcxDyYqsi0_vUDEb593aBMkY5l_wHGwQkCnuJqVOEoloeRLs8H5XI7IC57lC6Dj-pPOv-0x_dXVGOru8YVzVNmINAOs.webp?r=43c",
                title: "플래시",
                desc: "디.씨.",
                wished: false,
            },
            {
                index: "6",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXrQ1BQrp6M3VY1jTFEMlNgCOX3pAYBA8ScFSvJQqJpTvviEZ574oScpRJBApsvzriao8rpAeisWVYsCdA-J9aCBSyTJN35LU7JafNaT746TTsitvLYJWYJ8pluDe5cdFhJ8uutyuQzychH6I-ejRmoXXLDnq2_qWoJQqlQq0Y15FYr1hqLRkMj8KUwu.webp?r=831",
                title: "그해 우리는",
                desc: "로맨스",
                wished: false,
            },
            {
                index: "7",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZjS94Q--6oi11hLJhJo2RhY8z-rJMTBfMlM6ScrtNnPc4zpiNWqdskdA5S0APnDMpOR6Xwvi735lZNHhCyqc8UZXojfs8eDyZBKqglzDmFetP0j6WPmK6obZihN.jpg?r=08a",
                title: "로스트 인 스페이스",
                desc: "SF",
                wished: false,
            },
            {
                index: "8",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRdVd6vHTHsyEQc59DfUhnFjpIHQ_2cLnwLcAsogjTNANsN_EH9ih-DeFgYlleyV4rcmKX1B9q9aUsasZ131rf0lqlQ2wWSkJ19luIRArkpWRarabNWD5Hd7rh4WOAbRQbn4gHjo-RTfpkdSScvObp9E--qtKWq-0x8vD_jGLff2qW9XRdku9LnhMRRr.webp?r=452",
                title: "불가살",
                desc: "괴이",
                wished: false,
            },
            {
                index: "8",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR0LdJzo0XvyB23PuEWfclx9FZVlLu-YtkX55SUJ9mIiEY2I7yIayN6tBT-RLYFKhh59eZb6SL-bE-QkklN-2-p3RJdnyOQmfKUbDEsik6afmKS9W3-IfN9z9kq3.jpg?r=369",
                title: "더블타겟",
                desc: "첩보",
                wished: false,
            },
            {
                index: "10",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcWFB8Qh3uQ4n_mhGVxMp0EyPbEfRhaZf1nypV7N33IwfK4I1eIJ4WgcPpeAuEynLBlSJPtL-4EFjI2PYxVTTUo037o_A0wU5WfBgE8xn2N585b5l2rLfy7ZKI_Hp-zqVPFCtgNkQ6A5e7VYcaEHjA7gDLlPhIvNVKMG4Dq9VMiDpOopm2NkeW03Xrkh1Qs3SGEIyGzAUSDsVHi1BNmf3htw.jpg?r=788",
                title: "솔로지옥",
                desc: "달달",
                wished: false,
            },
        ]);

        setTvHotNowContents([
            {
                index: "1",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXrQ1BQrp6M3VY1jTFEMlNgCOX3pAYBA8ScFSvJQqJpTvviEZ574oScpRJBApsvzriao8rpAeisWVYsCdA-J9aCBSyTJN35LU7JafNaT746TTsitvLYJWYJ8pluDe5cdFhJ8uutyuQzychH6I-ejRmoXXLDnq2_qWoJQqlQq0Y15FYr1hqLRkMj8KUwu.webp?r=831",
                title: "그해 우리는",
                desc: "로맨스",
                wished: false,
            },
            {
                index: "2",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZjS94Q--6oi11hLJhJo2RhY8z-rJMTBfMlM6ScrtNnPc4zpiNWqdskdA5S0APnDMpOR6Xwvi735lZNHhCyqc8UZXojfs8eDyZBKqglzDmFetP0j6WPmK6obZihN.jpg?r=08a",
                title: "로스트 인 스페이스",
                desc: "SF",
                wished: false,
            },
            {
                index: "3",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRdVd6vHTHsyEQc59DfUhnFjpIHQ_2cLnwLcAsogjTNANsN_EH9ih-DeFgYlleyV4rcmKX1B9q9aUsasZ131rf0lqlQ2wWSkJ19luIRArkpWRarabNWD5Hd7rh4WOAbRQbn4gHjo-RTfpkdSScvObp9E--qtKWq-0x8vD_jGLff2qW9XRdku9LnhMRRr.webp?r=452",
                title: "불가살",
                desc: "괴이",
                wished: false,
            },
            {
                index: "4",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR0LdJzo0XvyB23PuEWfclx9FZVlLu-YtkX55SUJ9mIiEY2I7yIayN6tBT-RLYFKhh59eZb6SL-bE-QkklN-2-p3RJdnyOQmfKUbDEsik6afmKS9W3-IfN9z9kq3.jpg?r=369",
                title: "더블타겟",
                desc: "첩보",
                wished: false,
            },
            {
                index: "5",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcWFB8Qh3uQ4n_mhGVxMp0EyPbEfRhaZf1nypV7N33IwfK4I1eIJ4WgcPpeAuEynLBlSJPtL-4EFjI2PYxVTTUo037o_A0wU5WfBgE8xn2N585b5l2rLfy7ZKI_Hp-zqVPFCtgNkQ6A5e7VYcaEHjA7gDLlPhIvNVKMG4Dq9VMiDpOopm2NkeW03Xrkh1Qs3SGEIyGzAUSDsVHi1BNmf3htw.jpg?r=788",
                title: "솔로지옥",
                desc: "달달",
                wished: false,
            },
            {
                index: "6",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf_5K8OTBMrZQcpfCcYWXdxD3UE5XKOxcIq8mvX7eBIOCEAw2JD1U4dc54RS1HNQZN9VcB4PDv8R5z1p0Mxe9fdJR-sbjkf2ElV39wbWiku2Po3rObpd6n9-sLDA.jpg?r=b45",
                title: "마이네임",
                desc: "격투",
                wished: false,
            },
            {
                index: "7",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcAfVwM_UQ-8HLReFHoCTqhd97pa10An2t-LgSrfYXjvWuJHm86bj-hmBK5aXfs9pOdBInqGJtaJfNj8sOdy1gpi9q7DpflOYyRE9iU6ril3eRK_tF2RHGUMk2Dy0P9-1c5ROXU3oPxEtFWGm5qaCN7Axy3bKNbR6nVhvgPVD6wTBezyWFm6B_psbN9T0yxjxAcmBPCPtE-memGlOHUNLUam.jpg?r=15d",
                title: "에밀리 파리에 가다",
                desc: "뭘까이건",
                wished: false,
            },
            {
                index: "8",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdLz78qXJWNiie-2lf1foN5Z98ZQ-0hmUNj15KIMMckgxRQZQVjchx1FhhESueojKCjUhlAdJDGWK4SU2riZQ4a3E7sc1ol335Xlksk-X378lU9rHeUMKkuv_gWv.jpg?r=157",
                title: "종이의 집",
                desc: "인기짱",
                wished: false,
            },
            {
                index: "9",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT_bVcdgbT53vxz33vp5V1zSNvQ2n2BfjhUuAWHaOq3_i-EgjP_6_5rzxC_aRMGJ3V_3yNi1RdAd7CJMCUFvPVNUudCQ4n-VghpHuQLtVYRvMmocRhvZIcxQyWIg.jpg?r=62a",
                title: "마블 아이언피스트",
                desc: "마.블.",
                wished: false,
            },
            {
                index: "10",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcxDyYqsi0_vUDEb593aBMkY5l_wHGwQkCnuJqVOEoloeRLs8H5XI7IC57lC6Dj-pPOv-0x_dXVGOru8YVzVNmINAOs.webp?r=43c",
                title: "플래시",
                desc: "디.씨.",
                wished: false,
            },
        ]);

        setBlockbusterContents([
            {
                index: "1",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXrQ1BQrp6M3VY1jTFEMlNgCOX3pAYBA8ScFSvJQqJpTvviEZ574oScpRJBApsvzriao8rpAeisWVYsCdA-J9aCBSyTJN35LU7JafNaT746TTsitvLYJWYJ8pluDe5cdFhJ8uutyuQzychH6I-ejRmoXXLDnq2_qWoJQqlQq0Y15FYr1hqLRkMj8KUwu.webp?r=831",
                title: "그해 우리는",
                desc: "로맨스",
                wished: false,
            },
            {
                index: "2",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZjS94Q--6oi11hLJhJo2RhY8z-rJMTBfMlM6ScrtNnPc4zpiNWqdskdA5S0APnDMpOR6Xwvi735lZNHhCyqc8UZXojfs8eDyZBKqglzDmFetP0j6WPmK6obZihN.jpg?r=08a",
                title: "로스트 인 스페이스",
                desc: "SF",
                wished: false,
            },
            {
                index: "3",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRdVd6vHTHsyEQc59DfUhnFjpIHQ_2cLnwLcAsogjTNANsN_EH9ih-DeFgYlleyV4rcmKX1B9q9aUsasZ131rf0lqlQ2wWSkJ19luIRArkpWRarabNWD5Hd7rh4WOAbRQbn4gHjo-RTfpkdSScvObp9E--qtKWq-0x8vD_jGLff2qW9XRdku9LnhMRRr.webp?r=452",
                title: "불가살",
                desc: "괴이",
                wished: false,
            },
            {
                index: "4",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR0LdJzo0XvyB23PuEWfclx9FZVlLu-YtkX55SUJ9mIiEY2I7yIayN6tBT-RLYFKhh59eZb6SL-bE-QkklN-2-p3RJdnyOQmfKUbDEsik6afmKS9W3-IfN9z9kq3.jpg?r=369",
                title: "더블타겟",
                desc: "첩보",
                wished: false,
            },
            {
                index: "5",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcWFB8Qh3uQ4n_mhGVxMp0EyPbEfRhaZf1nypV7N33IwfK4I1eIJ4WgcPpeAuEynLBlSJPtL-4EFjI2PYxVTTUo037o_A0wU5WfBgE8xn2N585b5l2rLfy7ZKI_Hp-zqVPFCtgNkQ6A5e7VYcaEHjA7gDLlPhIvNVKMG4Dq9VMiDpOopm2NkeW03Xrkh1Qs3SGEIyGzAUSDsVHi1BNmf3htw.jpg?r=788",
                title: "솔로지옥",
                desc: "달달",
                wished: false,
            },
            {
                index: "6",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf_5K8OTBMrZQcpfCcYWXdxD3UE5XKOxcIq8mvX7eBIOCEAw2JD1U4dc54RS1HNQZN9VcB4PDv8R5z1p0Mxe9fdJR-sbjkf2ElV39wbWiku2Po3rObpd6n9-sLDA.jpg?r=b45",
                title: "마이네임",
                desc: "격투",
                wished: false,
            },
            {
                index: "7",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcAfVwM_UQ-8HLReFHoCTqhd97pa10An2t-LgSrfYXjvWuJHm86bj-hmBK5aXfs9pOdBInqGJtaJfNj8sOdy1gpi9q7DpflOYyRE9iU6ril3eRK_tF2RHGUMk2Dy0P9-1c5ROXU3oPxEtFWGm5qaCN7Axy3bKNbR6nVhvgPVD6wTBezyWFm6B_psbN9T0yxjxAcmBPCPtE-memGlOHUNLUam.jpg?r=15d",
                title: "에밀리 파리에 가다",
                desc: "뭘까이건",
                wished: false,
            },
            {
                index: "8",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdLz78qXJWNiie-2lf1foN5Z98ZQ-0hmUNj15KIMMckgxRQZQVjchx1FhhESueojKCjUhlAdJDGWK4SU2riZQ4a3E7sc1ol335Xlksk-X378lU9rHeUMKkuv_gWv.jpg?r=157",
                title: "종이의 집",
                desc: "인기짱",
                wished: false,
            },
            {
                index: "9",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT_bVcdgbT53vxz33vp5V1zSNvQ2n2BfjhUuAWHaOq3_i-EgjP_6_5rzxC_aRMGJ3V_3yNi1RdAd7CJMCUFvPVNUudCQ4n-VghpHuQLtVYRvMmocRhvZIcxQyWIg.jpg?r=62a",
                title: "마블 아이언피스트",
                desc: "마.블.",
                wished: false,
            },
            {
                index: "10",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcxDyYqsi0_vUDEb593aBMkY5l_wHGwQkCnuJqVOEoloeRLs8H5XI7IC57lC6Dj-pPOv-0x_dXVGOru8YVzVNmINAOs.webp?r=43c",
                title: "플래시",
                desc: "디.씨.",
                wished: false,
            },
        ]);

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
                            strokeLinejoin="square"
                            strokeWidth="4"
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
                            strokeLinejoin="square"
                            strokeWidth="4"
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
                            strokeLinejoin="square"
                            strokeWidth="4"
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
                            strokeLinejoin="square"
                            strokeWidth="4"
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
                            strokeLinejoin="square"
                            strokeWidth="4"
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
                            strokeLinejoin="square"
                            strokeWidth="4"
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
                            strokeWidth="4"
                            d="M113,2 L2,2 L2,33.4022989 L75.9665929,33.4022989 L21.22571,152 L60.28102,152 L113,32.7672283 L113,2 Z"
                            strokeLinejoin="square"
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
                desc: "흥미진진",
                wished: false,
            },
            {
                index: "2",
                src: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVP1nhY92OjXJ2236yl0-GUVJK_jUzSpcJUF7VIMTD6RhjFGAzavpHlbwcWVV1rCS5NEoDSDPXLQYcvAP3XbgBHEhMpoeAR1xA_zCNUktmFrfgO4SgP7kyXTl12u7fH4q_XzjejpFHrWlw7Eye_9dXOh7e3kaGmfWPEvTajHXwbUZD3WNPsUU5M.jpg?r=b45",
                title: "마이네임",
                desc: "재미남",
                wished: false,
            },
            {
                index: "3",
                src: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQw4x67ePluiVqxJDubRlwPiu-X8prhErG1xVicrPhlZbExfiw4U3QVS9rKHtuPOR3vAGUPbTFMQsSGC_52VsV1LJeaFVrHdbEdCWsSP-XZgkNpRuva8PNYVU9sde9fjRr4jYqQzYAZsJuZhitL2nMzfImE.webp?r=ebb",
                title: "싱크홀",
                desc: "공포",
                wished: false,
            },
            {
                index: "4",
                src: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbRimFoshBDFc5ebs3TXbgMP9qctTPHLzPQ7O2i2LLWdBz7zFhO9Ms5cPZPWmF133AYpF1aDId1zPUClOgQLqs7pMUA.webp?r=c75",
                title: "프리즌 브레이크",
                desc: "쫄깃쫄깃",
                wished: false,
            },
            {
                index: "5",
                src: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABROzB4UrA2hplCOUBtwplePj2-vinbbYmuRMYNrkil00kryIpTfoozQWOVzviATkJjK9bxg___XFZbPBWjL3uaZkV30HUtWCCltF9ujagxO2aPlZaHNG3a7pCDAZ.jpg?r=f37",
                title: "로스트 인 스페이스",
                desc: "뭘까",
                wished: false,
            },
            {
                index: "6",
                src: "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeidbTI7C_3mB-Fl3gIFnKAGd6awhF23c5e8KMWxY47irfDBZ4AGdwTvGpYs1ne0jiqIMxSSJRhDNQyXYNebutYaV5IrnWY0TtzRCpsnjg0-vG5BI6b7OjNP_EJK.jpg?r=229",
                title: "카우보이 비밥",
                desc: "이건 뭘까",
                wished: false,
            },
            {
                index: "7",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZjS94Q--6oi11hLJhJo2RhY8z-rJMTBfMlM6ScrtNnPc4zpiNWqdskdA5S0APnDMpOR6Xwvi735lZNHhCyqc8UZXojfs8eDyZBKqglzDmFetP0j6WPmK6obZihN.jpg?r=08a",
                title: "로스트 인 스페이스",
                desc: "SF",
                wished: false,
            },
            {
                index: "8",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRdVd6vHTHsyEQc59DfUhnFjpIHQ_2cLnwLcAsogjTNANsN_EH9ih-DeFgYlleyV4rcmKX1B9q9aUsasZ131rf0lqlQ2wWSkJ19luIRArkpWRarabNWD5Hd7rh4WOAbRQbn4gHjo-RTfpkdSScvObp9E--qtKWq-0x8vD_jGLff2qW9XRdku9LnhMRRr.webp?r=452",
                title: "불가살",
                desc: "괴이",
                wished: false,
            },
            {
                index: "8",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR0LdJzo0XvyB23PuEWfclx9FZVlLu-YtkX55SUJ9mIiEY2I7yIayN6tBT-RLYFKhh59eZb6SL-bE-QkklN-2-p3RJdnyOQmfKUbDEsik6afmKS9W3-IfN9z9kq3.jpg?r=369",
                title: "더블타겟",
                desc: "첩보",
                wished: false,
            },
            {
                index: "10",
                src: "https://occ-0-2219-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcWFB8Qh3uQ4n_mhGVxMp0EyPbEfRhaZf1nypV7N33IwfK4I1eIJ4WgcPpeAuEynLBlSJPtL-4EFjI2PYxVTTUo037o_A0wU5WfBgE8xn2N585b5l2rLfy7ZKI_Hp-zqVPFCtgNkQ6A5e7VYcaEHjA7gDLlPhIvNVKMG4Dq9VMiDpOopm2NkeW03Xrkh1Qs3SGEIyGzAUSDsVHi1BNmf3htw.jpg?r=788",
                title: "솔로지옥",
                desc: "달달",
                wished: false,
            },
        ]);
    }, 100);

    return (
        <div>
            {viewMoreCheckOn ? (
                <LargeViewContainer>
                    <div>
                        <div onClick={() => LargeViewOff()}>
                            <i class="fas fa-times"></i>
                        </div>
                        <img src={modalSrc} alt="" />
                        <p
                            style={{
                                fontSize: "3rem",
                                marginTop: "0",
                                marginLeft: "20px",
                            }}
                        >
                            {modalTitle}
                        </p>
                        <p
                            style={{
                                marginTop: "0",
                                marginLeft: "20px",
                            }}
                        >
                            장르: {modalDesc}
                        </p>
                    </div>
                    <label onClick={() => LargeViewOff()}></label>
                </LargeViewContainer>
            ) : null}
            {/* <LargeViewContainer /> */}

            <div className="top-10-div">
                <p className="content-title">오늘 한국의 TOP10 콘텐츠</p>
                <div className="Carousel_outbox" style={{ height: "230px" }}>
                    <i
                        className="left fas fa-chevron-left fa-3x"
                        onClick={() => {
                            nowX_top < 6
                                ? setNowX_top(setNowX_top + 20)
                                : setNowX_top(setNowX_top);
                        }}
                    ></i>
                    <i
                        className="right fas fa-chevron-right fa-3x"
                        onClick={() => {
                            setNowX_top(nowX_top - 20);
                        }}
                    ></i>
                    <div
                        className="Carousel_inbox"
                        style={{ height: "230px" }}
                        ref={container_Carousel_Top}
                    >
                        {top10Contents.map((content, index) => (
                            <Top10Layout
                                rank={content.rank}
                                index={content.index}
                                src={content.src}
                                title={content.title}
                                key={index}
                                desc={content.desc}
                                wished={content.wished}
                                setViewMoreCheckOn={setViewMoreCheckOn}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <br />

            <div
                className="hot-now-contents-div"
                // style={{ overflow: "visible" }}
            >
                {/* 맨 밖의 contents-div와 outbox, inbox 모두 overflow:visible이 되야함. */}
                <p className="content-title">지금 뜨는 컨텐츠</p>
                <div
                    className="Carousel_outbox"
                    // style={{ overflow: "visible" }}
                >
                    <i
                        className="left_hot fas fa-chevron-left fa-3x"
                        onClick={() => {
                            nowX_hot < 6
                                ? setNowX_hot(nowX_hot + 20)
                                : setNowX_hot(nowX_hot);
                        }}
                    ></i>
                    <i
                        className="right_hot fas fa-chevron-right fa-3x"
                        onClick={() => {
                            setNowX_hot(nowX_hot - 20);
                        }}
                    ></i>

                    <div
                        className="Carousel_inbox"
                        ref={container_Carousel_Hot}
                    >
                        {hotNowContents.map((HotNowContent, index) => (
                            <VidItemLayout
                                index={HotNowContent.index}
                                src={HotNowContent.src}
                                title={HotNowContent.title}
                                key={index}
                                desc={HotNowContent.desc}
                                wished={HotNowContent.wished}
                                setViewMoreCheckOn={setViewMoreCheckOn}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="blockbuster-contents-div">
                <p className="content-title">블록버스터 영화</p>
                <div className="Carousel_outbox">
                    <i
                        className="left_hot fas fa-chevron-left fa-3x"
                        onClick={() => {
                            nowX_blockbuster < 6
                                ? setNowX_blockbuster(nowX_blockbuster + 20)
                                : setNowX_blockbuster(nowX_blockbuster);
                        }}
                    ></i>
                    <i
                        className="right_hot fas fa-chevron-right fa-3x"
                        onClick={() => {
                            setNowX_blockbuster(nowX_blockbuster - 20);
                        }}
                    ></i>

                    <div
                        className="Carousel_inbox"
                        ref={container_Carousel_Blockbuster}
                    >
                        {blockbusterContents.map((blockContent, index) => (
                            <VidItemLayout
                                index={blockContent.index}
                                src={blockContent.src}
                                title={blockContent.title}
                                key={index}
                                desc={blockContent.desc}
                                wished={blockContent.wished}
                                setViewMoreCheckOn={setViewMoreCheckOn}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="tvHot-contents-div">
                <p className="content-title">넷플릭스 TV 인기 콘텐츠</p>
                <div className="Carousel_outbox">
                    <i
                        className="left_hot fas fa-chevron-left fa-3x"
                        onClick={() => {
                            nowX_tvHot < 6
                                ? setNowX_tvHot(nowX_tvHot + 20)
                                : setNowX_tvHot(nowX_tvHot);
                        }}
                    ></i>
                    <i
                        className="right_hot fas fa-chevron-right fa-3x"
                        onClick={() => {
                            setNowX_tvHot(nowX_tvHot - 20);
                        }}
                    ></i>

                    <div
                        className="Carousel_inbox"
                        ref={container_Carousel_TvHot}
                    >
                        {tvHotNowContents.map((content, index) => (
                            <VidItemLayout
                                index={content.index}
                                src={content.src}
                                title={content.title}
                                key={index}
                                desc={content.desc}
                                wished={content.wished}
                                setViewMoreCheckOn={setViewMoreCheckOn}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="tvRising-contents-div">
                <p className="content-title">지금 뜨는 콘텐츠</p>
                <div className="Carousel_outbox">
                    <i
                        className="left_hot fas fa-chevron-left fa-3x"
                        onClick={() => {
                            nowX_tvRising < 6
                                ? setNowX_tvRising(nowX_tvRising + 20)
                                : setNowX_tvRising(nowX_tvRising);
                        }}
                    ></i>
                    <i
                        className="right_hot fas fa-chevron-right fa-3x"
                        onClick={() => {
                            setNowX_tvRising(nowX_tvRising - 20);
                        }}
                    ></i>

                    <div
                        className="Carousel_inbox"
                        ref={container_Carousel_TvRising}
                    >
                        {tvRisingNowContents.map((content, index) => (
                            <VidItemLayout
                                index={content.index}
                                src={content.src}
                                title={content.title}
                                key={index}
                                desc={content.desc}
                                wished={content.wished}
                                setViewMoreCheckOn={setViewMoreCheckOn}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainHomeComp;
