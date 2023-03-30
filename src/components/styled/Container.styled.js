import styled from "styled-components";

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');
    //Primary:
    --White: hsl(0, 0%, 100%);
    --Black: hsl(0, 0%, 0%);
    --Dark-Gray: hsl(0, 0%, 55%);
    --Very-Dark-Gray: hsl(0, 0%, 41%);
    font-size: 15px;
    --Josefin-font: 'Josefin Sans', sans-serif;
    --Josefin-light:300;
    --Alata-font:'Alata', sans-serif;
    --Alata-regular:400;
    *{
        margin:0;
    }
    display:flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: var(--White);
    .nav_header{
        @media screen and (max-width:600px) {
            display: none;
        }
    }
    .navbarmobile_spreader{
        position:relative;
    }
    .logomobile{
        width: 50%;
        padding: 10% 7%;
    }
    footer{
        width:100%;
        background-color: var(--Black);
    }
`