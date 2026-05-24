import React from 'react'
import { MainProps } from '../types'
export class Main extends React.Component<MainProps> {

  render() {
    return (
      <main className={`w-full flex gap-6 items-center justify-center`}>
        {this.props.children}
      </main>
    )
  }
}
