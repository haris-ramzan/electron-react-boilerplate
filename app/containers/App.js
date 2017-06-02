// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import '../layouts/system.css';
import SystemNav from '../components/SystemNav';
import 'bluerain-bootstrap-theme/dist/css/layouts/system-layout.css'; // color and layout of system nav


export default class App extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <div className="system-layout">
        <SystemNav>
          <div className="system-body">
            {this.props.children}
          </div>
        </SystemNav>
      </div>
    );
  }
}
