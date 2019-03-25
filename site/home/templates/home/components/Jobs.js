import React, {Component} from 'react';
import styled from 'styled-components';
import Heading from "../../../../templates/base/components/Heading";
import Job from "./JobCard";


const Section = styled.div`
    background: #212121;
    padding: 10px 50px;
    @media (max-width: 768px) {
    }
    @media (max-width: 500px) {
        padding: 10px 40px;
    } 
`;

const Intro = styled.div`
    color: #2e7d32;
    margin-bottom: 25px;
    
    @media (max-width: 768px) {
    }
    
    @media (max-width: 500px) {
        // padding: 10px 20px;
    } 
`;

const Wrapper = styled.div`
    display: flex;
    padding: 10px 0;
    
    @media (min-width: 780px) {
        flex-flow: row wrap;
        justify-content: space-between;
    }
    
    @media (max-width: 780px) {
        flex-direction: column;
        align-items: center;
    }
    
`;


class Jobs extends Component {
    state = {
        heading: {
            title: 'Job history',
            color: '#22ff22'
        },

        job1: {
            role: 'Full Stack Developer',
            employer: '1OVER3 Store',
            duration: 'Jul \'18 to Present',
            summary: "All users on MySpace will know that there are millions of\n" +
            "people out there. Every day besides. All users on My will\n" +
            "know that there are millions of people out of the field there."
        },
        job2: {
            role: 'All My Guys are Ballers',
            employer: 'A.M.G',
            duration: 'Jul \'15, 2017 to Jul \'16, 2018',
            summary: "All users on MySpace will know that there are millions of\n" +
            "people out there. Every day besides. All users on My will\n" +
            "know that there are millions of people out of the field there."
        },
        job3: {
            role: 'Junior Network Engineer',
            employer: 'Chevron Nigeria',
            duration: 'Jan \'16, 2016 to Jun \'27, 2016',
            summary: "All users on MySpace will know that there are millions of\n" +
            "people out there. Every day besides. All users on My will\n" +
            "know that there are millions of people out of the field there."
        },

    };

    render() {
        return (
            <Section>
                <Heading title={this.state.heading.title}
                         color={this.state.heading.color} />

                <Intro>
                    If you are looking at blank cassettes on the web, you may
                    be very confused at the difference in price. You may see
                    some for as low as $.17 each.
                </Intro>
                <Wrapper>
                    <Job {...this.state.job1}/>
                    <Job {...this.state.job2}/>
                    <Job {...this.state.job3}/>

                </Wrapper>

            </Section>
        );
    }
}

export default Jobs;
