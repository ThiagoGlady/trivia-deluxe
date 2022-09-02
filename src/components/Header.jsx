import React from 'react';
import { useSelector } from 'react-redux';
import getImageGravatarAPI from '../services/getImageGravatarAPI';

function Header() {
  const playerInfo = useSelector((store) => store.player);
  const playerImageSrc = getImageGravatarAPI(playerInfo.gravatarEmail);

  return (
    <header>
      <div className="row justify-content-center">
        <img
          src={ playerImageSrc }
          alt="Imagem de Perfil"
          data-testid="header-profile-picture"
          style={ { borderRadius: '50%', width: '10vw' } }
          className="img-fluid"
        />
      </div>
      <div className="row justify-content-center">
        <div className="col-auto">
          <p data-testid="header-player-name" className="fs-3 text-uppercase mt-1">
            {playerInfo.name}
          </p>
        </div>
      </div>
      <p
        data-testid="header-score"
        className="p-3 rounded"
        style={ { backgroundColor: '#8540f5' } }
      >
        Score:
        <span className="ms-2">{ playerInfo.score }</span>
      </p>
    </header>
  );
}

export default Header;
