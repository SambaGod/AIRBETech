<template lang="html">
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-input
        class="task-description"
        v-model="task.text"
        placeholder="Enter task description..."
      ></b-form-input>
      <b-form-datepicker
        v-model="due_date"
        class="p-2 due-date float-left"
      ></b-form-datepicker>
       <b-form-timepicker v-model="task.due_time" class="p-2 float-right" locale="de"></b-form-timepicker>
      <b-form-select
        v-model="task.priority"
        :options="data.priority_options"
        class="mb-2 priority"
      ></b-form-select>
      <b-dropdown id="dropdown-form" :text="task.assignee" ref="dropdown" class="m-2">
        <b-dropdown-item href="#">Luise Müller</b-dropdown-item>
        <b-dropdown-item href="#">Mario Test</b-dropdown-item>
      </b-dropdown>
      <b-dropdown id="dropdown-form" :text="task.patient" ref="dropdown" class="m-2">
        <b-dropdown-item href="#">Mario Mitz</b-dropdown-item>
        <b-dropdown-item href="#">Jon Doe</b-dropdown-item>
      </b-dropdown>
      <b-button class="float-right" variant="success">Create Task</b-button>
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
      task: {
        text: '',
        patient: 'Select Patient',
        assignee: 'You',
        priority: 'Medium',
        due_date: null,
        due_time: null
      },
      data: {
        priority_options: [
          'Low', 'Medium', 'High'
        ],
        assignees: [
          'Jon Doe'
        ],
        patients: [
          'Jan Freund'
        ]
      }
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
