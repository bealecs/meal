import React from "react";
import { useEffect } from "react";
import './App.css';

const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";

export const BeefCategory = () => {

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

                return (
                    <div key={idMeal} className="beef-category" onClick={fetchMeal}>
                            <div className="beef-card" id={idMeal} onClick={() => {navigator.clipboard.writeText(idMeal)}}>
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
