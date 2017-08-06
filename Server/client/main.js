import { Template } from 'meteor/templating';
import Items  from  '/imports/api/items';
import './main.html';

Template.info.onCreated(function infoOnCreated() {
	Meteor.subscribe('items');
	window.Items  = Items;
});

Template.info.helpers({
  counter() {
    return Items.find().count()
  },
});

Template.info.events({

});
