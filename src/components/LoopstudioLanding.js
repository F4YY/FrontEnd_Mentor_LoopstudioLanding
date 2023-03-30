import React from 'react';
import { Container } from './styled/Container.styled';
import {
    Attribution,
    AttributionA,
    FooterA,
    FooterB,
    Herodesc,
    Heroimage,
    Imagesdesktop,
    Imagesmobile,
    ImageTitle,
    Logofooter,
    Ourcreation,
    Seeall,
    Seeallbtn,
    Socialicon,
    Socialiconsection,
    Styledlistfooter,
    Styledloopstudiolanding
} from './styled/Loopstudio.styled';
import {
    faFacebook,
    faTwitter,
    faPinterest,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import Datas from '../data.json';
import logo from './images/logo.svg';
import { Navbar } from './Navbar';

const socials = [
    {
      icon: faFacebook,
      url: "https://www.facebook.com",
    },
    {
      icon: faTwitter,
      url: "https://www.twitter.com",
    },
    {
      icon: faPinterest,
      url: "https://www.pinterest.com/",
    },
    {
      icon: faInstagram,
      url: "https://www.instagram.com/fays.dalgona",
    }
  ];

export const LoopstudioLanding = () => {
  return (
    <Container>
        <Styledloopstudiolanding>
            <Navbar/>
            <Heroimage/>
            <Herodesc>
                <h2>
                    The leader in interactive VR
                </h2>
                <p>
                    Founded in 2011, Loopstudios has been producing world-class virtual reality
                    projects for some of the best companies around the globe. Our award-winning
                    creations have transformed businesses through digital experiences that bind
                    to their brand.
                </p>
            </Herodesc>
            <Ourcreation>
                <h3>
                    Our creations
                </h3>
            </Ourcreation>
            <Seeall>
                <Seeallbtn>
                    See all
                </Seeallbtn>
            </Seeall>
            {Datas.map((data)=>{
                return(
                    <ImageTitle
                        $gridarea={data.gridarea}
                    >
                        <Imagesdesktop
                            key={data.title}
                            $bgpicdesktop={data.bgpicdesktop}
                            src={require(`${data.bgpicdesktop}`)} alt={data.bgpicdesktop}
                        />
                        <Imagesmobile
                            key={data.title}
                            src={require(`${data.bgpicmobile}`)} alt={data.bgpicmobile}
                        />
                        <p $marjan={data.margintop}>
                            {data.title}
                        </p>
                    </ImageTitle>
                )}
            )}
            <FooterA>
                <Logofooter src={logo} alt='logo' />
                <Styledlistfooter>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Events</li>
                    <li>Products</li>
                    <li>Support</li>
                </Styledlistfooter>
            </FooterA>
            <FooterB>
                <Socialiconsection>
                    {socials.map(({icon,url})=>
                        <a
                            key={url}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Socialicon icon={icon} key={url}/>
                        </a>
                    )}
                </Socialiconsection>
                <p>
                    © 2021 Loopstudios. All rights reserved.
                </p>
            </FooterB>
        </Styledloopstudiolanding>
        <footer>
            <Attribution>
                <AttributionA>
                    <p>Challenge by<a href="https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw/hub" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Loopstudios Landing Page.</a></p>
                </AttributionA>
                <AttributionA>
                    <p>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></p>
                </AttributionA>
            </Attribution>
        </footer>
    </Container>
  )
}
