import {Tab, Tabs} from "react-bootstrap";
import Expenses from "../expenses/Expenses";
import React from "react";

const Dashboard: React.FC = () => {
    return (
        <Tabs defaultActiveKey="dashboard" id="uncontrolled-tab-example">
            <Tab eventKey="dashboard" title="Dashboard">
            </Tab>
            <Tab eventKey="expenses" title="Expenses">
                <Expenses/>
            </Tab>
        </Tabs>
    );
};

export default Dashboard;