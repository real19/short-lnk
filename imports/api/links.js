import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import shortid from 'shortid';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
  Meteor.publish('links', function () {
    return Links.find({ userId: this.userId });
  });
}


Meteor.methods({

// define methods here

'links.insert'(url){

  if (!this.userId){
    throw new Meteor.Error('not-authorized');  
  }


  new SimpleSchema({
    url: {
      type: String,
      label:'Your link',
      regEx: SimpleSchema.RegEx.Url
    }
  }).validate({ url });


  Links.insert({
    _id:shortid.generate(),
    url, 
    userId:this.userId,
    visible:true, 
    lastVisistedAt:null,
    visitedCount:0
  });
},

'links.redirect'(req, res, next){

  console.log('calling method!')

  res.statusCode = 302

  res.setHeader('Location', 'http://www.submission.ws' );

  res.end()

}, 

'links.setVisibility'(_id, visiblity){

  if (!this.userId){
    throw new Meteor.Error('not-authorized');  
  }

  new SimpleSchema({
    _id: {
      type: String,
      min:1,
      label:'Your link',
      regEx: SimpleSchema.RegEx.String
    }
  }).validate({ _id });

  new SimpleSchema({
    visiblity: {
      type: Boolean,
      label:'Your link',
      regEx: SimpleSchema.RegEx.Boolean
    }
  }).validate({ visiblity });


  Links.update({_id,  userId:this.userId}, {$set:{visible:visiblity}})


}, 
'links.trackVisit'(_id){

 

  let date = new Date().getTime();

  console.log('date is ' + date);

  new SimpleSchema({
    _id: {
      type: String,
      min:1,
      label:'Your link',
      regEx: SimpleSchema.RegEx.String
    }
  }).validate({ _id });


  Links.update({_id}, 
    {
      $set:{
        lastVisitedAt:date
      },
      $inc:{
        visitedCount:1
      }
    } )


}

});