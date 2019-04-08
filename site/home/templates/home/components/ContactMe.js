import React, {Component} from 'react';
import styled from 'styled-components'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';


import Heading from "../../../../templates/base/components/Heading";
import FormFields from "../../../../templates/base/components/utils/FormFields";
import PostMan from "../../../../templates/base/components/utils/PostMan";


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

const Wrapper = styled.a`
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


const InnerWrapper = styled.div`
    
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

// const Message = styled.textarea`
//     background: none;
//     border: 2px solid #22ff22;
//     height: 200px;
//     padding: 10px 10px;
//     color: #2e7d32;
//
//     outline: none;
// `;

const Submit = styled.div`
    display: flex;
    justify-content: center;
    
`;

const muiTheme = createMuiTheme({
    overrides: {
        // Name of the component ⚛️ / style sheet
        MuiButton: {
            // Name of the rule
            text: {
                // Some CSS
                background: '#2e7d32',
            },
        },
    },

    palette: {
        primary: {main: '#22ff22'},
        secondary: {main: '#2e7d32'},
    },

    status: {
        danger: 'orange',
    },

    typography: {
        fontFamily: ['Anonymous Pro']
    }
});

class ContactMe extends Component {
    state = {
        heading: {
            title: 'Contact Me',
            color: '#22ff22'
        },

        postMan: {
            url: '/contact-me/',
            data: {},
            post: false
        },

        formData:{
            fullname: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Full name',
                config: {
                    name: 'fullname_input',
                    type: 'text',
                    placeholder: 'enter your full name'
                }
            },
            email: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Email',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'enter your email'
                }
            },
            message: {
                element: 'textarea',
                value: '',
                label: true,
                labelText: 'Message',
                config: {
                    name: 'message_input',
                    type: 'text',
                    placeholder: 'enter your message'
                }
            }
        }
    };

    updateForm = (newState) => {
        this.setState({
            formData: newState
        })
    };

    submitForm = (event) => {
        event.preventDefault();
        let dataToSubmit = {};
        let url = '/contact-me/';

        for (let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value
        }

        this.setState({
            postMan: {
                url: url,
                data: dataToSubmit,
                post: true // Post request to Django server is handled by postMan component.
            }
        })
    };



    render() {
        return (
            <Section id='ContactMe'>
                <Wrapper name='ContactMe'>
                    <Heading title={this.state.heading.title} color={this.state.heading.color}/>

                    <InnerWrapper>
                        <Intro>
                            Want to discuss a collaboration or a job? <br/> <br/>
                            Send a message, Let's build something together!
                        </Intro>

                        <Form onSubmit={this.submitForm}>

                            <FormFields formData={this.state.formData}
                                        change={(newState) => this.updateForm(newState)}/>

                            <Submit>
                                <MuiThemeProvider theme={muiTheme}>
                                    <Button color="primary" type="submit">Send</Button>
                                </MuiThemeProvider>
                            </Submit>

                            <PostMan {...this.state.postMan}/>
                        </Form>

                    </InnerWrapper>
                </Wrapper>
            </Section>
        );
    }
}

ContactMe.propTypes = {};

export default ContactMe;
