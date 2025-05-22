import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };



    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div 
                    className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>{""}
                        Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{""}
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ?"qualification__content qualification__content-active":"qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> Master of Computer Applications</h3>
                                <span className="qualification__subtitle">Indira Gandhi National Open University (IGNOU), Delhi</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>Jan 2022 - Dec 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title"> Bachelor of Computer Applications</h3>
                                <span className="qualification__subtitle">Guru Gobind Singh Indraprastha University (GGSIPU ),Delhi</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>Aug 2018 - Jun 2021
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> Senior Secondary (XII), Commerce</h3>
                                <span className="qualification__subtitle">Sukriti World School (CBSE board), Delhi</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>May 2018
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                    </div>


                    <div className={toggleState === 2 ?"qualification__content qualification__content-active":"qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Junior Mobile Application Developer</h3>
                                <span className="qualification__subtitle"> Nickicon Information Technology Pvt. Ltd. - Rohini, Delhi, India</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>Aug 2024 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title"> Intern Mobile Application Developer</h3>
                                <span className="qualification__subtitle">Nickicon Information Technology Pvt. Ltd. - Rohini, Delhi, India</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>Feb 2024 - July2024
                                </div>
                            </div>

                        </div>

                    </div>




                </div>



            </div>

        </section>

    )
}

export default Qualification