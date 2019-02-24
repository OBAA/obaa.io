import React from 'react';

const About = () => {

    return (
        <div className="about" style={{height: `${window.innerHeight}px`}}>

            <div style={{height:'120px', display: 'flex', alignItems: 'center'}}>
                <div className="h1">
                    Skills
                </div>
            </div>
            <p className="">I am experienced in leveraging agile frameworks to provide a robust synopsis for
                scalable web applications, utilizing up to date technology stacks and ensuring optimum performance.</p>

            <div className="h2">Programming Languages &amp; Tools</div>


            <div className="body">
                <div className="content">
                    <div className="h3">
                        FrontEnd Stacks
                    </div>

                    <div className="dev-icons">
                        <i className="fab fa-html5"></i>
                        <i className="fab fa-css3-alt"></i>
                        <i className="fab fa-js-square"></i>
                        <i className="fab fa-npm"></i>
                        <i className="fab fa-react"></i>
                    </div>

                    <div className="h2">Workflow</div>

                    <ul className="">
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            Mobile-First, Responsive Design
                        </li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            Cross Browser Testing &amp; Debugging
                        </li>
                    </ul>
                </div>

                <div className="content">
                    <div className="h3">Backend Stacks</div>

                    <div className="dev-icons">
                        <i className="fab fa-python"></i>
                        <i className="fab fa-aws"></i>
                        <i className="fas fa-database"></i>
                        <i className="fab fa-git"></i>
                    </div>

                    <div className="h2">Workflow</div>

                    <ul className="">
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            CRUD design
                        </li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            Database Pre-fetching
                        </li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            Load balancing and Optimization
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    );
};

export default About;

