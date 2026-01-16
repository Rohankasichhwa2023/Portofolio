import React from 'react';

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-container">
                <div className="project-card">
                    <img src="/assets/projects/Stock-Pal.png" alt="Stock-Pal Screenshot" className="project-thumbnail" />
                    <h3>Stock-Pal</h3>
                    <p>A web-based stock market analysis and prediction app for NEPSE listed companies...</p>
                    <a href="https://github.com/Rohankasichhwa2023/Stock-Pal" target="_blank" rel="noreferrer">View on GitHub</a>
                </div>
                <div class="project-card">
                    <img src="assets/projects/best-reads.png" alt="Best-Reads Screenshot" class="project-thumbnail" />
                    <h3>Best-Reads</h3>
                    <p>An e-commerce bookstore built with Django and React, featuring cart, orders, requesting books and payment
                        integration of Khalti and E-sewa.</p>
                    <a href="https://github.com/Rohankasichhwa2023/Online-Bookstore" target="_blank">View on GitHub</a>
                </div>

                <div class="project-card">
                    <img src="assets/projects/recipebook.png" alt="Recipe-Book Screenshot" class="project-thumbnail" />
                    <h3>Recipe-Book</h3>
                    <p>A recipe-sharing social media platform built with PHP and MySQL, allowing users to post, like, comment and
                        share
                        recipes.</p>
                    <a href="https://github.com/Rohankasichhwa2023/Recipe-Book" target="_blank">View on GitHub</a>
                </div>



                <div class="project-card">
                    <img src="assets/projects/loan-approval-prediction.png" alt="Recipe-Book Screenshot"
                        class="project-thumbnail" />
                    <h3>Loan Approval Prediction</h3>
                    <p>Predicts whether a loan application will be approved or not using machine learning techniques such as
                        Logistic
                        Regression and Random Forest</p>
                    <a href="https://github.com/Rohankasichhwa2023/loan-approval-prediction" target="_blank">View on GitHub</a>
                </div>
            </div>
        </section>
    );
}
