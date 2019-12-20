import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

export default function CharacterCard(props) {
  return <span>
    <div>
  <Card>
      <CardBody>
          <CardTitle><h2>Name:{props.x.name}</h2></CardTitle>
          <CardImg top width="100%" src={props.image} alt="Card image" />
              <CardSubtitle>
                  <h3>Status: {props.x.status} | Species:{props.x.species} | Gender: {props.x.gender}</h3> 
              </CardSubtitle>       
      </CardBody>
  </Card>
</div></span>;
}
