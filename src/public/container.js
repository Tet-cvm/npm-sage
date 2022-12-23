import React from 'react';

export class Container extends React.Component {
  constructor() {
    super(props)
    this.state = {
      name: 'lxm'
    }
  }
  componentDidMount() {
    console.log(this.state.name, '@@ name')
  }
  render() {
    return React.createElement(
      'div',
      {class: 'container'},
      '这是容器'
    )
  }
}