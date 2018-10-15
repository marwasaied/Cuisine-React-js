import React, { Component } from 'react';
import Nav from './Components/Nav.js';
import BottomLeftBlock from './Components/BottomLeftBlock.js';
import TopLeftBlock from './Components/TopLeftBlock.js';
import Search from './Components/Search.js';
import Menu from './Components/Menu.js';
import SubMenu from './Components/SubMenu.js';
import Squres from './Components/Squres.js';

import './css/style.css';


class App extends Component {
  render() {
    return (
      <div>

        <Nav/>

        <div className="row roww">

          <div className="col-lg-5 left_block">
            <TopLeftBlock/>
            <BottomLeftBlock/>
          </div>

          <div className="col-lg-7 right_block">
            <Search/>
            <Menu/>
            <SubMenu/>
            <Squres/>
          </div>

        </div>

      </div>

    );
  }
}

export default App;
