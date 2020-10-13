import React, { Component } from 'react';
import './FoodList.scss';
import Food from '../Food/Food'

class FoodList extends Component {
    render() {
        return (
            <section className="foodlist">
                <Food />
            </section>
        );
    }
}

export default FoodList;