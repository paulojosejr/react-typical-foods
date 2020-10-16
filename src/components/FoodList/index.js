import React, { Component } from 'react';
import './FoodList.scss';
import Food from '../Food/Food'
import { foodData } from '../foodData'

class FoodList extends Component {
    state = {
        foods: foodData
    }
    removeFood = id => {
        const { foods } = this.state
        const sortedFoods = foods.filter(food => food.id !== id)
        this.setState({
            foods:sortedFoods
        })
    }
    render() {
        const { foods } = this.state
        return (
            <section className="foodlist">
                {foods.map(food => {
                    return (
                        <Food key={food.id} food={food} removeFood={this.removeFood}/>
                    )
                })}
            </section>
        );
    }
}

export default FoodList;