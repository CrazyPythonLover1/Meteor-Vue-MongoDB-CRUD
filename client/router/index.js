import Vue from 'vue'
import Router from 'vue-router'
import AddStudent from '../views/AddStudent.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/addStudent',
            name: 'AddStudent',
            component: AddStudent
        },
        {
          path: '/addSubject',
          name: 'AddSubject',
          component: () => import('../views/AddSubject.vue')
        },
        {
            path: '/studentList',
            name: 'StudentList',
            component: () => import('../views/StudentList.vue')
          },{
            path: '/subjectList',
            name: 'SubjectList',
            component: () => import('../views/SubjectList.vue')
          },
    ]
})