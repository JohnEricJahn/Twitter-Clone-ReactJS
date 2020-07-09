import React from 'react';

import Tweet from '../Tweet';

import { Container, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        <Tweet
          name="Akitando.com"
          user="@AkitaOnRails"
          description="Falta de esforço, nenhum curso concerta."
        />
        <Tweet
          name="Diego Fernandes"
          user="@dieegosf"
          description="Galerinha nós não somos robos, aprendam a pesquisar as coisas."
        />
        <Tweet
          name="Guilherme Rodz"
          user="@guilherme_rodz"
          description="Se eu explicar mais devagar que isso o próximo video vai virar um curso"
        />
      </Tweets>
    </Container>
  );
};

export default Feed;
