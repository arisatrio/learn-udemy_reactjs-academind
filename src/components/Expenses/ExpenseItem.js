import React from "react";

import './ExpenseItem.css';

import Card from "../_UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">$123</div>
            </div>
        </Card>
    );
};

export default ExpenseItem;