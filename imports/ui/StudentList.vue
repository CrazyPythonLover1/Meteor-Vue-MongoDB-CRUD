5  Create Task componentsimple-todos/imports/ui/Task.vue »
<template>
  <li>{{ student.name }}  <button class="delete" @click="removeItem"  >  X </button></li>
</template>
 
<script>

import { Students } from "../api/students.js";
console.log(Students)
import { Meteor } from 'meteor/meteor';

export default {
  props: ["student"],
  data() {
    return {};
  },
  methods: {
    removeItem() {
      Meteor.call('deleteStudent', this.student, (error, result) => {
          if (error) {
             console.log("something went wrong", error);
          } else {
            console.info(result);
          }
        } )
    }
    // removeItem() {
    //   Students.remove(this.student._id)
    // }
  }
};
</script>

<style scoped>
.delete{
  margin-left: auto;
}
</style>