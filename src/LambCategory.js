import React from "react";
import { useEffect } from "react";
import './App.css';

const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb";

export const LambCategory = () => {

    const [meal, setMeal] = React.useState([]);

        const fetchMeal = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setMeal(data.meals);
        }

        useEffect(() => {
            fetchMeal()
        }, [])

    return (
        <div>
            {meal.map((f) => {
                const {strMeal, strMealThumb, idMeal} = f;
                // can maybe use a switch case to switch between mealIDs cases to display different things
// watch a video on nested routes to figure this whole thing out tomorrow
// eventually make a button under the image that submits the idMeal value for searching through the search API by ID for meal to get ingredients and instructions for specific meals in this category
                
                return (
                    <div key={idMeal} className="beef-category" onClick={fetchMeal}>
                        <div className="beef-card" onClick={() => {navigator.clipboard.writeText(idMeal)}}>
                        <h2>{strMeal}</h2>
                        <h4>{"Search ID:" + idMeal}</h4>
                        <img src={strMealThumb} style={{width: '300px'}} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}