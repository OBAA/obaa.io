import React, {Component} from 'react';
import styled from "styled-components";


const JobDuration = styled.div`
    // background: #F0F0F0;
    // color: #2e7d32;

    background: #2e7d32;
    color: #F0F0F0;

    margin: 15px 0 20px 25px;
    padding: 15px 10px;

`;

const Wrapper = styled.section`
    height: 250px;
    background: #212121;
    border: 2px solid #2e7d32;
    border-radius: 3px;
    color: #2e7d32;
    margin-bottom: 25px;

    @media (max-width: 768px) {
    }

    @media (max-width: 500px) {
    } 

    &:hover {
        background: #212121;
        border: 2px solid #22ff22;
        color: #22ff22;
    }

    &:hover ${JobDuration} {
        background: #22ff22;
        color: #ffffff;
        font-size: 20px;
        padding: 13px 10px;
    }
`;


const InnerWrapper = styled.section`
    padding: 25px 0;
`;

const Role = styled.div`
    padding: 0 25px;

    font-size: 20px;
`;

const Employer = styled.div`
    padding: 0 25px;

    font-size: 15px;
    margin: 10px 0;
    font-style: italic;
`;

const Summary = styled.div`
    padding: 0 25px;
    font-size: 14px;
    
`;


class Job extends Component {
    render() {
        const props = this.props;
        return (
            <Wrapper>
                <InnerWrapper>
                    <Role>{props.role}</Role>
                    <Employer>{props.employer}</Employer>
                    <JobDuration>
                        {props.duration}
                    </JobDuration>
                    <Summary>
                        {props.summary}
                    </Summary>
                </InnerWrapper>
            </Wrapper>
        );
    }
}

export default Job;
