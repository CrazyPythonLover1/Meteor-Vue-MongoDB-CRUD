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
    </ul>
  </div>
</template>
 
<script>
import Vue from "vue";
import Task from "./Task.vue";
import { Students } from "../api/students.js"
 
export default {
  components: {
    Task
  },
  data() {
    return {};
  },
  methods: {},
  meteor: {
      students() {
          return Students.find({}).fetch();
      }
  }
};
</script>