import React from 'react';
import '../assets/scss/pages/frontendSkills-page.scss'
import CustomDivider from "../components/CustomDivider";

function FrontendSkills() {
    return (
        <div className="skills">
            <div className="page-header">
                <div className="container">
                    <h2>Frontend Skills</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <span className="skills__card__header">
                    Что я умею
                    </span>
                    <CustomDivider />
                </div>
                <div className="col-lg-6">
                    <span className="skills__card__header">
                    Codding skills
                    </span>
                    <CustomDivider />
                </div>
            </div>
        </div>
    );
}

export default FrontendSkills;
