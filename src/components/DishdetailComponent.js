import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';



//Assigment 1: Task 2
function RenderDish({ selectedDish }) {
    return (

        <Card>
            <CardImg top src={selectedDish.image} alt={selectedDish.name} />
            <CardBody>
                <CardTitle>{selectedDish.name}</CardTitle>
                <CardText>{selectedDish.description}</CardText>
            </CardBody>
        </Card>

    );
}
//Assigment 1: Task 3
function RenderComments({ comments }, { key }) {
    const DishComments = comments.map((comment) => {
        return (
            <div>
                <ul class="list-unstyled" key={key}>
                    <li>{comment.comment}</li>
                    <li><h6>{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</h6></li>
                </ul>
            </div>
        );
    });

    return (
        <div>{DishComments}</div>
    );
}


const DishDetail = (props) => {
    if (props.selectedDish != null)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish selectedDish={props.selectedDish}></RenderDish>
                    </div>
                    <div className="col-12 col-md-5">
                        <h4>Comments</h4>
                        <RenderComments comments={props.selectedDish.comments} key={props.selectedDish.id}></RenderComments>
                    </div>
                </div>
            </div>
        );
    else
        return (
            <div></div>
        )
}


export default DishDetail;