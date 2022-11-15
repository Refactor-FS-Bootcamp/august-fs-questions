import React from 'react'
import './PostItem.css'
import styled from 'styled-components';

const h1Styled = {
    backgroundColor: 'lightpink',
    padding: '5px'
}

const ParaStyle = styled.p`
    font-size: 1em;
    color: darkmagenta;
    text-transform: uppercase;
`;

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;


const PostItem = ({ post }) => {
    return (
        <div className='container'>
            <h1 style={h1Styled}>ID: {post.id}</h1>
            <h3 style={{ backgroundColor: 'lightgrey', padding: '3px' }}>Title: {post.title}</h3>
            <ParaStyle>{post.body}</ParaStyle>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </div>
    )
}

export default PostItem