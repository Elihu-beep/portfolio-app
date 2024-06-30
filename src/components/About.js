import React from 'react';
import '../styles/About.css';
import { faJava, faPython, faHtml5, faCss3, faReact, 
        faNodeJs, faJs, faAtlassian, faDocker, faGit, faAws, faAngular } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
    return (
        <div id="about" className="section aboutSection">
            <h1 className='aboutHead'>About Me</h1>
            <p className='aboutTextSection'>
            I am a fourth-year ICT engineering student from Finland.
            I work in mobile app and web development using the latest technologies.
            My interests are in anything related to software, although my passion and strengths lie in front-end development.
            I have also done extensive studies in data analytics and AI.
            My expertise includes working with large datasets and using machine learning to generate valuable insights.
            </p>
            <div className='skillContainer'>
                <h1 className='skillHeader'>Skills</h1>
                <ul className='skills'>
                    <li><FontAwesomeIcon icon={faPython} /> Python</li>
                    <li><FontAwesomeIcon icon={faJava} /> Java</li>
                    <li><FontAwesomeIcon icon={faJs} /> JavaScript</li>
                    <li><FontAwesomeIcon icon={faJs} /> TypeScript</li>
                    <li><FontAwesomeIcon icon={faReact} /> React</li>
                    <li><FontAwesomeIcon icon={faReact} /> React Native</li>
                    <li><FontAwesomeIcon icon={faNodeJs} />Node.js</li>
                    <li><FontAwesomeIcon icon={faCss3} /> CSS</li>
                    <li><FontAwesomeIcon icon={faHtml5} /> HTML</li>
                    <li><FontAwesomeIcon icon={faAtlassian} /> Atlassian</li>
                    <li><FontAwesomeIcon icon={faDocker} /> Docker</li>
                    <li><FontAwesomeIcon icon={faGit} /></li>
                    <li><FontAwesomeIcon icon={faAws} /> AWS</li>
                    <li>SQL</li>
                    <li>MariaDB</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
