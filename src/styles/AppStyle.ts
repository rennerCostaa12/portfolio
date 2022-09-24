import styled from "styled-components";

export const ContainerApp = styled.main`
    display: flex;
    gap: 20px;
    
    @media(max-width: 870px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const CardProfileStyle = styled.div`
    width: 348px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--bg-cards);
    border-radius: 20px;
    padding: 1.5rem 3.5rem;
    margin-bottom: 1.5rem;

    img{
        width: 128px;
        border: 2px solid #7ed957;
        border-radius: 360px;
        margin-bottom: 20px;
    }

    @media(max-width: 870px){
        width: 100%;
        min-width: 270px;
    }
`

export const CardMidiasSocialStyle = styled.div`
    width: 348px;
    display: flex;
    flex-wrap: wrap;
    background-color: var(--bg-cards);
    border-radius: 20px;
    padding: 1.5rem 2.5rem;
    margin-bottom: 1.5rem;

    ul{
        list-style: none;
    }

    ul li {
        display: flex;
        align-items: center;
        font-size: 13px;
        gap: 10px;
        margin-bottom: 0.5rem;
    }

    a{
        text-decoration: none;
        color: var(--text-color);
    }

    @media(max-width: 870px){
        width: 100%;
        min-width: 270px;
    }
`

export const CardTechStyle = styled.div`
    width: 348px;
    background-color: var(--bg-cards);
    border-radius: 20px;
    padding: 1.5rem 2.3rem;
    margin-bottom: 1.5rem;

    > div{
        margin-top: 1rem;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    @media(max-width: 870px){
        width: 100%;
        min-width: 270px;
        
    }

    @media(max-width: 400px){
        text-align: center;

        > div {
            justify-content: center;
            gap: 20px;
        }
    }
`

export const CardProjectStyle = styled.div`
    width: 100%;
    background-color: var(--bg-cards);
    border-radius: 20px;
    padding: 1.5rem 2.3rem;
    margin-bottom: 1.5rem;

    > div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        a{
            color: var(--text-color);
            cursor: pointer;
            text-decoration: none;
            transform: scale(1);
            transition: all ease 0.3s;

            :hover{
                transform: scale(1.1);
            }
        }
    }

    @media(max-width: 425px){
        > div{
            flex-direction: column;
            gap: 20px;
        }
    }
`

export const CardStyle = styled.div`
    width: 348px;
    background-color: var(--bg-cards);
    border-radius: 20px;
    padding: 1.5rem 2.3rem;
    margin-bottom: 1.5rem;

    ul{
        margin: 1rem;
    }

    li{
        margin-bottom: 1rem;
    }

    span{
        display: block;
        margin: 0.5rem;
    }

    @media(max-width: 870px){
        width: 100%;
        min-width: 270px;
    }

`

export const ContentProjectCardStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
`

export const TitleRegular = styled.span`
    font-weight: lighter;
    font-size: 13px;
`

export const TitleCard = styled.span`
    font-size: 23px;
    font-weight: bold;
`