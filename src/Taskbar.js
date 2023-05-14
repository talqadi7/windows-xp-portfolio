import React, { useState, useEffect, useRef} from 'react';
import './Taskbar.css';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

function Taskbar() {
    const [isFolderOpen, setIsFolderOpen] = useState(false);
    const [isLocalTime, setIsLocalTime] = useState(false);
    const [time, setTime] = useState('');
    const [notification, setNotification] = useState('');
    const [key, setKey] = useState(0);
    const timeoutId = useRef(null);


    const updateTime = () => {
        const date = new Date();
        const timeZone = isLocalTime ? Intl.DateTimeFormat().resolvedOptions().timeZone : 'America/Los_Angeles';
        const zonedDate = utcToZonedTime(date, timeZone);
        const formattedTime = format(zonedDate, 'h:mm aaaa');
        setTime(formattedTime);
    };
    const showNotification = (message) => {
        setNotification(message);
        setKey(prevKey => prevKey + 1);
        if (timeoutId.current) {
          clearTimeout(timeoutId.current);
        }
        timeoutId.current = setTimeout(() => {
          setNotification('');
        }, 3000); // adjust as needed
      };

      const toggleTime = () => {
        setIsLocalTime(!isLocalTime);
        updateTime();
        showNotification(isLocalTime ? 'Switched to local time' : 'Switched to Pacific Time');
      };

      useEffect(() => {
        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => {
          clearInterval(timer);
        };
      }, [isLocalTime]);

    return (
        <div className="Taskbar">
            <div className="start-button">
                <img src="start-button.png" alt="Start" />
            </div>
            <div className="bottomright">
                {/* add content here */}
                <div className="info-button" onClick={() => setIsFolderOpen(true)}>
                    <img src="ICON/198.ico" alt="Info" />
                </div>
            </div>
            {isFolderOpen && (
                <div className="folder">
                    <button className="close-button" onClick={() => setIsFolderOpen(false)}></button>
                    <button className="link-button-personal" onClick={() => window.open('https://talqadi.com', '_blank')}></button>
                    <button className="link-button-github" onClick={() => window.open('https://github.com/talqadi7', '_blank')}></button>
                    <button className="link-button-linkedin" onClick={() => window.open('https://linkedin.com/in/talqadi7', '_blank')}></button>
                    <img src="open_file.png" alt="Folder" />
                </div>
            )}
            <div className="time" onClick={toggleTime}>
                {time}
            </div>
            {notification && (
                <div key={key} className="notification">
                    {notification}
                </div>
            )}
        </div>
    );
}

export default Taskbar;
