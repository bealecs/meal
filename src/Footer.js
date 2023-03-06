import React from "react";
import { FeedbackForm } from "./Feedback";


export const Footer = () => {

    return (
        <div>
            <footer className="footer">
                <FeedbackForm />
                <p>This site is still undergoing maintenance</p>
            </footer>
        </div>
    )
}