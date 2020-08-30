import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    //Assigment 1: Task 2
    renderDish() {
        return (

            <Card>
                <CardImg top src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                <CardBody>
                    <CardTitle>{this.props.selectedDish.name}</CardTitle>
                    <CardText>{this.props.selectedDish.description}</CardText>
                </CardBody>
            </Card>

        );
    }
    //Assigment 1: Task 3
    renderComment() {
        const DishComments = this.props.selectedDish.comments.map((comment) => {
            return (
                <ul class="list-unstyled" key={this.props.selectedDish.id}>
                    <li>{comment.comment}</li>
                    <li><h6>{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</h6></li>
                </ul>
            );
        });

        return (
            <div>{DishComments}</div>
        );
    }


    render() {
        if(this.props.selectedDish != null)
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish()}
                        </div>
                        <div className="col-12 col-md-5">
                            <h4>Comments</h4>
                            {this.renderComment()}
                        </div>
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            )
    }
}

export default DishDetail;