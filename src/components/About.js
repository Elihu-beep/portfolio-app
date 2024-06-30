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
                I'm a fourth year ICT-engineering student from Finland. I work in mobile app development using the latest technologies.
                My interest are in anything related to software, although my passion and strenghts are in front-end development.
                I have also done extensive studies in the field of data-analytics and ai. My expertise include Working with large datasets and using machine learning to generate valuable insight.
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
                    <li><FontAwesomeIcon icon={faAngular} /> Angular</li>
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
