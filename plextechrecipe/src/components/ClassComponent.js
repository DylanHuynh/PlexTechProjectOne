import React from "react"
import Recipe from "../Recipe"

class ClassComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayOfFood: [
                {name: "Spaghetti", ingredient: "tomatoes"}
            ]
        }

    }

    onClickHandler = () => {
      this.setState({
          clicked: !this.state.clicked
      }, () => console.log("yeet"))
  }
    componentDidMount() {
      fetch("http://localhost:7070/getAllRecipes")
      .then(response => {
        return response.json();

        })
      .then(response => {
        //setState
        console.log('Success:', response);
        this.setState({arrayOfFood: response});
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
    render() {
        let mappedRecipes = this.state.arrayOfFood.map(item => <Recipe name={item.name} ingredient={item.ingredient}/>)
        console.log(mappedRecipes);
        return (
            <div>
                <h1>Ready to Make Some Food</h1>
                {this.state.clicked? mappedRecipes: null}
                <button onClick = {this.onClickHandler}>Show me the recipes!</button>
            </div>
        )
    }

}



export default ClassComponent