import React from 'react';
import styled from 'styled-components'

import bg_image from '../../../../static/images/bg_landing.jpeg'

const WindowHeight = `${window.innerHeight}px`;
const WindowHalfHeight = `${(window.innerHeight/2)}px`;

const Section = styled.div`
    height: 800px;
    height: ${WindowHeight};
    background: #212121;
`;

const Div = styled.div`
    position: relative;
    background: url(${bg_image});
    height: 100%;
`;

const WrapperOutter = styled.div`
    position: absolute;
    top: 400px;
    top: ${WindowHalfHeight};
    left: 50%;
    width: 400px;
    height: 160px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border: 2px solid #2e7d32;
    background: #212121;
    
    @media (max-width: 500px) {
        width: 300px;
        height: 120px;
    }
`;

const WrapperInner = styled.div`
    border: 2px solid #2e7d32;
    height: 121px;
    margin: 6px;
    text-align: center;
    padding: 21px 70px 0 70px;
        
    @media (max-width: 500px) {
        height: 90px;
        padding: 14px 25px 0 25px;
    }
    
    &:hover ${Name} {
        color: #22ff22;
    }
`;

const Name = styled.div`
    color: #22ff22;
    font-size: 35px;
    text-transform: uppercase;
    margin-bottom: 0;
    
    @media (max-width: 500px) {
        font-size: 25px;
    }
`;

const Bio = styled.div`
    color: #43a047;
    font-size: 10px;
    margin-bottom: 5px;
    
    @media (max-width: 500px) {
        font-size: 8px;
    }
`;

const SocialIcons = styled.a`
    display: inline-block;
    height: 2.5rem;
    width: 2.5rem;
    background-color: #2e7d32;
    color: #fff !important;
    border-radius: 100%;
    text-align: center;
    font-size: 1.5rem;
    line-height: 2.5rem;
    margin-right: 1rem;
    
    @media (max-width: 500px) {
        height: 2rem;
        width: 2rem;
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 0.5rem;
    }
    
    &:last-child {
        margin-right: 0;
    }
    
    &:hover {
        background-color: #22ff22;
    }
`;


const Landing = () => {

    return (
        <Section>
            <Div>
                <WrapperOutter>
                    <WrapperInner className="font_roboto">
                        <Name>
                            Agbana Bolu
                        </Name>
                        <Bio>
                            fullstack developer | tech enthusiast | entrepreneur
                        </Bio>
                        <div>
                            <SocialIcons href="https://www.linkedin.com/in/agbana-bolu/" target="_blank">
                                <i className="fab fa-linkedin-in"></i>
                            </SocialIcons>
                            <SocialIcons href="https://github.com/OBAA/" target="_blank">
                                <i className="fab fa-github"></i>
                            </SocialIcons>
                            <SocialIcons >
                                <i className="fab fa-twitter"></i>
                            </SocialIcons>
                            <SocialIcons href="https://www.instagram.com/iam.obaa/" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </SocialIcons>
                        </div>
                    </WrapperInner>
                </WrapperOutter>
            </Div>
        </Section>
    );
};

export default Landing;
