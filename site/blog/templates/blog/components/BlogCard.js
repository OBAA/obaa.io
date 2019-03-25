import React from 'react';
import styled from "styled-components";

const Div = styled.div`   
    height: 325px;
    width: 350px;
    margin: 0 5px 35px 5px;
    
    display: flex;
    flex-direction: column;
        
    @media (max-width: 780px) {
        width: 90%;
    }
        
`;

const Image = styled.div`
    background-color: lightgrey;
    max-width: 100%;
    height: 200px;
    
`;

const MetaWrapper = styled.div`
    flex-grow: 1;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    border: 3px solid #2e7d32;
    border-top: none;
    
`;

const PostMeta = styled.div`
    height: 45px;
    width: 85%;
    background: #2e7d32;
    color: #F0F0F0;
    padding: 0 15px;
    
    display: flex;
    align-items: center;
            
    @media (max-width: 780px) {
        font-size: 15px;
    }
    
    @media (max-width: 640px) {
        font-size: 14px;
    }

    @media (max-width: 500px, min-width: 780px) {
        font-size: 12px;
    }
`;

const Avi = styled.div`
    height: 35px;
    width: 35px;
    background: lightgrey;
    border-radius: 50%;
    margin-right: 5px;
    
`;

const Span = styled.span`
    margin: 0 7px;
`;

const I = styled.i`
    margin-right: 5px;
`;

const Title = styled.div`    
    height: 50px;
    padding: 5px 25px;
    color: #22ff22;
    
    display: flex;
    align-items: center;
        
    @media (max-width: 780px) {
        font-size: 20px;
    }
    
    @media (max-width: 500px) {
        font-size: 18px;
    }
        
`;

const BlogCard = (props) => {
    const title = props.title;
    const author = props.author;
    return (
        <Div>

            <Image/>

            <MetaWrapper>

                <PostMeta>
                    <Avi/>

                    <Span>{author}</Span>
                    •
                    <Span>March 15, 2019</Span>
                    •
                    <Span><I className="fa fa-comments"></I>3</Span>
                </PostMeta>

                <Title>{title}</Title>
            </MetaWrapper>
        </Div>
    );
};

export default BlogCard;
