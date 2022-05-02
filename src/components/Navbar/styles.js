import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Text = styled.label`
   font-size: 1.2rem;
   font-weight: bold;
   color: #261F5B;
`;

export const RightArea = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const Search = styled.div`
    height: 45px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    background-color: #FFF;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;
    overflow: hidden;
`;

export const Input = styled.input`
    height:100%;
    width: 100%;
    font-size: 1rem;
    border: 2px solid transparent;
    outline: 0;
`;

export const Icon = styled.i`
    font-size: 1.5rem;
    margin-right: 5px;
`;

export const ImageIcon = styled.img`
  width: 2.3rem;
  border-radius: 50%;
`;
