import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

export default function CharacterCard(props) {
  return <span>
    <div>
  <Card>
      <CardBody className="card-body">
          <CardTitle><h2>Name:{props.x.name}</h2></CardTitle>
              <CardSubtitle>
                  <h3>Status: {props.x.status}</h3> 
              </CardSubtitle>
              <CardSubtitle>
                  <h3>Species:{props.x.species}</h3> 
              </CardSubtitle> 
              <CardSubtitle>
                  <h3>Gender: {props.x.gender}</h3> 
              </CardSubtitle>        
      </CardBody>
  </Card>
</div></span>;
}
