<template>
    <div>
        <h1> Add Subject </h1>
        <form className="new-task" @submit.prevent="handleSubmit">
        <input
          type="text"
          placeholder="Type to add new Subject"
          v-model="subjectData.name"
        />
        
        <input type="submit" value="submit" class="btn">
      </form>
    </div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
    export default {
         data() {
        return {
            subjectData: {
                name: "",
                // student: [],
                }
            };
        },
        methods: {
      handleSubmit(event) {
        Meteor.call('createdSubject', {
        name: this.subjectData.name,
        // student: this.subjectData.student,
        createdAt: new Date() // current time
      }, (error, result) => {
          if (error) {
             console.log("something went wrong", error);
          } else {
            console.info(result);
          }
        })
 
      // Clear form
      this.subjectData = "";
    },
    
  },
    }
</script>

<style  scoped>
input{
  height: 60px;
}
</style>