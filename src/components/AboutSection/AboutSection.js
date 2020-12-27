import React, { Component } from 'react';
import './AboutSection.css';

class AboutSection extends Component {
    render() {
        return(
            <div className="IDEWindow">
                <div className="ide-bar">&nbsp;</div>
                <div className="ide-info">
                    > Truman.origin <br />
                    => "Toronto, ON, CA" <br />

                    > Truman.education <br />
                    => "Queen's University" <br />

                    > Truman.major <br />
                    => "Computing" <br />

                    > Truman.specialization <br />
                    => "Software Design" <br />

                    > Truman.expectedGraduation <br />
                    => "April 2023" <br />

                    > Truman.interests <br />
                    => ["programming", "video games", ] <br />

                    > Truman.workExperience.latest <br />
                    => "Latest Work Experience" <br />
                    company: "Queen's University School of Computing" <br />
                    role: "Head Teaching Assistant" <br />
                    startDate: "September 2020" <br />
                    endDate: "December 2020" <br />

                    > Truman.resume <br />
                    => "trumanbe.pdf" <br />

                    > Truman.email <br />
                    => "trumanbe01@gmail.com" <br />

                </div>
            </div>
        )
    }
}

export default AboutSection