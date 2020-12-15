5  Create Task componentsimple-todos/imports/ui/Task.vue »
<template>
  <li>{{ this.task.text }}</li>
</template>
 
<script>
export default {
  props: ["task"],
  data() {
    return {};
  }
};
</script>