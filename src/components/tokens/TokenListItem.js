import React from "react";
import PropTypes from "prop-types";
import { ListGroup, Button, Nav } from "react-bootstrap";

const TokenListItem = props => {
  // This maps, sorts, and filters all of items, but I had an issue with mapping the correct URLS to get to the token view pages with this approach
  // let listItems= props.tokens
  // listItems = listItems
  //   .map(el => el[1])
  //   .sort( (a, b) => a.name.localeCompare(b.name))
  //   .filter(el => el.name !== '')

  let listItems = props.tokens.map((el, index) => {
    return (
      <ListGroup.Item key={index}>
        <Nav.Link href={`tokens/${el[0]}`}>{el[1].name}</Nav.Link>
        <Button style={{ display: "inline" }}>Favorite</Button>
      </ListGroup.Item>
    );
  });

  return <ListGroup>{listItems}</ListGroup>;
};

export default TokenListItem;

TokenListItem.propTypes = {
  tokens: PropTypes.array
};
