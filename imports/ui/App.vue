<template>
  <div className="container">
    <header>
      <h1>Todo List</h1>
    </header>
    <ul>
      <Task
        v-for="task in students"
        v-bind:key="task._id"
        v-bind:task="task"
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
import { Students } from "../api/students.js"
 
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
      Students.insert({
        text: this.newTask,
        createdAt: new Date() // current time
      });
 
      // Clear form
      this.newTask = "";
    }
  },
  meteor: {
      students() {
          return Students.find({}).fetch();
      }
  }
};
</script>