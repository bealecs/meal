import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BeefCategory } from "./BeefCategory";

const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

export const Category = (props) => {
    
    const [category, setCategory] = React.useState([]);

    const fetchCategories = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setCategory(data.categories);
    }

    useEffect(() => {
        fetchCategories()
    }, [])

   

    return (
        <div>
            {category.map((f) => {
                const {idCategory, strCategory, strCategoryThumb, strCategoryDescription} = f; 

                return (
                    <div key={idCategory} id={strCategory}>
                        <Link to={"/Category/" + strCategory} className="category-links"><div className="category-listings" id={strCategory}>
                            <h2>{strCategory}</h2>
                            <img alt={strCategory} src={strCategoryThumb} className="category-img"/>
                            <h4>{strCategoryDescription}</h4>
                        </div></Link>
                    </div>
                )
            })}
        </div>
    )
}

    export const CategoryListing = () => {

        return (
            <div className="category">
                <Category />
            </div>
        )
    }
