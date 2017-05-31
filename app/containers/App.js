// @flow
import React, { Component } from 'react';
import type { Children } from 'react';

export default class App extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <div className="system-layout">
        <div className="system-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}
