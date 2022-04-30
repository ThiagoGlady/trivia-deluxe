import React from 'react';
import { useSelector } from 'react-redux';
import getImageGravatarAPI from '../services/getImageGravatarAPI';

function Header() {
  const playerInfo = useSelector((store) => store.player);
  const playerImageSrc = getImageGravatarAPI(playerInfo.gravatarEmail);

  return (
    <header>
      <img
        src={ playerImageSrc }
        alt="Imagem de Perfil"
        data-testid="header-profile-picture"
      />
      <p
        data-testid="header-player-name"
      >
        {playerInfo.name}
      </p>
      <p
        data-testid="header-score"
      >
        { playerInfo.score }
      </p>
    </header>
  );
}

export default Header;
