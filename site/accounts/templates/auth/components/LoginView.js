import React, {Component} from 'react';
import styled from 'styled-components'
import Heading from "../../../../templates/base/components/Heading";

const WindowHeight = `${window.innerHeight}px`;

const Section = styled.div`
    background: #2e7d32;

    @media (min-width: 780px) {
        height: ${WindowHeight};
        padding: 50px 50px;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    @media (max-width: 780px) {
        padding: 50px 25px;

    }
`;


const Wrapper = styled.div`
    background: #212121;
        
    @media (min-width: 780px) {
        padding: 35px 0 85px 0;
        width: 800px;
    }
    
    @media (max-width: 780px) {
        padding: 35px 0 85px 0;
        width: 100%;
    }
    
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const ContactForm = styled.div`
    
    @media (min-width: 780px) {
        width: 600px;
    }
    
    @media (max-width: 780px) {
        width: 400px;
        width: 80%;
    }

`;

const Intro = styled.div`
    color: #2e7d32;
    margin-bottom: 25px;
    font-size: 14px;
    width: 100%;
    
    @media (min-width: 768px) {
        font-size: 14px;
    }
    
`;

const Form = styled.form`
    width: 100%;
`;

const Element = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    
`;

const Label = styled.label`
    color: #22ff22;
    font-size: 20px;
    margin-bottom: 3px;
`;

const Input = styled.input`
    background: none;
    border: 2px solid #22ff22;
    height: 25px;
    padding: 0 10px;
    color: #2e7d32;
    
    outline: none;
`;


class Login extends Component {
    state = {
        heading: {
            title: 'Contact Me',
            color: '#22ff22'
        },

    };

    handleSubmitClick = (event) => {
        event.preventDefault();

        const values = {
            email: this.email.value,
            password: this.password.value,
        };
        console.log(values)
    };


    render() {
        return (
            <Section>
                <Wrapper>
                    <Heading title={this.state.heading.title} color={this.state.heading.color}/>

                    <ContactForm>
                        <Intro>
                            Welcome,<br/>
                            Login to access our wonderful offerings.
                        </Intro>

                        <Form>
                            <Element>
                                <Label>Full Name</Label>
                                <Input
                                    type='text'
                                    ref={input => this.email = input}
                                />
                            </Element>

                            <Element>
                                <Label>Email</Label>
                                <Input
                                    type='text'
                                    ref={input => this.password = input}
                                />
                            </Element>
                            <button onClick={this.handleSubmitClick}>
                                Sign in
                            </button>

                        </Form>

                    </ContactForm>

                </Wrapper>

            </Section>
        );
    }
}

export default Login;
