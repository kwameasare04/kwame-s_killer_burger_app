import React from "react";
import classes from '../Burger/Burger.module.css';
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";

const burger = (props) => {
   const ingredientsArray = Object.keys(props.ingredients).map(ingreKey => {
        return [...Array(props.ingredients[ingreKey])].map((_,i)=>{
            console.log(ingreKey + i);
           return <BurgerIngredient key={ingreKey + i} type={ingreKey} />;
        });
    });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
                {ingredientsArray}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;