<template lang="html">
  <div>
    <h3>Create Task</h3>
    <b-alert v-model="showDismissibleAlert" variant="success" dismissible>
      Task created successfully!
    </b-alert>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-input
        class="task-description"
        v-model="task.text"
        placeholder="Enter task description..."
      ></b-form-input>
      <div class="advanced-container pt-1">
        <div class="row row-sm-2">
          <div class="col">
            <b-form-datepicker
              v-model="due_date"
              class="p-1 due-date"
            ></b-form-datepicker>
          </div>
          <div class="col">
            <b-form-timepicker v-model="task.due_time" class="p-1" locale="de"></b-form-timepicker>
          </div>
          <div class="col">
            <multiselect v-model="task.priority" placeholder="Select Priority" :options="data.priority_options" :show-labels="false">
            </multiselect>
          </div>
          <div class="col">
            <multiselect v-model="task.assignee" placeholder="Select Assignee" label="name" track-by="name" :options="data.assignees" :select-label="group" :show-labels="false">
              <template slot="option" slot-scope="props">
                <div class="option__desc"><span class="option__title">{{ props.option.name }}</span><span class="option__small">{{ props.option.group }}</span></div>
              </template>
            </multiselect>
          </div>
          <div class="col">
            <multiselect v-model="task.patient" placeholder="Select Patient" :options="data.patients" :show-labels="false">
            </multiselect>
          </div>
          <div class="col">
            <multiselect v-model="task.repeat" placeholder="Repeat Task" :options="data.repetitions" :show-labels="false">
            </multiselect>
          </div>
        </div>
      </div>
      <div class="row pt-3">
        <div class="col-10">
          <b-button class="btn-lg">Load</b-button>
          <b-button class="btn-lg">Save Template</b-button>
        </div>
        <div class="col-2 text-right">
          <button type="submit" class="btn btn-lg btn-primary">Create Task</button>
        </div>
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
      showDismissibleAlert: false,
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
          { name: 'John Doe', 'group': ' Doctor' },
          { name: 'Marry Linn', 'group': ' Doctor' },
          { name: 'Noah James', 'group': ' Nurse' },
          { name: 'Emma O\'Neill', 'group': ' Nurse' }
        ],
        patients: [
          'Sophie Evans',
          'Jessica Jones',
          'Oscar Brown',
          'Michael Smith'
        ],
        repetitions: [
          'Daily',
          'Weekly',
          'Monthly',
          'Yearly'
        ]
      }
    }
  },
  methods: {
    onSubmit: function (event) {
      event.preventDefault()
      this.showDismissibleAlert = true

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
<style lang="css">
  input[type='text'], label, .multiselect__single, .multiselect__placeholder {
    font-size: 14px;
    color: #adadad;
    display: flex !important;
    align-items: center;
    justify-content: center;
  }
</style>
