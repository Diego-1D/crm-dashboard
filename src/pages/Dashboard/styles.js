import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 40px 20px;
`;

export const Title = styled.h2`
    margin-bottom: 20px;
    color: #261F5B;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 900px){
        flex-direction: column;
    }
`;
export const Wrapper = styled.div`
`;

