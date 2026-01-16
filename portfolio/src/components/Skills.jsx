import React from 'react';

export default function Skills() {
    return (
        <section className="skills" id="skills">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-wrapper">

                <div className="skill-card">
                    <div className="skill-left">
                        <img src="/assets/icons/django.png" alt="Django" className="skill-icon" />
                        <h3 className="skill-name">Django</h3>
                    </div>
                    <div className="skill-right">
                        <p className="skill-desc">- RESTful API design</p>
                        <p className="skill-desc">- Django REST Framework</p>
                        <p className="skill-desc">- Custom serializers</p>
                        <p className="skill-desc">- Relational data modeling</p>
                    </div>
                </div>
                <div class="skill-card">
                    <div class="skill-left">
                        <img src="assets/icons/react.png" alt="React" class="skill-icon" />
                        <h3 class="skill-name">React</h3>
                    </div>
                    <div class="skill-right">
                        <p class="skill-desc">
                            - Component-based UI development
                        </p>
                        <p class="skill-desc">
                            - State management
                        </p>
                        <p class="skill-desc">
                            - API integration
                        </p>
                        <p class="skill-desc">
                            - Context usage
                        </p>
                    </div>
                </div>


                <div class="skill-card">
                    <div class="skill-left">
                        <img src="assets/icons/icons8-python-96.png" alt="Python" class="skill-icon" />
                        <h3 class="skill-name">Python</h3>
                    </div>
                    <div class="skill-right">
                        <p class="skill-desc">
                            - Data analysis with Pandas & NumPy
                        </p>
                        <p class="skill-desc">
                            - Machine learning with Scikit-learn
                        </p>
                        <p class="skill-desc">
                            - Scripting and backend development
                        </p>

                    </div>
                </div>


                <div class="skill-card">
                    <div class="skill-left">
                        <img src="assets/icons/icons8-java (1).svg" alt="Java" class="skill-icon" />
                        <h3 class="skill-name">Java</h3>
                    </div>
                    <div class="skill-right">
                        <p class="skill-desc">
                            - Core Java and OOP principles
                        </p>
                        <p class="skill-desc">
                            - AWT & Swing for desktop UI
                        </p>
                        <p class="skill-desc">
                            - JDBC for database connectivity
                        </p>
                    </div>
                </div>



                <div class="skill-card">
                    <div class="skill-left">
                        <img src="assets/icons/postgresql.png" alt="PostgreSQL" class="skill-icon" />
                        <h3 class="skill-name">PostgreSQL</h3>
                    </div>
                    <div class="skill-right">
                        <p class="skill-desc">
                            Database design, complex queries, joins, constraints, and backend integration with Django
                        </p>
                    </div>
                </div>

                <div class="skill-card">
                    <div class="skill-left">
                        <img src="assets/icons/git.png" alt="Git" class="skill-icon" />
                        <h3 class="skill-name">Git</h3>
                    </div>
                    <div class="skill-right">
                        <p class="skill-desc">
                            Version control, branching, commits, pull/push workflows, and collaboration via GitHub
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
