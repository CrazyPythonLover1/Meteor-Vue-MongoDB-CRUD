<template>
  <div>
    <h1>Subject List</h1>
    
    <table class="styled-table">
      <tr>
        <th>Name</th>
        <th> Student </th>
        <th> Delete </th>
      </tr>
      <tr v-for="subject in subjects" v-bind:key="subject._id">
        <td>{{ subject.name }}</td>
        <td>{{ subject.email }}</td>
        <td  @click="removeItem(subject)"> <i class="mdi mdi-delete"></i> </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { Subjects } from "../../imports/api/students";
import { Meteor } from "meteor/meteor";
export default {
  data() {
    return {
      studentList: [],
    };
  },
   methods: {
    removeItem(subject) {
      Meteor.call('deleteSubject', subject, (error, result) => {
          if (error) {
             console.log("something went wrong", error);
          } else {
            console.info(result);
          }
        } )
    }
    
  },
  meteor: {
    
    subjects() {
      return Subjects.find({}).fetch();
    },
  },
};
</script>

<style scoped>
.styled-table {
    border-collapse: collapse;
    margin: 25px auto;
    padding: 30px 0 ;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 600px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 0.542);
    border-radius: 10px;
}

.styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
    text-align:center;
}
.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}
i{
    cursor: pointer;
}
</style>
