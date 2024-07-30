import React from 'react';
import profilePicture from '../assets/profilepic.png'
import LinkedInButton from './LinkedInButton';
import GitHubButton from './GithubButton';
import '../styles/Home.css'

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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper lacinia nibh nec vestibulum. Etiam eu sapien tempor, gravida erat nec, facilisis risus. 
                    
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
