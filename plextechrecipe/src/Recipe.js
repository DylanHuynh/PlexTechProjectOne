import React from  "react"
import ClassComponent from "./components/ClassComponent";

function Recipe(props) {
    return (
        <div>
            <h1>Food Name: {props.name}</h1>
            <h2>{props.name}'s Ingredients</h2>
            {props.ingredient.map((post) =>
                <li>{post}</li>
            )}

        </div>
    );
}

export default Recipe;