<template lang="html">
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-input
        class="task-description"
        v-model="task.text"
        placeholder="Enter task description..."
      ></b-form-input>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <b-form-datepicker
              v-model="due_date"
              class="p-1 due-date"
            ></b-form-datepicker>
          </div>
          <div class="col-sm">
            <b-form-timepicker v-model="task.due_time" class="p-1" locale="de"></b-form-timepicker>
          </div>
          <div class="col-sm">
            <b-form-select
              v-model="task.priority"
              :options="data.priority_options"
              class="mb-2 priority"
            ></b-form-select>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <b-dropdown id="dropdown-form" :text="task.assignee" ref="dropdown" class="m-2">
              <b-dropdown-item href="#">Luise Müller</b-dropdown-item>
              <b-dropdown-item href="#">Mario Test</b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="col-sm">
            <b-dropdown id="dropdown-form" :text="task.patient" ref="dropdown" class="m-2">
              <b-dropdown-item href="#">Mario Mitz</b-dropdown-item>
              <b-dropdown-item href="#">Jon Doe</b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="col-sm">
            <b-button variant="success">Create Task</b-button>
          </div>
        </div>
      </div>
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
