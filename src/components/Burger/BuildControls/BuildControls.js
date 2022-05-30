import React from "react";
import classes from '../BuildControls/BuildControls.module.css';
import BuildControl from "./BuildControl/BuildControl";

 const controls = [
     {label: 'Salad', type: 'salad'},
     {label: 'Bacon', type: 'bacon'},
     {label: 'Cheese', type: 'cheese'},
     {label: 'Meat', type: 'meat'},
 ];

const buildContols = (props) => (
    <div className={classes.BuildControls}> 
    <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
        <BuildControl added={()=> props.ingredientAdded(ctrl.type)} key={ctrl.label} label={ctrl.label} 
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
        />
    ))}
    <button>Order Now</button>
    </div>
);

export default buildContols;