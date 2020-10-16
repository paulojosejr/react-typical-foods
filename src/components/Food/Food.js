import React, { Component } from 'react';
import './Food.scss'

class Foods extends Component {
    state = {
        showInfo: false
    }
    handleinfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    render() {
        const { id, food, img, country, info } = this.props.food
        const { removeFood } = this.props
        return (
            <article className="food">
                <div className="img-container">
                    <img
                        src={img}
                        alt=""
                    />
                    <span className="close-btn" onClick={() => { removeFood(id) }}>
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="food-info">
                    <h3>{food}</h3>
                    <h4>{country}</h4>
                    <h5>info{""}
                        <span onClick={this.handleinfo}>
                            <i className="fas fa-caret-square-down" />
                        </span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p>}

                </div>
            </article>
        );
    }
}

export default Foods;