import ProfileImage from './assets/profile.jpeg';
import GlobalStyle from "./styles/GlobalStyles"

import TagsTech from './components/TagsTech';
import Services from './components/Services';
import InformationsProfile from './components/InformationsProfile';
import CardProject from './components/CardProject';
import BackgroundParticles from './components/BackgroundParticles';

import {
  ContainerApp,
  CardProfileStyle,
  CardMidiasSocialStyle,
  CardTechStyle,
  CardStyle,
  TitleCard,
  TitleRegular,
  CardProjectStyle,
  ContentProjectCardStyle
} from "./styles/AppStyle"

import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  MapPin,
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple
} from 'phosphor-react'

import { useEffect, useState } from 'react';

export default function App() {

  const [respoUser, setRepoUser] = useState<any[]>([]);
  const RepoPinned = ['app-ReFinance', 'authentication-firebase', 'landing-page-bank-', 'pokedex', 'movie-app', 'mini-ecommerce-redux'];
  const UserGithub = 'rennerCostaa12';

  useEffect(() => {
    fetch(`https://api.github.com/users/${UserGithub}/repos`)
      .then(response => response.json())
      .then(data => {
        setRepoUser(data);
      });

    AOS.init({duration: 1000});
  }, []);

  return (
    <ContainerApp>
      <BackgroundParticles />
      <GlobalStyle />

      {/* COLUMN 1 */}
      <div>
        <CardProfileStyle data-aos="flip-right">
          <img src={ProfileImage} alt="profile-image" />
          <TitleCard>Renner Costa</TitleCard>
          <TitleRegular>Desenvolvedor Full Stack</TitleRegular>
        </CardProfileStyle>

        <CardMidiasSocialStyle data-aos="flip-right">
          <ul>
            <InformationsProfile
              nameInformation='Brasil - Fortaleza/CE'
              logo={<MapPin size={24} color="#837E9F" />}
            />

            <InformationsProfile
              nameInformation='rennerCostaa12'
              linkInformation="https://github.com/rennerCostaa12"
              logo={<GithubLogo size={24} color="#837E9F" />}
            />

            <InformationsProfile
              nameInformation='Renner Costa'
              linkInformation="https://www.linkedin.com/in/renner-costa-098a101a0/"
              logo={<LinkedinLogo size={24} color="#837E9F" />}
            />

            <InformationsProfile
              nameInformation='ozielrennerc.rodrigues@gmail.com'
              logo={<EnvelopeSimple size={24} color="#837E9F" />}
            />
          </ul>
        </CardMidiasSocialStyle>

        <CardTechStyle data-aos="flip-right">
          <TitleCard>Tecnologias</TitleCard>

          <div>
            <TagsTech titleTag='Javascript' />
            <TagsTech titleTag='Typescript' />
            <TagsTech titleTag='ReactJS' />
            <TagsTech titleTag='NodeJS' />
            <TagsTech titleTag='Git' />
            <TagsTech titleTag='Github' />
            <TagsTech titleTag='HTML' />
            <TagsTech titleTag='CSS' />
            <TagsTech titleTag='Bootstrap' />
            <TagsTech titleTag='MaterialUI' />
            <TagsTech titleTag='Styled-Components' />
          </div>

        </CardTechStyle>

        <CardStyle data-aos="flip-right">
          <TitleCard>Experiências</TitleCard>
          <ul>
            <Services
              titleService='Grupo UTEI'
              yearServiceInit={2022}
              yearServiceFinal="Até o momento"
              serviceFunction='Desenvolvedor Full Stack'
            />
          </ul>
        </CardStyle>

        <CardStyle data-aos="flip-right">
          <TitleCard>Educação</TitleCard>
          <ul>
            <Services
              titleService='EEEP Marwin'
              yearServiceInit={2019}
              yearServiceFinal={2021}
              serviceFunction='Ensino médio - Integrado ao técnico de informática'
            />

            <Services
              titleService='Estácio'
              yearServiceInit={2022}
              yearServiceFinal={2024}
              serviceFunction='Análise e Desenvolvimento de Sistemas'
            />

          </ul>
        </CardStyle>
      </div>

      {/* COLUMN 2 */}
      <div>
        <CardProjectStyle data-aos="flip-right">
          <div>
            <TitleCard>Meus Projetos</TitleCard>
            <a href='https://github.com/rennerCostaa12?tab=repositories'>Veja Todos</a>
          </div>
        </CardProjectStyle>

        <ContentProjectCardStyle data-aos="flip-right">
          {respoUser && respoUser.map((value: any) => {
            if (RepoPinned.some(repos => Object.values(value).includes(repos))) {
              return (
                <CardProject
                  key={value.id}
                  name={value.name}
                  description={value.description}
                  primaryLanguage={value.language}
                  linkRepo={value.html_url}
                />
              )
            }
          })}
        </ContentProjectCardStyle>
      </div>
    </ContainerApp>
  )
}