import React from "react";

export const Landing = () => {
    return (
        <div className="main-landing-container">
            <div className="landing-container1">
                <h1>News and Updates</h1>
                <p>Added the search by categories feature: <br></br> 
                    Here you can find a meal from any category that suits you.<br></br> Once you have found your meal,
                    just click on it to copy the search ID # code. <br></br>Once you have the code, paste it into the search by ID # bar, found in the navigation section.
                    <br></br> 
                </p>
            </div>
            <div className="landing-container2">
                <h1>Features</h1>
                <ul>
                    <li>Feeling bold? Find a randomly selected meal suggestion to take a risk and possibily try something new!</li>
                    <li>Need something more specific? Search through different meal categories to find a suggestion that best suits your mood</li>
                    <li>Coming soon: Create your own featured meals list of all of your favorites that you have tried so far. Just click the star icon to save it in your featured list</li>
                    <li>Leave your own suggestions! Suggestions help improve shortcomings and help to better reach all targeted audiences</li>
                </ul>
            </div>
        </div>
    )
}