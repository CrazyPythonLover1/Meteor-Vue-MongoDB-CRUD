<template>
  <div>
    <h1 class="heading">Student List</h1>
    
    <table class="styled-table">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Date of Birth</th>
        <th>Subjects</th>
        <th> delete</th>
      </tr>
      <tr v-for="student in students" v-bind:key="student._id">
        <td>{{ student.name }}</td>
        <td>{{ student.email }}</td>
        <td>{{ student.phone }}</td>
        <td>{{ student.birth }}</td>
        <td>{{ student.subject }}</td>
        <td @click="removeItem(student)"> <i   class="mdi mdi-delete"></i> </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { Students } from "../../imports/api/students";
import { Meteor } from "meteor/meteor";
export default {
  data() {
    return {
      studentList: [],
    };
  },
  methods: {
    removeItem(student) {
      Meteor.call('deleteStudent', student, (error, result) => {
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
  },
  meteor: {
    // $subscribe: {
    //   allStudents: [],
    // },
    students() {
      return Students.find({}).fetch();
    },
  },
};
</script>

<style scoped>

.heading{
    text-align: center !important;
}

.styled-table {
    border-collapse: collapse;
    margin: 25px auto;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 600px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
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
