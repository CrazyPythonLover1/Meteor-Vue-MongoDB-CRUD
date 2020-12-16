import { Meteor } from "meteor/meteor";
import { Mongo } from 'meteor/mongo';

export const Students = new Mongo.Collection('students')

if (Meteor.isServer) {
    Meteor.publish('allStudents', () => {
        return Students.find({ }); // find({price: { $gte: 100 }})
    })
}

Meteor.methods({
    createdStudent(student) {
        return Students.insert(student);
    },
    deleteStudent(student) {
        return Students.remove({_id: student._id});
    }
}) 

