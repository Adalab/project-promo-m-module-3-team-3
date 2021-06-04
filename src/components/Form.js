import React from 'react';
import '../styles/App.scss';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Collapsable from './Collapsable';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className='js-form cards_main--form'>
        <Collapsable
          nameClass='js-cdesign'
          title='Diseña'
          iconClass='fa-object-ungroup'
          arrowClass='js-arrowD'
          children={<Design />}
        />
        <Collapsable
          nameClass='js-cfill'
          title='rellena'
          iconClass='fa-keyboard'
          arrowClass='js-arrowF'
          children={<Fill />}
        />
        <Collapsable
          nameClass='js-cshare'
          title='comparte'
          iconClass='fas fa-share-alt'
          arrowClass='js-arrowS'
          children={<Share />}
        />
      </form>
    );
  }
}

export default Form;
