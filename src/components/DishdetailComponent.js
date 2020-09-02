import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';



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
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.selectedDish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish selectedDish={props.selectedDish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
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