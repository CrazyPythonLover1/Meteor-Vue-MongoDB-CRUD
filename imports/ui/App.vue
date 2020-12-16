<template>
  <div className="container">
    <header>
      <h1>Todo List</h1>
    </header>
    <ul>
      <Task
        v-for="student in students"
        v-bind:key="student._id"
        v-bind:student="student"
      />
      <form className="new-task" @submit.prevent="handleSubmit">
        <input
          type="text"
          placeholder="Type to add new tasks"
          v-model="newTask"
        />
      </form>
    </ul>
  </div>
</template>
 
<script>
import Vue from "vue";
import Task from "./Task.vue";
import AddStudents from "./AddStudents.vue";
import { Students } from "../api/students.js";
import { Meteor } from 'meteor/meteor';
 
export default {
  components: {
    Task,
    AddStudents
  },
  data() {
    return {
        newTask: ""
    };
  },
  methods: {
      handleSubmit(event) {
        Meteor.call('createdStudent', {
        text: this.newTask,
        createdAt: new Date() // current time
      }, (error, result) => {
          if (error) {
             console.log("something went wrong", error);
          } else {
            console.info(result);
          }
        })
 
      // Clear form
      this.newTask = "";
    },
    
  },
  meteor: {
    $subscribe: {
      allStudents: [],
    },
      students() {
          return Students.find({}).fetch();
      }
  }
};
</script>