import React from 'react';

export class Main extends React.Component {
  render() {
    return (
      <main className={`w-full flex gap-20  `}>{this.props.children}</main>
    );
  }
}
