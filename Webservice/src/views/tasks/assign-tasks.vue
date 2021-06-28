<template lang="html">
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-input
        class="task-description"
        v-model="text"
        placeholder="Enter task description..."
      ></b-form-input>
      <b-form-datepicker
        v-model="due_date"
        class="mb-2 due-date"
      ></b-form-datepicker>
      <b-form-select
        v-model="priority"
        :options="priority_options"
        class="mb-2 priority"
      ></b-form-select>
      <b-dropdown id="dropdown-form" :text="assignee" ref="dropdown" class="m-2">
        <b-dropdown-item href="#">Luise Müller</b-dropdown-item>
        <b-dropdown-item href="#">Mario Test</b-dropdown-item>
      </b-dropdown>
      <b-dropdown id="dropdown-form" :text="patients" ref="dropdown" class="m-2">
        <b-dropdown-item href="#">Mario Mitz</b-dropdown-item>
        <b-dropdown-item href="#">Jon Doe</b-dropdown-item>
      </b-dropdown>
      <b-button variant="success">Create Task</b-button>
    </b-form>

  </div>
</template>

<script lang="js">
export default {
  name: 'assign-tasks',
  components: {

  },
  data: function () {
    return {
      text: '',
      patients: 'Select Patient',
      assignee: 'You',
      priority: 'Medium',
      due_date: null,
      priority_options: [
        'Low', 'Medium', 'High'
      ]
    }
  },
  methods: {
    onSubmit: function () {
      console.log(this)
    },
    onReset: function () {

    }
  }
}
</script>

<style scoped lang="scss">
  .chartjs {}
</style>
