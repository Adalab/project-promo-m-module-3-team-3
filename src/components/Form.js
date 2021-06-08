import React from 'react';
import '../styles/App.scss';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Collapsable from './Collapsable';

class Form extends React.Component {
  render() {
    return (
      <form className='cards_main--form'>
        <Collapsable
          title='Diseña'
          iconClass='fa-object-ungroup'
          children={<Design />}
          open
        />
        <Collapsable
          title='rellena'
          iconClass='fa-keyboard'
          children={<Fill handleChange={this.props.handleChange} />}
        />
        <Collapsable
          title='comparte'
          iconClass='fas fa-share-alt'
          children={<Share />}
        />
      </form>
    );
  }
}

export default Form;
