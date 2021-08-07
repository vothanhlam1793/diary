import { check } from 'meteor/check';
import {DiaryCollection} from '../collections/Diary'

Meteor.methods({
    'diary.insert'(obj){
        check(obj, Object);
        DiaryCollection.insert(obj);
    }
});