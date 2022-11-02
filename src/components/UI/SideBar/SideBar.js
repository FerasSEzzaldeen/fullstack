import React from 'react';
import styled from "styled-components"
import List from './List';
const NavSec = styled.div`
    background-color: #c9c9c9;
    width: 15%;
    height: 800px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 80%;
    height: 80%;
`;

const SideBar = () =>{
    return(
        <NavSec>
            <Wrapper>
                <List title={"Marketing Policies"} subs={["Support Trials", "Gifting Policies"]} path={"/marketing"}/>
                <List title={"Financial Policies"} subs={["Available Credit Cards", "Available Payment Methods", "Allow for Credit and Bill Me", "Refund Policies", "Declined Payment Policies"]} path={"/financial"}/>
                <List title={"Digital Subscriptions"} subs={["Require Physical Address"]} path={"/digital"}/>
            </Wrapper>
        </NavSec>
    )
}

export default SideBar