import React,{useState, useEffect} from "react";
import styled,{keyframes} from "styled-components";

const slideDown = keyframes`
    0% {
        transform: translateY(-50%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

const slideUp = keyframes`
    0% {
        transform: translateY(0);
        opacity: 0;
    }
    100% {
        transform: translateX(-100%);
        opacity: 1;
    }
`;


const ContentWrapper = styled.div`
    margin: 0 25px;
    padding: 0;
    @media screen and (min-width : 768px) {
        margin: 0 170px;
    }
`

const MainAnimdation = styled.div`
    animation: ${slideDown} 1s ease-out ${({ delay }) => delay}s;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width : 768px) {
        flex-direction: row;
    }
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid black;
    @media screen and (min-width : 768px) {
        flex-direction: row;
        align-items: center;
        border: none;
    }
`

const MainTitle = styled.p`
    font: 400 35px 'arial';
    color: #2b2b2b;
    margin: 0;
    padding: 0;
    margin: 60px 0 30px 0;
    @media screen and (min-width : 768px) {
        margin: 150px 100px;
    }
`

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width : 768px) {
        flex-direction: row;
        border-top: 0.5px solid #8e8d8d;
        & > div:nth-child(2){
            border-left: 0.5px solid #8e8d8d;
            border-right: 0.5px solid #8e8d8d;
        }
    }
`

const SubWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    border-bottom: 1px solid black;
    @media screen and (min-width : 768px) {
        border: none;
    }
`

const SubAnimation = styled.div`
    animation: ${slideUp} 1s ease-out ${({ delay }) => delay}s;
`

const SubTitle = styled.p`
    font: bold 23px 'arial';
    color: #2b2b2b;
    margin: 40px 0 60px 0;
    padding: 0;
    @media screen and (min-width : 768px) {
        margin: 40px;
        padding: 0;
    }
`

const Content = styled.p`
    font: 500 13px 'arial';
    margin-bottom: 40px;
    @media screen and (min-width : 768px) {
        margin: 0;
        padding: 0;
        margin: 40px;
    }
`


const Design = () => {
    const [resizeKey, setResizeKey] = useState(0);

        useEffect(() => {
            const handleResize = () => {
                setResizeKey((prevKey) => prevKey + 1);
            };

            window.addEventListener("resize", handleResize);
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }, []);
    return(
        <ContentWrapper>
            <MainContainer>
                <MainAnimdation delay={0.1} key={resizeKey + 1}>
                    <MainTitle>문자 그대로 고정관념에서 벗어나세요.</MainTitle>
                    <Content>뛰어난 창의력과 혁신적 상상력의 산물인 ebii는 가능성이 무한한, 세계 최고의 모듈식 전기 자전거 아키텍처를 기반으로 제작되었습니다.</Content>
                </MainAnimdation>
            </MainContainer>
        </ContentWrapper>
    );
};

export default Design;