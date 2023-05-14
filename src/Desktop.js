import React from 'react';
import './Desktop.css';
import Taskbar from './Taskbar';
import Icon from './Icon.js';
import IconWrapper from './IconWrapper.js';

function Desktop() {
  return (
    <div className="Desktop">
        <IconWrapper>
            <Icon name="Project 1" file="ICON/22.ico" URL="https://google.com"/>
            <Icon name="Project 2" file="ICON/22.ico" URL="https://bing.com"/>
        </IconWrapper>

      <Taskbar />
    </div>
  );
}

export default Desktop;
