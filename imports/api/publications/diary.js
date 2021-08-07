import { Meteor } from 'meteor/meteor';
import {DiaryCollection} from '../collections/Diary';

Meteor.publish('diarys', function publishTasks() {
    return DiaryCollection.find({});
});