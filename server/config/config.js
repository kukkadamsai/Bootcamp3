//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://kukkadamsai:Meena789@cluster0-lajz8.mongodb.net/test?retryWrites=true&w=majority'//place the URI of your mongo database here.
  }, 
  openCage: {
    key: 'ecbff59a7fcd4254b7961d05689f9056' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};