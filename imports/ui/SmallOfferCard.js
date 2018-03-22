import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { browserHistory } from 'react-router';

export default class SmallOfferCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();
    browserHistory.replace('/plans');
    
  }
  render() {
    return (
      <div className="boxed-view__box">

       <img style={{width:375}} src="http://www.hustlermoneyblog.com/wp-content/uploads/2017/07/Starbucks-Double-Star-Day.png" />
     
        {/* <Link to="/plans">Get started</Link> */}

     <button className="button button--gold" onClick={this.onSubmit.bind(this)}>Let's get started</button>
        
           </div>
    );
  }
}
