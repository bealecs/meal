import React from 'react';
import { Meal } from './Meal';
import { Signup } from './Login';
import { Login } from './Login';
import { Route, Routes } from "react-router";
import { CategoryListing } from './Category';
import { Landing } from './Landing';
import { Favorites } from './Favorites';
import { BeefCategory } from './BeefCategory';
import { ChickenCategory } from './ChickenCategory';
import { DessertCategory } from './DessertCategory';
import { LambCategory } from './LambCategory';
import { MiscellaneousCategory } from './MiscellaneousCategory';
import { PastaCategory } from './PastaCategory';
import {PorkCategory} from './PorkCategory';
import {SeafoodCategory} from './SeafoodCategory';
import { SideCategory } from './SideCategory';
import { StarterCategory } from './StarterCategory';
import { VeganCategory } from './VeganCategory';
import { VegetarianCategory } from './VegetarianCategory';
import { BreakfastCategory } from './BreakfastCategory';
import { GoatCategory } from './GoatCategory';
import { Search } from './Search';
    
export const Body = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path="/Meal" element={<Meal />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Category" element={<CategoryListing />} />
                <Route path="/Favorites" element={<Favorites />} />
                <Route path="/Category/Beef" element={<BeefCategory />} />
                <Route path="/Category/Chicken" element={<ChickenCategory />} />
                <Route path="/Category/Dessert" element={<DessertCategory />} />
                <Route path="/Category/Lamb" element={<LambCategory />} />
                <Route path="/Category/Miscellaneous" element={<MiscellaneousCategory />} />
                <Route path="/Category/Pasta" element={<PastaCategory />} />
                <Route path="/Category/Pork" element={<PorkCategory />} />
                <Route path="/Category/Seafood" element={<SeafoodCategory />} />
                <Route path="/Category/Side" element={<SideCategory />} />
                <Route path="/Category/Starter" element={<StarterCategory />} />
                <Route path="/Category/Vegan" element={<VeganCategory />} />
                <Route path="/Category/Vegetarian" element={<VegetarianCategory />} />
                <Route path="/Category/Breakfast" element={<BreakfastCategory />} />
                <Route path="/Category/Goat" element={<GoatCategory />} />
                <Route path='/Search' element={<Search />} />
            </Routes>
        </div>
    )
}