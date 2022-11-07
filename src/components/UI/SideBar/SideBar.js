import React from "react";
import styled from "styled-components";
import List from "./List";
const NavSec = styled.div`
  background-color: #B2B2B2;
  width: 15%;
  height: 800px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 3px solid #3C4048;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 80%;
`;

const SideBar = () => {
  return (
    <NavSec>
      <Wrapper>
        <List
          title={"Marketing Policies"}
          subs={["Support Trials", "Gifting Policies"]}
          path={"/marketing/giftingpolicies"}
        />
        <List
          title={"Financial Policies"}
          subs={[
            "Available Credit Cards",
            "Available Payment Methods",
            "Allow for Credit and Bill Me",
            "Refund Policies",
            "Declined Payment Policies",
          ]}
          path={"/financial/availavlecc"}
        />
        <List
          title={"Digital Subscriptions"}
          subs={["Require Physical Address"]}
          path={"/digital/subscriptions"}
        />
      </Wrapper>
    </NavSec>
  );
};

export default SideBar;
