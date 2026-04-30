import React from 'react';
interface MainProps {
  children?: React.ReactNode;
}
export class Main extends React.Component<MainProps> {

  render() {
    return (
      <main className={`w-full flex gap-6 justify-center `}>
        {this.props.children}
      </main>
    );
  }
}
