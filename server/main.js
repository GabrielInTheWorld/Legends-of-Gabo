import { Meteor } from 'meteor/meteor';

import {Messages} from "../imports/Collections/Messages"

Meteor.startup(() => {
  // code to run on server at startup
  //   var app = express()
  //   // var http = http
  //
  //   app.get('/', (req, res) => {
  //       res.sendFile(__dirname  + '/client/main.html')
  //   })
  //
  //   app.use('/client', express.static(__dirname + '/client'))
  //
  //   app.listen(2000)
    console.log("server")

});
