import React, { Component } from 'react';

import DishDetail from './DishdetailComponent';
import {
    Card, CardImg, CardImgOverlay,
    CardTitle
} from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    showDetails() {
        if (this.state.selectedDish != null)
            //Assigment 1: Task 1
            return (
                <DishDetail selectedDish={this.state.selectedDish}></DishDetail>
            )
        else
            return (
                <div></div>
            )
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                        onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div>
                    {this.showDetails()}
                </div>
            </div>
        );
    }
}
export default Menu;