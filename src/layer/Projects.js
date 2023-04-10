import React from 'react';
import Image from '../assets/react.png'

const styles = {
    home: {
        backgroundImage: `url(${Image})`,
        height: '100vh',
        // width: '100vw',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        verticalAlign:'baseline'

    }
}

const Projects = () => {
    return (
        <div style={styles.home}>
            
        </div>
    );
};

export default Projects;