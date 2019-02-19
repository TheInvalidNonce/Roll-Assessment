import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { ListGroup, NavItem, Nav } from 'react-bootstrap';
import _ from 'lodash'


const TokenListItem = props => {
  let listItems = props.tokens
    .sort(( a, b) => a.name.localeCompare(b.name)) // sort alphabetically
    .filter(el => el.name !== '')// filter any empty names

    listItems = _.uniqBy(listItems, 'name') // filter out duplicate tokens
      .map( (el, index) => {
        return <ListGroup.Item key={index}>
                  <Nav.Link href={`tokens/${index}`}>{el.name}</Nav.Link>
               </ListGroup.Item>
      })

  return (
    <ListGroup>
      {listItems}
    </ListGroup>
  )
    
}

export default TokenListItem;

TokenListItem.propTypes = {
  tokens: PropTypes.array,
}