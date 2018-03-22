import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import {Links} from '../imports/api/links';
import '../imports/startup/simple-schema-configuration'; 




Meteor.startup(() => {
 

    WebApp.connectHandlers.use((req, res, next) =>{

        console.log('This is my custom middle ware');
        console.log(req.url, req.method, req.headers, req.query);

        let _id = req.url.slice(1);

       let link =  Links.findOne({_id});

       if (link){

        res.statusCode = 302

        res.setHeader('Location', link.url );

        Meteor.call('links.trackVisit', _id);
      
        res.end();

       } else {
           next();
       }

        

    })
   
    
});
