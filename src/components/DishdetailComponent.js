import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            DishToDisplay: this.props.selectedDish,
            CommentsToDisplay: this.props.selectedDish.comments
        }
    }

    //Assigment 1: Task 2
    renderDish(DishToDisplay) {
        return (

            <Card>
                <CardImg top src={DishToDisplay.image} alt={DishToDisplay.name} />
                <CardBody>
                    <CardTitle>{DishToDisplay.name}</CardTitle>
                    <CardText>{DishToDisplay.description}</CardText>
                </CardBody>
            </Card>

        );
    }
    //Assigment 1: Task 3
    renderComment(CommentsToDisplay) {
        const DishComments = CommentsToDisplay.map((comment) => {
            return (
                <ul class="list-unstyled">
                    <li>{comment.comment}</li>
                    <li><h6>{comment.author},{comment.date}</h6></li>
                </ul>
            );
        });

        return (
            <div>{DishComments}</div>
        );
    }


    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.DishToDisplay)}
                </div>
                <div className="col-12 col-md-5">
                    <h4>Comments</h4>
                    {this.renderComment(this.state.CommentsToDisplay)}
                </div>
            </div>
        );
    }
}

export default DishDetail;