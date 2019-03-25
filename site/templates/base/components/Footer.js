import React from 'react';
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #212121;
    
    @media (min-width: 780px) {
        height: 550px;
    }
    
`;

const Wrapper = styled.div`
    display: flex;
    width: 80%;
    margin-bottom: 50px;
    
    justify-content: space-between;
    
    
    @media (min-width: 780px) {
        flex-flow: row wrap;        
    }
    
    @media (max-width: 780px) {
        flex-flow: row wrap-reverse;        
    }
`;

const Links = styled.div`
    width: 175px;
    height: 200px;
    
    margin: 35px 0;
    padding: 15px 15px;
            
    @media (min-width: 780px) {
        flex-basis: 20%;
    }
    
    @media (max-width: 780px) {
        flex-basis: 40%;
    }
    
    display: flex;
    flex-direction: column;
`;

const Posts = styled.div`
    width: 250px;
    height: 300px;    
    margin: 35px 0;
    padding: 15px 15px 0;
    
    @media (min-width: 780px) {
        flex-basis: 40%
    }
    
    @media (max-width: 780px) {
        flex-basis: 100%
    }
    
    display: flex;
    flex-direction: column;
    
`;

const Title = styled.div`
    font-size: 20px;
    color: #22ff22;
    margin-bottom: 25px;
    
    @media (max-width: 500px) {
        font-size: 18px;
    }
`;

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: #22ff22;
    
    @media (max-width: 780px) {
    }
`;

const PostsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: #22ff22;

`;

const Link = styled.a`
    font-size: 17px;
    color: #2e7d32;
    text-decoration: none;    
    margin: 10px 0;
    position: relative;
    
    @media (max-width: 500px) {
        font-size: 15px;
    }
    
    &:hover {
        color: #22ff22;
        left: 10px;
        border-left: 2px solid #22ff22;
        padding-left: 10px;
    }

`;

const Post = styled.div`
    display: flex;
    height: 80px;    
    margin-bottom: 5px;

`;

const Img = styled.img`
    flex-shrink: 0;
    width: 100px;
    height: 70px;
    background: #F0F0F0;
    background-size: contain;
    background-position: center;
    margin-right: 15px;
        
    @media (max-width: 500px) {
        width: 80px;
        height: 50px;
    }
`;

const Topic = styled.div`
    font-size: 15px;
    
    @media (max-width: 500px) {
        font-size: 13px;
    }
`;

const Meta = styled.div`
    margin-top: 10px;
    color: #2e7d32;
    
    @media (max-width: 780px) {
    }
`;

const Span = styled.span`
    margin: 0 10px;
    
    &:first-child {
        margin-left: 0;
    }
`;

const I = styled.i`
    margin-right: 5px;
`;


const Copyright = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 15px;
    color: #22ff22;
    margin-bottom: 100px;
    
    span {
        margin-top: 5px;
        font-size: 12px;
        color: #2e7d32;
    }
`;


const Footer = () => {
    return (
        <Section>
            <Wrapper>
                <Links>
                    <Title>Quick Links</Title>
                    <LinksWrapper>
                        <Link href='/'>Home</Link>
                        <Link href='/portfolio'>About me</Link>
                        <Link href='/portfolio'>Portfolio</Link>
                        <Link href='/blog'>Blog</Link>
                    </LinksWrapper>
                </Links>

                <Links>
                    <Title>Socials</Title>
                    <LinksWrapper>
                        <Link>
                            <i className="fab fa-linkedin"> </i> Linkedin
                        </Link>
                        <Link>
                            <i className="fab fa-instagram"> </i> Instagram
                        </Link>
                        <Link>
                            <i className="fab fa-twitter"> </i> Twitter
                        </Link>
                    </LinksWrapper>
                </Links>

                <Posts>
                    <Title>Latest Posts</Title>
                    <PostsWrapper>
                        <Post>
                            <Img/>
                            <div>
                                <Topic>How to Find the Video Games of Your Youth</Topic>
                                <Meta>
                                    <Span>March 15, 2019</Span>
                                    •
                                    <Span><I className="fa fa-comments"></I>3</Span>
                                </Meta>
                            </div>
                        </Post>

                        <Post>
                            <Img/>
                            <div>
                                <Topic>Integrating your Django Project with React</Topic>
                                <Meta>
                                    <Span>March 15, 2019</Span>
                                    •
                                    <Span><I className="fa fa-comments"></I>3</Span>
                                </Meta>
                            </div>
                        </Post>

                        <Post>
                            <Img/>
                            <div>
                                <Topic>Building a Multi-Tenant E-commerce Website with Django</Topic>
                                <Meta>
                                    <Span>March 15, 2019</Span>
                                    •
                                    <Span><I className="fa fa-comments"></I>3</Span>
                                </Meta>
                            </div>
                        </Post>
                    </PostsWrapper>
                </Posts>
            </Wrapper>
            <Copyright>
                <div>Handcrafted by me © TwentyNineteen. </div>
                <span>All rights reserved | OBAA Global</span>
            </Copyright>
        </Section>
    );
};

export default Footer;
