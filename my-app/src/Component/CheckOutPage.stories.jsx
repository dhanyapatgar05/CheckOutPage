import React from "react";
import CheckOutPage from "./CheckOutPage";
import "./CheckOutPage.css";

export default {
  title: "Pages/CheckOutPage",
  component: CheckOutPage,
};

const Template = (args) => <CheckOutPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
