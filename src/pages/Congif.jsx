import React from 'react';
import { Link } from 'react-router-dom';

function Config() {
  return (
    <div>
      <Link to="/">Login</Link>
      <h3
        data-testid="settings-title"
      >
        Configuration
      </h3>
    </div>
  );
}

export default Config;
