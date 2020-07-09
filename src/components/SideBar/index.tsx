import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Quem seguir"
            elements={[
              <FollowSuggestion name="Rocketseat" nickname="@rocketseat" />,
              <FollowSuggestion name="Diego Fernandes" nickname="@dieegosf" />,
              <FollowSuggestion
                name="Guilherme Rodz"
                nickname="@guilherme_rodz"
              />,
              <FollowSuggestion name="Akitando.com" nickname="@AkitaOnRails" />,
              <FollowSuggestion
                name="Camila Magalhães"
                nickname="@camilaamgl"
              />,
            ]}
          />

          <List
            title="O que está acontecendo"
            elements={[
              <News
                title="Desenvolvedor Junior há 1 hora"
                description="No meu pc ta compilando ¯\_(ツ)_/¯"
              />,
              <News
                title="Analista de suporte há 2 horas"
                description="Você já tentou desligar e ligar de novo?"
              />,
              <News
                title="Desenvolvedor Junior há 3 horas"
                description="Estranho, ontem estava funcionando"
              />,
              <News
                title="Desenvolvedor Senior há 4 horas"
                description="Como parar de tomar café?"
              />,
              <News
                title="Ser Humano há 5 horas"
                description="Programadores são realmente pessoas?"
              />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
