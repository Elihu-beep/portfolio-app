import React from 'react';
import { worksData } from '../data'; 
import '../styles/Works.css';

const Works = () => {
    const handleClick = (index) => {
        console.log('Click works', index);
    };

    return (
        <div id="works" className="section works-section">
            <h1>My Works</h1>
            <p>Here are some of my projects.</p>
            <div className="works-container">
                <div className="cards-wrapper">
                    {worksData.map((work, index) => (
                        <div key={index} className="work-item">
                            <h1 className='workTitleHead'>{work.title}</h1>
                            <p className="description">{work.description}</p>
                            <img
                                src={work.url}
                                alt={work.title}
                                onClick={() => handleClick(index)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Works;
