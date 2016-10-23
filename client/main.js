import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var'
import '../imports/startup/accounts-config.js'
import './main.html';

Template.app.events({
  'click .logout'(event) {
    Meteor.logout();
  }
});

Template.app.helpers({
  getAllUsers: function () {
    return Meteor.users.findOne(
      {_id: {$ne: Meteor.userId()}}
    );
  }
});

Template.profile.events({
  'submit .edit-profile'(event) {

    event.preventDefault();

    Meteor.users.update(Meteor.userId(), {
      $set: {
        'profile.description': event.target.description.value
      }
    });
  }
});
