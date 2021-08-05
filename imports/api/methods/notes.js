import { check } from 'meteor/check';
import { NotesCollection } from '../collections/Notes'

Meteor.methods({
    'notes.insert'(obj){
        check(obj, Object);
        NotesCollection.insert(obj);
    },
    'notes.remove'(noteId){
        check(noteId, String);
        NotesCollection.remove(noteId);
    },
    'notes.update'(noteId, obj){
        check(noteId, String);
        check(obj, Object);
        NotesCollection.update(noteId, obj);
    },
    'notes.setIsChecked'(noteId, isChecked){
        check(noteId, String)
        check(isChecked, Boolean)
        NotesCollection.update(noteId, {
            $set: {
                isChecked
            }
        })
    }
})