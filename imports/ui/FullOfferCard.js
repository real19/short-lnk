import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
// import star from './images/star.png';
// Tell Webpack this JS file uses this image

export default class FullOfferCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  // onSubmit(e) {
  //   e.preventDefault();

  //   let email = this.refs.email.value.trim();
  //   let password = this.refs.password.value.trim();

  //   if (password.length < 9) {
  //     return this.setState({error: 'Password must be more than 8 characters long'});
  //   }

  //   Accounts.createUser({email, password}, (err) => {
  //     if (err) {
  //       this.setState({error: err.reason});
  //     } else {
  //       this.setState({error: ''});
  //     }
  //   });
  // }
  render() {

    // console.log('star is ', star);

    return (
       <div className="offerBox">
      <br/>
      <img style={{width:50}} src="http://artforaids.org/wp-content/uploads/2016/08/gold_star.png" />
      
        <h1>Collect up to 150 Bonus Stars now </h1>
        <button className="button button--gold"> Join now</button>
        {/* <img src={star} alt="star" /> */}
      

        <h2 className="red-h1">More sips, more stars</h2>
          <div className="offerRow" > 
            <img style={{width:40}} src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/48x48/plain/calendar_1.png" />
            <h1>  day remaining</h1>
            </div>

        <h3>How to play</h3>
        
        
        <ul>
        
          <li className = "offerli" >★ Make 5 purchases after 2 pm, earn 150 bonus stars.</li>
          <li className = "offerli" >★ Make 4 purchases after 2 pm, earn 75 bonus stars.</li>
          <li className = "offerli" >★ Make 3 purchases after 2 pm, earn 50 bonus stars.</li>
        </ul>
        
          
        <p  className="red-h1">At participating Starbucks stores. Pay with your Starbucks app/ registered card.Bonus stars will be loaded by xx</p>

        <h3> From 5/1/18 to 5/7/18</h3>

        {/* {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)} noValidate>
          <input type="email" ref="email" name="email" placeholder="Email"/>
          <input type="password" ref="password" name="password" placeholder="Password"/>
          <button>Create Account</button>
        </form>

        <Link to="/">Already have an account?</Link> */}
      </div>
    );
  }
}
