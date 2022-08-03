import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    h1{
        font-size: 45px;
        color:#00BFFF;
        font-family: Arial;
    }
`

export const Area = styled.div`
    display: grid;
    grid-template-columns: repeat( 7, 1fr);
    gap: 10px;
    flex-direction: column;

`

export const Title = styled.div`
    width: 100%
    display: flex;
    height: auto;
    font-size: 45px;
    margin: 20px 0;
    font-weight: bold;
    color: #00BFFF;
`




