import React, { Component } from 'react';
import './FoodList.scss';
import Food from '../Food/Food'
import { foodData } from '../foodData'

class FoodList extends Component {
    state={
        foods: foodData
    }
    render() {
        const {foods} = this.state
        return (
            <section className="foodlist">
                {foods.map(food => {
                    return (
                        <Food key={food.id} food={food}/>
                    )
                })}
            </section>
        );
    }
}

export default FoodList;