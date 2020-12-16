<template>
    <div>
        <h1> Add Student </h1>
        <form className="form" @submit.prevent="handleSubmit">
        <label name ="name" > Name: </label>
        <input
          type="text"
          placeholder="Your name"
          v-model="newTask.name"
        />
        <label name ="email" > Email:</label>
        <input
          type="text"
          placeholder="Your Email Adress "
          v-model="newTask.email"
        />
        <label name =" phone " > Phone:</label>
        <input
          type="text"
          placeholder="Your phone Number"
          v-model="newTask.phone"
        />
        <label name ="birth" > Date of Birth:</label>
        <input
          type="text"
          placeholder="Your date of birth"
          v-model="newTask.birth"
        />
        <label class ="subject" >Choose subject:</label> 
        <select v-model="newTask.subjects" multiple = true >
            <option v-for="subject in subjects" v-bind:key="subject._id" > {{subject.name}} </option>
        </select>
        <br>
        <input type="submit" value="Submit" class="btn">
      </form>
    </div>
</template>

<script>
import { Subjects } from "../../imports/api/students";

import { Meteor } from 'meteor/meteor';

export default {
    data() {
    return {
        newTask: {
            name: "",
            email: "",
            phone: "",
            birth: "",
            subjects: [],
            }
        };
    },
    methods: {
      handleSubmit(event) {
        Meteor.call('createdStudent', {
        name: this.newTask.name,
        email: this.newTask.email,
        phone: this.newTask.phone,
        birth: this.newTask.birth,
        subjects: this.newTask.subjects,
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
    // $subscribe: {
    //   allStudents: [],
    // },
    subjects() {
      return Subjects.find({}).fetch();
    },
  },
}
</script>

<style  scoped>
form{
    width: 600px !important;
    background: #f1f1f1d5;
    margin: 10px auto;
    padding: 30px 20px;
    border-radius:  20px;
}
label{
    display: inline-block;
    padding: 10px;
    color: #333;
    font-weight: bold;
}
input{
  width: 98%;
  height: 40px;
  outline: 0;
  padding: 20px;
  background-color: #f7f7f79e;
  border-radius:  5px;
}
.subject{
    margin-bottom: 40px;
}
select{
    padding: 0px 0px;
    outline: 0;
    margin: 20px 0 -50px 20px
}

option{
    padding: 3px 20px;
    background: inherit;
}

.btn{
    width: 150px;
    height: 45px;
    padding: 0px 20px;
    background:  linear-gradient(45deg, #FFDDDD 0%, #060072 100%), linear-gradient(127.43deg, #00FFFF 0%, #FF4444 100%), radial-gradient(100.22% 100% at 70.57% 0%, #FF0000 0%, #00FFE0 100%), linear-gradient(127.43deg, #B7D500 0%, #3300FF 100%);;
    color: white;
    font-weight: bold;
    font-size: 18px;
    margin: 20px 10px;
}
</style>