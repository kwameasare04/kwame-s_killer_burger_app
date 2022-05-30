import React, { Component } from "react";
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.3,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
};

class BurgerBuilder extends Component{
state = {
    ingredients:{
        salad: 0,
        bacon: 0,
        cheese:0,
        meat:0
    },
    total_price: 4
};

addIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
        ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const ingredient_cost = INGREDIENT_PRICES[type];
    const old_price = this.state.total_price;
    const new_price = old_price + ingredient_cost;
    this.setState({total_price: new_price, ingredients: updatedIngredients});
}

removeIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0){
        return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
        ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const ingredient_cost = INGREDIENT_PRICES[type];
    const old_price = this.state.total_price;
    const new_price = old_price - ingredient_cost;
    this.setState({total_price: new_price, ingredients: updatedIngredients});

}


    render (){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ingredientAdded={this.addIngredientsHandler}
                 ingredientRemoved={this.removeIngredientsHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;