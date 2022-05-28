import React from "react";
import classes from '../Burger/Burger.module.css';
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    let ingredientsArray = Object.keys(props.ingredients).
        map(ingrKey => {
            return [...Array(props.ingredients[ingrKey])].map((_, i) => {
              return  <BurgerIngredient key={ingrKey + i} type={ingrKey} />;
            });
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    if(ingredientsArray.length === 0){
       ingredientsArray = <p>Add ingredients for your burger!</p>;
    }

    console.log(ingredientsArray);
//   console.log(' ' + ingredientsArray);
    return (
        
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
                {ingredientsArray}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;