import React from 'react';
import styled from 'styled-components';

const Head = styled.div`
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

const H2 = styled.h2`
    color: white;
    margin-left: 50px;
`;

const A = styled.a`
    color: white;
    padding: 0 12px;
`;

const Header = () => {

return (
<Head className="header" key="key">
    <H2>
        Everything Starwars
    </H2>
    <Nav>
        <A href="#">StarWars</A>
        <A href="#">StarWars</A>
        <A href="#">StarWars</A>
    </Nav>
</Head>

);
}

export default Header;