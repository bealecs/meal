import React, {useState, useEffect} from 'react';
import './App.css';

const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

export const Meal = () => {
    
    const [food, setFood] = useState([])
    
    const fetchFood = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setFood(data.meals)
    }
    useEffect(() => {
        fetchFood();
    }, []);

    return (
        <div className='meal-container'>
        <section className="meals">
            {food.map((f) => {
                const {idMeal, strMeal, strInstructions, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4,
                     strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11,
                        strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20,
                        strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10,
                        strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18, strMeasure19, strMeasure20} = f;
                        
                return (
                    <article key={idMeal} className='meal-article'>
                        <div className='meal-section-1'>
                            <h1 className='title1'>Meal Suggestion Generator</h1>
                            <h2>Dish: {strMeal}</h2>
                            <div className="underline"></div>
                            <img src={strMealThumb} alt={strMeal} style={{width: '400px'}}/>
                            <button onClick={() => fetchFood()} className="btn">Get A Meal</button>
                        </div>
                        <div className='meal-section-3'>
                        <h3 className='howto'>Instructions:</h3>
                        <div className='underline2'></div>
                        <p>{strInstructions}</p>
                        <h4 className='ingredients'>Ingredients:</h4>
                        <div className='ingredients-div'>
                            <ul className='one'>
                                {strIngredient1 != null && strIngredient1.length > 0 ? <li>{strIngredient1 + ": " + strMeasure1}</li> : null}
                                {strIngredient2 != null && strIngredient2.length > 0 ? <li>{strIngredient2 + ": " + strMeasure2}</li> : null}
                                {strIngredient3 != null && strIngredient3.length > 0 ? <li>{strIngredient3 + ": " + strMeasure3}</li> : null}
                                {strIngredient4 != null && strIngredient4.length > 0 ? <li>{strIngredient4 + ": " + strMeasure4}</li> : null}
                                {strIngredient5 != null && strIngredient5.length > 0 ? <li>{strIngredient5 + ": " + strMeasure5}</li> : null}
                                {strIngredient6 != null && strIngredient6.length > 0 ? <li>{strIngredient6 + ": " + strMeasure6}</li> : null}
                                {strIngredient7 != null && strIngredient7.length > 0 ? <li>{strIngredient7 + ": " + strMeasure7}</li> : null}
                                {strIngredient8 != null && strIngredient8.length > 0 ? <li>{strIngredient8 + ": " + strMeasure8}</li> : null}
                                {strIngredient9 != null && strIngredient9.length > 0 ? <li>{strIngredient9 + ": " + strMeasure9}</li> : null}
                                {strIngredient10 != null && strIngredient10.length > 0 ? <li>{strIngredient10 + ": " + strMeasure10}</li> : null}
                            </ul>
                            <ul className='two'>
                                {strIngredient11 != null && strIngredient11.length > 0 ? <li>{strIngredient11 + ": " + strMeasure11}</li> : null}
                                {strIngredient12 != null && strIngredient12.length > 0 ? <li>{strIngredient12 + ": " + strMeasure12}</li> : null}
                                {strIngredient13 != null && strIngredient13.length > 0 ? <li>{strIngredient13 + ": " + strMeasure13}</li> : null}
                                {strIngredient14 != null && strIngredient14.length > 0 ? <li>{strIngredient14 + ": " + strMeasure14}</li> : null}
                                {strIngredient15 != null && strIngredient15.length > 0 ? <li>{strIngredient15 + ": " + strMeasure15}</li> : null}
                                {strIngredient16 != null && strIngredient16.length > 0 ? <li>{strIngredient16 + ": " + strMeasure16}</li> : null}
                                {strIngredient17 != null && strIngredient17.length > 0 ? <li>{strIngredient17 + ": " + strMeasure17}</li> : null}
                                {strIngredient18 != null && strIngredient18.length > 0 ? <li>{strIngredient18 + ": " + strMeasure18}</li> : null}
                                {strIngredient19 != null && strIngredient19.length > 0 ? <li>{strIngredient19 + ": " + strMeasure19}</li> : null}
                                {strIngredient20 != null && strIngredient20.length > 0 ? <li>{strIngredient20 + ": " + strMeasure20}</li> : null}
                            </ul>
                        </div>
                        </div>
                    </article>
                )
            })}
        </section>
        </div>
    )
}