import React from 'react';
import './Desktop.css';
import Taskbar from './Taskbar';
import Icon from './Icon.js';
import IconWrapper from './IconWrapper.js';

function Desktop() {
  return (
    <div className="Desktop">
      <IconWrapper>
      <Icon name="Resume" file="ICON/47.ico" URL="https://docs.google.com/document/d/1lsJXdYxkDOKdSqkepZe19U4hSm71jNho/edit?usp=sharing&ouid=103724823257916244423&rtpof=true&sd=true" />
        <Icon name="Project 1" file="ICON/22.ico" URL="https://google.com" />
        <Icon name="Project 2" file="ICON/22.ico" URL="https://bing.com" />
      </IconWrapper>

      <Taskbar />
    </div>
  );
}

export default Desktop;
