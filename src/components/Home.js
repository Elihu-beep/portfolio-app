import React from 'react';
import profilePicture from '../assets/profilepic.png'
import LinkedInButton from './LinkedInButton';
import GitHubButton from './GithubButton';

const Home = () => {
    return (
        <div id="home" className="section home-section">
            <div className='content'>
                <div>
                    <h1 className='greetingText'>
                        Hi! 
                        <br />
                        <span>I'm <span className='nameColor'>Elias</span>,</span>
                        <br />
                        <span>an engineer!</span>
                    </h1>
                    <p className='aboutText'>
                    I'm a software developer working in mobile and web development. While my passion
                    is in front-end development, I'm a diverse engineer with expertise in various domains of the field such as
                    artifical intelligence, DevOps and back-end development.
                    
                    </p>
                    <div className='button-container'>
                    <LinkedInButton />
                    <GitHubButton profileUrl={'https://github.com/Elihu-beep'}/>
                    </div>
                </div>
                <img src={profilePicture} className='profilePicture' alt='profile' />
            </div>
        </div>
    );
};

export default Home;
