import React from 'react';
import { worksData } from '../data/data'; 
import '../styles/Works.css';

const Works = () => {
    const handleClick = (link) => {
        window.open(link, '_blank');
    };

    return (
        <div id="works" className="section works-section">
            <h1 className='myWorksTitle'>My Works</h1>
            <p className='worksText'>Here are some of my projects. You can open a project by clicking on its image.</p>
            <div className="works-container">
                <div className="cards-wrapper">
                    {worksData.map((work, index) => (
                        <div key={index} className="work-item">
                            <h1 className='workTitleHead'>{work.title}</h1>
                            <p className="description">{work.description}</p>
                            <img
                                src={work.path}
                                alt={work.title}
                                onClick={() => handleClick(work.link)}
                                style={{ cursor: 'pointer' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Works;
