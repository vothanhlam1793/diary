import { check } from 'meteor/check';
import {TasksCollection} from '../collections/Tasks'

Meteor.methods({
    'tasks.insert'(obj){
        check(obj, Object);
        TasksCollection.insert(obj);
    }
});