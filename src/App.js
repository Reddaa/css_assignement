import React, { Component } from 'react';
import Card from './Card/Card'
import {CardList} from './Card/Style'
class App extends Component {
  render() {
    return (
      <div>
          <CardList>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>

          </CardList>
      </div>
    );
  }
}

export default App;
