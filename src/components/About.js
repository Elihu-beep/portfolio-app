import React from 'react';
import '../styles/About.css';
import { faPython, faHtml5, faCss3, faReact, 
        faNodeJs, faJs, faAtlassian, faDocker, faGit, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
    return (
        <div id="about" className="section aboutSection">
            <h1 className='aboutHead'>About Me</h1>
            <p className='aboutTextSection'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper lacinia nibh nec vestibulum. Etiam eu sapien tempor, gravida erat nec, facilisis risus. 
            </p>
            <div className='skillContainer'>
                <h1 className='skillHeader'>Skills</h1>
                <ul className='skills'>
                    <li><FontAwesomeIcon icon={faPython} /> Python</li>
                    <li><FontAwesomeIcon icon={faJs} /> JavaScript</li>
                    <li><FontAwesomeIcon icon={faJs} /> TypeScript</li>
                    <li><FontAwesomeIcon icon={faReact} /> React</li>
                    <li><FontAwesomeIcon icon={faReact} /> React Native</li>
                    <li><FontAwesomeIcon icon={faCss3} /> CSS</li>
                    <li><FontAwesomeIcon icon={faHtml5} /> HTML</li>
                    <li><FontAwesomeIcon icon={faNodeJs} />Node.js</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
