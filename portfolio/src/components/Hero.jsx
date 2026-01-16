import React from 'react';

export default function Hero() {
    return (
        <section className="hero" id="about">
            <img src="/assets/profile.jpg" alt="Rohan Kasichhwa" loading="lazy" className="hero-img" />
            <div className="bio">
                <h2 className="bio-title">Introduction</h2>
                <p className="bio-text">
                    Hey, My name is Rohan Kasichhwa, I am a 6th semester student currently pursuing my Bachelor in Computer
                    Application from NCCS
                </p>
                <div className="view">
                    <a href="/assets/Rohan Kasichhwa - Resume.pdf" className="download-btn" target="_blank" rel="noopener noreferrer">View CV</a>
                </div>
            </div>
        </section>
    );
}
