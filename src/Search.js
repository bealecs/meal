import React from "react";

export const Search = () => {

    const [specificMeal, setSpecificMeal] = React.useState([]);
    const [id, setId] = React.useState(0);
    const [hasSearched, setHasSearched] = React.useState(false);

    const handleChange = (e) => {
        setId(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
          const data = await response.json();
          if(data.meals != null) {
            setSpecificMeal(data.meals);
            setHasSearched(true);
          } else {
            setSpecificMeal(null);
            return console.log("No meals were found to match this ID..");
          }
        } catch (err) {
          console.log(err);
        }
      }
      return (
        <div>
            <div className="search-container">
                <form onSubmit={handleSubmit}>
                    <h4>Please input an ID # to search a specific meal</h4>
                    <input type="number" onChange={handleChange} placeholder="Enter your meal ID #" minLength={1}/>
                    <button type="submit">Search</button>
                </form>
            </div>
            {hasSearched && specificMeal != null &&
            <div>
              {specificMeal.map((f) => {
                const {idMeal, strMeal, strInstructions, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4,
                  strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11,
                     strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20,
                      strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10,
                      strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18, strMeasure19, strMeasure20} = f;
            
                     return (
                      <article key={idMeal} className='meal-article'>
                          <div className='meal-section-1'>
                              <h2>Dish: {strMeal}</h2>
                              <img src={strMealThumb} alt={strMeal} style={{width: '400px'}}/>
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
            </div>}
            {specificMeal == null &&
              <div>
                <h4 style={{'textAlign': 'center'}}>There were no meals found to match the input ID.. Please try again</h4>
                <p style={{'textAlign': 'center'}}>It is recommended that you visit the 'Search by Categories' section to find a meal ID #.</p>
              </div>
            }
        </div>
    )
}