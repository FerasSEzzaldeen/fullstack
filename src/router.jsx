import { createBrowserRouter } from "react-router-dom";
import Marketing from "./components/pages/marketing/Marketin";
import Financial from "./components/pages/financial/Financial";
import Digital from "./components/pages/digital/digital";
import DigitalSubs from "./components/pages/digital/subPages/DigitalSubs";
import AllowForCredit from "./components/pages/financial/subPages/AllowForCredit";
import AvailablePM from "./components/pages/financial/subPages/AvailablePM";
import DeclinedPaymentPolicies from "./components/pages/financial/subPages/DeclinedPaymentPolicies";
import RefundPolicies from "./components/pages/financial/subPages/RefundPolicies.js"
import GiftingPolicies from "./components/pages/marketing/subPages/GiftingPolicies";
import SupportTrials from "./components/pages/marketing/subPages/SupportTrials"
import AvailableCC from "./components/pages/financial/subPages/AvailableCC.js";

const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>hellooo</h1>,
    },
    {
      path: "/marketing",
      element: <Marketing/>,
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
      path: "/financial",
      element: <Financial/>,
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
      path: "/digital",
      element: <Digital/>,
    },
    {
      path: "/digital/subscriptions",
      element: <DigitalSubs/>,
    },
  ]);

export default router