import { Meteor } from 'meteor/meteor';
import { NotesCollection } from '../collections/Notes';

Meteor.publish('notes', function publishNotes() {
  return NotesCollection.find({});
});