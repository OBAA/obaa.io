import React from 'react';

const Landing = () => {
    let half_height = `${window.innerHeight/2}px`;

    return (
        <div style={{height: `${window.innerHeight}px`, background: '#212121'}}>
            <div style={{position: 'relative'}}>
                <div className="landing" style={{top: half_height}} >
                    <div className="wrapper font_roboto">
                        <div className="title">Agbana Bolu</div>
                        <div className="sub">fullstack developer | tech enthusiast | entrepreneur</div>
                        {/*<div>*/}
                            <div className="social-icons">
                                <a href="#">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </div>
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
