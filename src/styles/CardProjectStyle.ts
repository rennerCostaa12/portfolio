import styled from "styled-components";

export const CardContent = styled.div`
    width: 450px;
    background-color: var(--bg-cards);
    padding: 1.5rem 2.3rem;
    border-radius: 20px;

    a {
        text-decoration: none;
        color: var(--text-color);
        transform: scale(1);
        transition: all ease 0.3s;

        :hover {
            transform: scale(1.1);
        }
    }

    > div {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 10px;
    }

    @media(max-width: 820px){
        width: 100%;
        min-width: 300px;
    }

    @media(max-width: 425px){
        text-align: center;
        padding: 1rem 2rem;

        > div{
            justify-content: center;
        }
    }
`

export const ContentPrimaryLanguage = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 1rem 0;

`

export const TitleCard = styled.span`
    font-weight: bold;
    font-size: 16px;
`

export const DescriptionCard = styled.span`
    font-weight: normal;
    font-size: 14px;
`