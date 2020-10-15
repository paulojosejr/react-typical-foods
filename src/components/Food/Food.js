import React, { Component } from 'react';
import './Food.scss'

class Foods extends Component {
    state = {
        showInfo: false
    }
    render() {
        const{food, img, country, info} = this.props.food
        return (
            <article className="food">
                <div className="img-container">
                    <img
                        src={img}
                        alt=""
                    />
                    <span className="close-btn">
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="food-info">
                    <h3>{food}</h3>
                    <h4>{country}</h4>
                    <h5>info{""}
                        <span>
                            <i className="fas fa-caret-square-down"/>
                        </span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p>}
                    
                </div>
            </article>
        );
    }
}

export default Foods;