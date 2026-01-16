import React from 'react';

export default function Education() {
    return (
        <section className="education" id="education">
            <h2 className="education-title">Education</h2>
            <div className="education-container">
                <div className="education-card">
                    <h3 className="degree">Bachelor of Computer Applications (BCA)</h3>
                    <p className="institution">National College of Computer Studies </p>
                    <p className="duration">2022 – present</p>
                    <div className="education-logo">
                        <img src="/assets/logos/nccs-logo.png" alt="NCCS Logo" />
                    </div>
                </div>

                <div className="education-card">
                    <h3 className="degree">Higher Secondary Education (+2) - Management</h3>
                    <p className="institution">National College of Computer Studies </p>
                    <p className="duration">2020 – 2022</p>
                    <div className="education-logo">
                        <img src="/assets/logos/nccs-logo.png" alt="NCCS Logo" />
                    </div>
                </div>
            </div>
        </section>
    );
}
