import React, { Component } from 'react';
import '../styles/App.scss';

class Collapsable extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    /*let initialOpen = false;

    if (this.props.open === true) {
      initialOpen = true;
    }

    this.state = {
      isOpen: initialOpen,
    };*/

    // otra opción

    /*let initialOpen;
    if (this.props.open === true) {
      initialOpen = true;
    } else {
      initialOpen = false;
    }*/

    this.state = {
      isOpen: this.props.open === true ? true : false,
    };
  }

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    const newClass = this.state.isOpen ? 'showContent' : 'hideContent';
    return (
      <div className={`${this.props.nameClass} ${newClass}`}>
        <div className='collapsible' onClick={this.handleClick}>
          <i className={`far ${this.props.iconClass} collapsible__icon`}></i>
          <div className='collapsible__title'>{this.props.title}</div>
          <i
            className={`fas fa-chevron-down arrow ${this.props.arrowClass}`}
          ></i>
        </div>
        <div className='content'>{this.props.children}</div>
      </div>
    );
  }
}

export default Collapsable;
