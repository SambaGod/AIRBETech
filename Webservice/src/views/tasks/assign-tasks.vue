<template lang="html">
  <div>
    <h3>Create Task</h3>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-input
        class="task-description"
        v-model="task.text"
        placeholder="Enter task description..."
      ></b-form-input>
      <div class="advanced-container pt-1">
        <div class="row">
          <div class="col-2">
            <b-form-datepicker
              v-model="due_date"
              class="p-1 due-date"
            ></b-form-datepicker>
          </div>
          <div class="col-2">
            <b-form-timepicker v-model="task.due_time" class="p-1" locale="de"></b-form-timepicker>
          </div>
          <div class="col-2">
            <multiselect v-model="task.priority" placeholder="Select Priority" :options="data.priority_options">
            </multiselect>
          </div>
          <div class="col-2">
            <multiselect v-model="task.assignee" placeholder="Select Assignee" label="name" track-by="name" :options="data.assignees" :select-label="group" :show-labels="false">
              <template slot="option" slot-scope="props">
                <div class="option__desc"><span class="option__title">{{ props.option.name }}</span><span class="option__small">{{ props.option.group }}</span></div>
              </template>
            </multiselect>
          </div>
          <div class="col-2">
            <multiselect v-model="task.patient" placeholder="Select Patient" :options="data.patients">
            </multiselect>
          </div>
          <div class="col-2">
            <b-button type="submit" variant="success" class="w-100 h-100">Create Task</b-button>
          </div>
        </div>
      </div>
      <div class="float-right p-2">
        <b-button variant="">Load</b-button>
        <b-button variant="">Save Template</b-button>
      </div>
    </b-form>

  </div>
</template>

<script lang="js">
import Multiselect from 'vue-multiselect'

export default {
  name: 'assign-tasks',
  components: {
    Multiselect
  },
  data: function () {
    return {
      task: {
        text: '',
        patient: null,
        assignee: { name: 'John Doe', 'group': 'Doctor' },
        priority: 'Medium',
        due_date: null,
        due_time: null
      },
      data: {
        priority_options: [
          'Low', 'Medium', 'High'
        ],
        assignees: [
          { name: 'John Doe', 'group': 'Doctor' },
          { name: 'Marry Linn', 'group': 'Doctor' },
          { name: 'Noah James', 'group': 'Nurse' },
          { name: 'Emma O\'Neill', 'group': 'Nurse' }
        ],
        patients: [
          'Sophie Evans',
          'Jessica Jones',
          'Oscar Brown',
          'Michael Smith'
        ]
      }
    }
  },
  methods: {
    onSubmit: function (event) {
      event.preventDefault()
      // TODO: Show notification that task was created

      this.onReset()
    },
    onReset: function () {
      this.task = {
        text: '',
        patient: null,
        assignee: { name: 'John Doe', 'group': 'Doctor' },
        priority: 'Medium',
        due_date: null,
        due_time: null
      }
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss">
  .option__small {
    display: inline-block;
    padding: .25em;
    border-radius: .25em;
    background: #ccc;
    float: right;
  }
  .b-form-btn-label-control > label {
    display: flex !important;
    align-items: center !important;
  }
</style>
