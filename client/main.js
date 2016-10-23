import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var'
import '../imports/startup/accounts-config.js'
import './main.html';

Template.app.events({
  'click .logout'(event) {
    Meteor.logout();
  }
});
