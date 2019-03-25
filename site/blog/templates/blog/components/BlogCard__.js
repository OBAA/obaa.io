import React from 'react';
import styled from "styled-components";

const Div = styled.div`
    height: 325px;
    width: 350px;
    
    background: #F0F0F0;
    margin: 0 5px 35px 5px;
        
    @media (max-width: 780px) {
        height: 370px;
        width: 80%;
    }

    @media (max-width: 500px) {
        height: 325px;
        width: 90%
    }
    
    border-bottom: 2px solid #2e7d32;
    
`;

const Image = styled.div`
    background-color: lightgrey;
    max-width: 100%;
    height: 200px;
    
    @media (max-width: 780px) {
        height: 230px;
    }
        
    @media (max-width: 500px) {
        height: 200px;
    }
`;

const Wrapper = styled.div`
    border: 2px solid #2e7d32;
    border-top: none;
    border-top: none;
        
`;

const MetaWrapper = styled.div`
    display: flex;
    justify-content: center;
    
    height: 50px;
    
    @media (max-width: 780px) {
        height: 60px;
    }
        
`;

const PostMeta = styled.div`
    display: flex;
    align-items: center;
    
    color: #2e7d32;
    width: 90%;
    padding: 0 5px;
            
    @media (max-width: 780px) {
        font-size: 17px;
    }
    
    @media (max-width: 768px) {
        font-size: 15px;
    }
    
    @media (max-width: 500px) {
        font-size: 14px;
    }
`;

const Avi = styled.div`
    height: 35px;
    width: 35px;
    background: lightgrey;
    border-radius: 50%;
    margin-right: 5px;
        
    @media (max-width: 780px) {
        height: 40px;
        width: 40px;
        margin-right: 15px;
    }
    
    @media (max-width: 500px) {
        height: 35px;
        width: 35px;
        margin-right: 5px;
    }
`;

const Span = styled.i`
    margin: 0 5px;
`;

const I = styled.i`
    margin-right: 5px;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    
    height: 50px;
    padding: 5px 25px;
    color: #22ff22;
        
    @media (max-width: 780px) {
        height: 60px;
        font-size: 20px;
    }
    
    @media (max-width: 500px) {
        height: 50px;
        font-size: 18px;
    }
        
`;

const BlogCard = (props) => {
    const title = props.title;
    const author = props.author;
    return (
        <Div>
            <Image/>
            <Wrapper>
                <MetaWrapper>
                    <PostMeta>
                        <Avi/>

                        <Span>{author}</Span>
                        •
                        <Span>March 15, 2019</Span>
                        •
                        <Span><I className="fa fa-comments"></I>3</Span>

                    </PostMeta>
                </MetaWrapper>
                <Title>{title}</Title>
            </Wrapper>
        </Div>
    );
};

export default BlogCard;
