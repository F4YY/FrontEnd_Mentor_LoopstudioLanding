import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import bgheaderdesktop from '../images/desktop/image-hero.jpg';
import bgheadermobile from '../images/mobile/image-hero.jpg';
import desktopinteractive from '../images/desktop/image-interactive.jpg';
import mobileinteractive from '../images/mobile/image-interactive.jpg';

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Styledloopstudiolanding = styled.div`
    display: grid;
    min-height: 100vh;
    width: 100%;
    grid-template-columns: repeat(6,auto);
    grid-template-rows: 90vh 114vh 5% 70vh 70vh 15.5%;
    grid-template-areas:
        'headnav headnav headnav headnav headnav headnav headnav headnav'
        'heroimage heroimage heroimage heroimage heroimage heroimage heroimage heroimage'
        'ourcreation ourcreation ourcreation ourcreation seeall seeall seeall seeall'
        '. . imgA imgB imgC imgD . .'
        '. . imgE imgF imgG imgH . .'
        'footerA footerA footerA footerA footerB footerB footerB footerB'
        ;
    @media screen and (max-width:1025px) {
       width:auto;
       grid-template-columns: repeat(4,auto);
       grid-template-rows: auto auto auto 18% 18% auto;
       grid-template-areas:
        'headnav headnav headnav headnav'
        'heroimage heroimage heroimage heroimage'
        'ourcreation ourcreation seeall seeall'
        'imgA imgB imgC imgD'
        'imgE imgF imgG imgH'
        'footerA footerA footerB footerB'
        ;
    }
    @media screen and (max-width:600px) {
        min-height: 100vh;
        width:auto;
        grid-template-columns: 100%;
        grid-template-rows: repeat(15,auto);
        grid-template-areas:
            'headnav'
            'heroimage'
            'herodesc'
            'ourcreation'
            "imgA"
            "imgB"
            "imgC"
            "imgD"
            "imgE"
            "imgF"
            "imgG"
            "imgH"
            'seeall'
            'footerA'
            'footerB';
    }
`
export const Header = styled.div`
    grid-area: headnav;
    background-image:url(${bgheaderdesktop});
    background-repeat: no-repeat;
    h1{
        font-size: 4.8em;
        font-family: var(--Josefin-font);
        font-weight: var(--Josefin-light);
        color:var(--White);
        text-transform: uppercase;
        text-align: left;
        padding: 40px 40px 25px 40px;
        margin: 8% 44% 0 8%;
        border: 2px solid var(--White);
    }
    @media screen and (max-width:1025px) {
       width:100%;
       h1{
            font-size: 3em;
            padding: 3%;
            margin: 7% 45% 5% 6%;
        }
    }
    @media screen and (max-width:600px) {
        background-image:url(${bgheadermobile});
        background-position: center;
        background-size: cover;
        width:auto;
        height:90vh;
        margin:0;
        h1{
            font-size: 2.8em;
            align-items: center;
            padding: 6%;
            margin: 30% 6% 0;
        }
    }
`
export const Navspreader = styled(Hstack)`
    justify-content: space-between;
    margin:4% 8%;
    @media screen and (max-width:1025px) {
        margin:4% 6%;
    }
    @media screen and (max-width:600px) {
        padding:10% 6%;
        margin:0;
    }
`
export const Logo = styled.img`
    width:auto;
    height: auto;
`
export const Styledlist = styled.ul`
    display: flex;
    font-size: 1em;
    font-family: var(--Alata-font);
    font-weight: var(--Alata-regular);
    color:var(--White);
    margin:0 7% 0 0;
    li{
        display: inline-block;
        position:relative;
        margin-right: 6%;
        cursor: pointer;
        :hover{
            ::after{
                content:"";
                margin-top: 30px;
                height: 2px;
                width: 25px;
                background: var(--White);
                position: absolute;
                left: 25%;
                top: 0;
            }
        }
        :active{
            color:var(--Dark-Gray);
            ::after{
                content:"";
                margin-top: 30px;
                height: 2px;
                width: 25px;
                background: var(--Dark-Gray);
                position: absolute;
                left: 25%;
                top: 0;
            }
        }
    }
    @media screen and (max-width:1025px) {
       width:auto;
    }
    @media screen and (max-width:600px) {
        display: list-item;
        list-style:none;
        margin:0;
        li{
            display: list-item;
            margin:25% 0;
        }
    }
`
export const Heroimage = styled.div`
    grid-area: heroimage;
    background-image:url(${desktopinteractive});
    background-repeat: no-repeat;
    background-size: auto;
    margin:10% 0 10% 8%;
    @media screen and (max-width:1025px) {
       width:auto;
       background-position: -120px -30px;
       padding:25%;
       margin:5% 0 5% 6%;
    }
    @media screen and (max-width:600px) {
        width:auto;
        height:auto;
        background-image:url(${mobileinteractive});
        background-size: contain;
        background-position: center;
        padding:35%;
        margin:15% 4% 2%;
    }
`
export const Herodesc = styled(Vstack)`
    grid-area: heroimage;
    width:33%;
    height:auto;
    background-color: var(--White);
    padding:8% 0 0 8%;
    margin:23% 0 0 51%;
    h2{
        font-size: 3.15em;
        font-family: var(--Josefin-font);
        font-weight: var(--Josefin-light);
        color:var(--Black);
        text-transform: uppercase;
    }
    p{
        font-size: 1em;
        font-family: var(--Alata-font);
        font-weight: var(--Alata-regular);
        color:var(--Dark-Gray);
        line-height: 1.8em;
        padding: 4% 0;
    }
    @media screen and (max-width:1025px) {
        width:40%;
        padding:4% 0 0 4%;
        margin:20% 0 0 52%;
       h2{
            font-size: 2.2em;
        }
        p{
            font-size: .95em;
            padding: 4% 0;
        }
    }
    @media screen and (max-width:600px){
        grid-area: herodesc;
        width:auto;
        padding:0;
        margin:5%;
        text-align:center;
        h2{
            font-size: 2.4em;
        }
    }
`
export const Ourcreation = styled.div`
    grid-area: ourcreation;
    h3{
        font-size: 3.15em;
        font-family: var(--Josefin-font);
        font-weight: var(--Josefin-light);
        color:var(--Black);
        text-transform: uppercase;
        margin:0 0 0 16%;
    }
    @media screen and (max-width:1025px){
        h3{
            font-size: 2.3em;
            margin:2% 0 0 12%;
        }
    }
    @media screen and (max-width:600px){
        h3{
            font-size: 2.2em;
            text-align: center;
            margin:16% 0 10%;
        }
    }
`
export const Seeall = styled.div`
    grid-area: seeall;
    display:flex;
    justify-content: flex-end;
    @media screen and (max-width:1025px) {
        margin:3% 12% 6%;
    }
    @media screen and (max-width:600px) {
        justify-content: center;
        margin:5% 0 3%;
    }
`
export const Seeallbtn = styled.button.attrs({
    type: 'button'
})`
    font-size: 1em;
    font-family: var(--Alata-font);
    font-weight: var(--Alata-regular);
    width:23%;
    height:38%;
    color:var(--Black);
    letter-spacing: .3em;
    text-transform: uppercase;
    margin:0 14% 0 0;
    border: 2px solid var(--Very-Dark-Gray);
    cursor: pointer;
    :hover{
        color:var(--White);
        background-color: var(--Black);
    }
    :active{
        opacity:0.8;
    }
    @media screen and (max-width:1025px){
        width:auto;
        height:auto;
        padding: 1% 8%;
        margin: 0;
    }
    @media screen and (max-width:600px) {
        width:auto;
        height:auto;
        padding: 2% 8%;
        margin: 0;
    }
`
export const ImageTitle = styled.div`
    grid-area: ${(ga)=>ga.$gridarea};
    margin:0 0 0 10%;
    cursor:pointer;
    p{
        position:relative;
        font-size: 2.1em;
        font-family: var(--Josefin-font);
        font-weight: var(--Josefin-light);
        color:var(--White);
        text-transform: uppercase;
        margin:-37% 20% 0 13%;
    }
    :hover{
        p{
            color:var(--Black);
        }
    }
    @media screen and (max-width:1025px){
        p{
            font-size: 1.2em;
        }
    }
    @media screen and (max-width:600px){
        height:20vh;
        margin:2% 5%;
        p{
            font-size: 1.8em;
            margin:-20% 49% 0 5%;
        }
    }
`
export const Imagesdesktop = styled.img`
    position:relative;
    object-fit: contain;
    object-position: center;
    filter: brightness(65%) saturate(140%);
    :hover{
        opacity:.3;
        z-index:2;
    }
    :active{
        transform: scale(.98);
        transition: all .1s ease-in-out;
    }
    @media screen and (max-width:1025px){
        width:90%;
        height:100%;
        object-fit: cover;
    }
    @media screen and (max-width:600px) {
        display:none;
    }
`
export const Imagesmobile = styled(Imagesdesktop)`
    display:none;
    @media screen and (max-width:600px) {
        display:flex;
        width:100%;
        place-items: center;
    }
`
export const FooterA = styled.footer`
    grid-area: footerA;
    display:flex;
    place-items: center;
    background-color: var(--Black);
    margin:20% 0;
    @media screen and (max-width:1025px) {
        flex-direction: column;
        padding:0 0 8% 0;
        margin:10% 0;
    }
    @media screen and (max-width:600px) {
        flex-direction: column;
        text-align:center;
        margin:20% 0 -1%;
    }
`
export const Logofooter = styled(Logo)`
    width:22%;
    height:auto;
    padding: 7% 16% 4%;
    @media screen and (max-width:1025px) {
        width:45%;
        padding: 7% 30% 4% 4%;
    }
    @media screen and (max-width:600px) {
        width:45%;
        padding:0;
        margin:15% auto 5%;
    }
`
export const Styledlistfooter = styled(Styledlist)`
    padding:0 0 0 16%;
    @media screen and (max-width:1025px) {
        padding:0 0 5% 0;
    }
    @media screen and (max-width:600px) {
        padding:0 0 3% 0;
    }
`
export const FooterB = styled.footer`
    grid-area: footerB;
    background-color: var(--Black);
    margin:20% 0;
    p{
        color:var(--Dark-Gray);
        text-align: right;
        padding: 0 15%;
    }
    @media screen and (max-width:1025px) {
        padding:0 0 8% 0;
        margin:12.3% 0;
        p{
            font-size:.8em;
        }
    }
    @media screen and (max-width:600px) {
        margin:0;
        p{
            text-align: center;
            padding: 0 0 10% 0;
        }
    }
`
export const Socialiconsection = styled(Hstack)`
   padding: 5% 13% 3%;
   justify-content: flex-end;
   @media screen and (max-width:1025px) {
        padding: 8% 13% 3%;
   }
   @media screen and (max-width:600px) {
        justify-content: center;
    }
`
export const Socialicon = styled(FontAwesomeIcon)`
    color:var(--White);
    margin:8px;
    font-size: 1.9em;
    :hover{
        cursor: pointer;
        border-bottom: 2px solid var(--White);
    }
`
export const Menuicon = styled.img`
    width: 10%;
    height: auto;
    display: none;
    cursor: pointer;
    @media screen and (max-width:600px){
        display:flex;
    }
`
export const Menulist = styled(Vstack)`
    position: fixed;
    flex-direction: column;
    top:0;
    right:0;
    width: 100%;
    animation: opensidenav .4s ease-in-out;
    animation-direction: alternate;
    animation-iteration-count: 1;
    min-height: 100vh;
    background:var(--Black);
    z-index:1;
    @media screen and (max-width:600px) {
        ul{
            display: block;
            font-size: 1.7em;
            font-family: var(--Josefin-font);
            font-weight: var(--Josefin-light);
            color:var(--White);
            padding: 0;
            margin: 30% 0 0 8%;
            text-transform: uppercase;
        }
        li{
            display: list-item;
            margin: 0 0 10% 0;
            :hover,:active{
                color:var(--Dark-Gray);
                ::after{
                    content:"";
                    margin-top: 30px;
                    height: 2px;
                    width: 20%;
                    background: var(--Dark-Gray);
                    position: absolute;
                    left: 2%;
                    top: 0;
                }
            }
        }
    }
`
export const Closeicon = styled.img`
    width: 8%;
    height: auto;
    cursor: pointer;
    position: absolute;
    top:35%;
    right:6.4%;
`
//Styled for attribution:
export const Attribution = styled.div`
    display: flex;
    margin: 20px auto 10px;
    text-align: center;
    justify-content: center;
    align-items: flex-end;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px auto 10px;
    }
`
export const AttributionA = styled(Attribution)`
    p{
        font-size: .7rem;
        color: var(--Dark-Gray);
    }
    a {
        color: var(--Very-Dark-Gray);
    }
`