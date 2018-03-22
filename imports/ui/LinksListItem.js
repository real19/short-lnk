import React from 'react';
import Clipboard from 'clipboard';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';

// let momentNow = moment(0).fromNow();


// console.log(momentNow);


export default class LinksListItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      justCopied: false,
    }
  }


  componentDidMount() {
    this.clipboard = new Clipboard(this.refs.copy)
    this.clipboard.on('success', () => {

      this.setState({
        justCopied: true
      })

      setTimeout(() => {

        this.setState({
          justCopied: false
        })

      }, 1000)

      // alert('It worked! :) masha Allah!!');
    }).on('error', () => {
      alert('It didnt work! :( ');

    });

  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  renderButtonText() {
    return this.state.justCopied ? 'Copied' : 'Copy'
  }

  renderVisiblityText() {
    return this.props.visible ? 'Hide' : 'Unhide'
  }

  changeVisibilityButtonClicked() {

    const link = this.props;

    console.log("visibility button was clicked! ")

    Meteor.call('links.setVisibility', link._id, !link.visible)


  }

  renderStats() {
    let link = this.props;

    let visitMessage = link.visitedCount === 1 ? 'visit' : 'visits';

    var visitedMessage = null


    if (typeof link.lastVisitedAt === 'number') {

      console.log("a number found")

      let time = moment(link.lastVisitedAt).fromNow();

      visitedMessage = `(visited ${time})`
    }

    return (<p className="item__message">{link.visitedCount} {visitMessage} {visitedMessage}</p>)
  }

  render() {

    const link = this.props;

    console.log('link is', link)

    return (

      <div className="item">
        <h2>{link.shortUrl}</h2>
        <p className="item__message" key={link._id}>{link.url}</p>
        {this.renderStats()}
        <a className="button button--pill button--link" href = {link.shortUrl} target = "_blank"> Visit </a>
        <button className="button button--pill" ref="copy" data-clipboard-text={this.props.shortUrl}>{this.renderButtonText()}</button>
        <button className="button button--pill" onClick={this.changeVisibilityButtonClicked.bind(this)}>{this.renderVisiblityText()}</button>

      </div>
    );
  }
};

const stringTypeRequired = PropTypes.string.isRequired

LinksListItem.protoTypes = {
  _id: stringTypeRequired,
  url: stringTypeRequired,
  userId: stringTypeRequired,
  visible: PropTypes.bool.isRequired,
  shortUrl: stringTypeRequired,
  visitedCount: PropTypes.number.isRequired,
  lastVistedAt: PropTypes.number
}