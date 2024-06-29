import React, { useEffect, useState } from 'react';
import '../App.css';

const Figure = () => {
    const [position, setPosition] = useState(-100);

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition(prev => (prev < window.innerWidth + 100 ? prev + 5 : -100));
        }, 50);

        return () => clearInterval(interval); 
    }, []);

    return <div className="figure" style={{ left: `${position}px` }} />;
};

export default Figure;
