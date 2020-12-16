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
form{
    width: 600px !important;
    background: #f1f1f1d5;
    margin: 10px auto;
    padding: 30px 20px;
    border-radius:  20px;
}
label{
    padding: 0 20px;
    color: #333;
    font-weight: bold;
}
input{
  width: 98%;
  height: 60px;
  outline: 0;
  padding: 20px;
  background-color: #f7f7f79e;
  border-radius:  10px;
}
select{
    padding: 5px 20px
}

.btn{
    width: 150px;
    height: 45px;
    padding: 0px 20px;
    background:  linear-gradient(45deg, #FFDDDD 0%, #060072 100%), linear-gradient(127.43deg, #00FFFF 0%, #FF4444 100%), radial-gradient(100.22% 100% at 70.57% 0%, #FF0000 0%, #00FFE0 100%), linear-gradient(127.43deg, #B7D500 0%, #3300FF 100%);;
    color: white;
    font-weight: bold;
    font-size: 18px;
    margin: 20px 20px;
}
</style>