// src/components/LinkedInButton.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const LinkedInButton = ({ profileUrl }) => {
    return (
        <a href={profileUrl} className="linkedin-button" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
        </a>
    );
};

export default LinkedInButton;
