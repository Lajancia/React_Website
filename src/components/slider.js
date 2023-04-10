import React from 'react';
import './index.css';
import Image from '../assets/edu.png'

function slider(props) {
    return (
        <div>
            <div class="container">
                <img src={Image} alt="Avatar" class="image"/>
                <div class="overlay">
                    <div class="text">Education</div>
                </div>
                </div>
        </div>
    );
}

export default slider;