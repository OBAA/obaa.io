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

const Message = styled.textarea`
    background: none;
    border: 2px solid #22ff22;
    height: 200px;
    padding: 10px 10px;
    color: #2e7d32;
    
    outline: none;
`;

class ContactMe_ extends Component {
    state = {
        heading: {
            title: 'Contact Me',
            color: '#22ff22'
        },
        name: '',
        email: ''
    };

    handleNameInput = (event) => {
        console.log(event.target.value);
        this.setState({
            name: event.target.value
        });
    };

    handleEmailInput = (event) => {
        console.log(event.target.value);
    };

    handleSubmit = () => {
        
    };

    render() {
        return (
            <Section>
                <Wrapper>
                    <Heading title={this.state.heading.title} color={this.state.heading.color}/>

                    <ContactForm>
                        <Intro>
                            I can help you build and grow your next product.<br/>
                            Want to discuss a collaboration? Let's build something together!<br/>
                            Send a message, Lets Talk.
                        </Intro>

                        <Form onSubmit={this.handleSubmit}>
                            <Element>
                                <Label>Full Name</Label>
                                <Input
                                    type='text'
                                    onChange={this.handleNameInput}
                                    value={this.state.full_name}
                                />
                            </Element>

                            <Element>
                                <Label>Email</Label>
                                <Input
                                    type='text'
                                    onChange={this.handleEmailInput}
                                    value={this.state.email}
                                />
                            </Element>

                            <Element>
                                <Label>Message</Label>
                                <Message />
                            </Element>

                        </Form>

                    </ContactForm>

                </Wrapper>

            </Section>
        );
    }
}

export default ContactMe_;
