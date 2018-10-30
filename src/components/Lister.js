import React from 'react';
import { List } from 'semantic-ui-react';

const Lister = ({listItem}) => (
  <List bulleted>
    <List.Item>{listItem}</List.Item>
  </List>
)

export default Lister;