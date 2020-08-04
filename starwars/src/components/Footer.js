import React from 'react';
import styled from 'styled-components';

const Foot = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
`;

const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-right: 50px;
`;

const H1 = styled.h1`
    color: white;
    margin-left: 50px;
`;

const A = styled.a`
    color: white;
    padding: 0 12px;
`;

const Footer = () => {

return (
<Foot className="footer" key="key">
    <H1>
        Everything Starwars
    </H1>
    <Nav>
        <A href="#">StarWars</A>
        <A href="#">StarWars</A>
        <A href="#">StarWars</A>
    </Nav>
</Foot>

);
}

export default Footer;