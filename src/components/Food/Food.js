import React, { Component } from 'react';
import './Food.scss'

class Foods extends Component {
    render() {
        return (
            <article className="food">
                <div className="img-container">
                    <img
                        src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt=""
                    />
                    <span className="close-btn">
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="food-info">
                    <h3>food</h3>
                    <h4>name</h4>
                    <h5>info{""}
                        <span>
                            <i className="fas fa-caret-square-down"/>
                        </span>
                    </h5>
                    <p>
                        Info about foods
                    </p>
                </div>
            </article>
        );
    }
}

export default Foods;