import React from 'react';
import './Icon.css';

function Icon({ name, file, URL }) {
  return (
    <div className="Icon">
      <a href={URL} target="_blank" rel="noopener noreferrer">
        <img src={file} alt={name} />
      </a>
      <p>{name}</p>
    </div>
  );
}

export default Icon;
