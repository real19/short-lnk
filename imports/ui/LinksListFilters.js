import React from 'react';
import { Session } from 'meteor/session';




export default class LinksListFilters extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showVisible: true
        }
    }


    componentDidMount() {

        this.linksFilterTracker = Tracker.autorun(() => {
           
         let showVisible = Session.get('showVisible');

        this.setState({ showVisible });
        
        });
    }


    componentWillUnmount() {
      
        console.log('componentWillUnmount LinksList');
       
        this.linksFilterTracker.stop();
    }


    render() {
        return (
            <div>
                  <label className="checkbox">
          <input className="checkbox__box" type="checkbox" checked={!this.state.showVisible} type="checkbox" onChange={(e) => {

                        console.log(e.target.checked);

                        Session.set('showVisible', !e.target.checked);

                    }}></input>
                    show hidden links
                </label>
            </div>

        )
    }

}