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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet eget sit amet tellus cras. Nunc scelerisque viverra mauris in aliquam sem fringilla. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Amet massa vitae tortor condimentum lacinia quis vel. Sit amet luctus venenatis lectus magna fringilla urna. Sollicitudin ac orci phasellus egestas. Amet justo donec enim diam vulputate ut. Eget aliquet nibh praesent tristique. In ante metus dictum at tempor commodo ullamcorper a. Felis eget velit aliquet sagittis id consectetur purus ut. Et egestas quis ipsum suspendisse ultrices gravida dictum. Dignissim sodales ut eu sem integer. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Dui sapien eget mi proin sed libero enim sed faucibus. Eu feugiat pretium nibh ipsum consequat nisl vel. Netus et malesuada fames ac turpis.
            Enim eu turpis egestas pretium. Ultricies leo integer malesuada nunc. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Leo in vitae turpis massa. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Id interdum velit laoreet id donec. Lacus viverra vitae congue eu consequat ac felis donec et. Orci sagittis eu volutpat odio facilisis mauris sit. Aliquet porttitor lacus luctus accumsan tortor posuere. Elementum sagittis vitae et leo duis. Donec enim diam vulputate ut pharetra sit amet.
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
