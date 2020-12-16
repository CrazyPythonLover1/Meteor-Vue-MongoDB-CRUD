<template>
  <div className="container">
    
    <Header/>
    <router-view />
    <ul>
      <!-- <StudentList
        v-for="student in students"
        v-bind:key="student._id"
        v-bind:student="student"
      /> -->
      <!-- <form className="new-task" @submit.prevent="handleSubmit">
        <input
          type="text"
          placeholder="Type to add new tasks"
          v-model="newTask.text"
        />
      </form> -->
    </ul>
    
  </div>
</template>
 
<script>
import Vue from "vue";
import StudentList from "./StudentList.vue";
// import AddStudents from "./AddStudents.vue";
import { Students } from "../api/students.js";
import { Meteor } from 'meteor/meteor';

import Header from '../../client/components/layout/Header'
 
export default {
  components: {
    StudentList,
    Header
  },
  data() {
    return {
        newTask: {
          text: "",
        }
    };
  },
  methods: {
      handleSubmit(event) {
        Meteor.call('createdStudent', {
        text: this.newTask.text,
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

<style  scoped>
input{
  height: 60px;
}
</style>