import { createBrowserRouter } from "react-router-dom";
import DigitalSubs from "./components/pages/digital/subPages/DigitalSubs";
import AllowForCredit from "./components/pages/financial/subPages/AllowForCredit";
import AvailablePM from "./components/pages/financial/subPages/AvailablePM";
import DeclinedPaymentPolicies from "./components/pages/financial/subPages/DeclinedPaymentPolicies";
import RefundPolicies from "./components/pages/financial/subPages/RefundPolicies.js"
import GiftingPolicies from "./components/pages/marketing/subPages/GiftingPolicies";
import SupportTrials from "./components/pages/marketing/subPages/SupportTrials"
import AvailableCC from "./components/pages/financial/subPages/AvailableCC";

const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Welcome to Policies MSP</h1>,
    },
    {
      path: "/marketing/giftingpolicies",
      element: <GiftingPolicies/>,
    },
    {
      path: "/marketing/supporttrials",
      element: <SupportTrials/>,
    },
    {
      path: "/financial/allowforcredit",
      element: <AllowForCredit/>,
    },
    {
      path: "/financial/availablepm",
      element: <AvailablePM/>,
    },
    {
      path: "/financial/availavlecc",
      element: <AvailableCC/>,
    },
    {
      path: "/financial/declinedpp",
      element: <DeclinedPaymentPolicies/>,
    },
    {
      path: "/financial/refundpolicies",
      element: <RefundPolicies/>,
    },
    {
      path: "/digital/subscriptions",
      element: <DigitalSubs/>,
    },
  ]);

export default router