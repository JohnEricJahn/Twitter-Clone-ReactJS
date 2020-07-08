import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar perfil</EditButton> */}

        <h1>John Eric Jahn</h1>
        <h2>@john.jahn</h2>

        <p>
          Web Full Stack Developer
          <a href="https://www.linkedin.com/in/john-eric-jahn-36474b1a4/">
            &nbsp;@Linkedin
          </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Joinville, SC
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 13 de agosto de 2000
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>25 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
