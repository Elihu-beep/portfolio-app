// src/components/LinkedInButton.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const GithubButton = ({ profileUrl }) => {
    return (
        <a href={profileUrl} className="github-button" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
            Github
        </a>
    );
};

export default GithubButton;
