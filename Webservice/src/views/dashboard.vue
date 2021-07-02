<template lang='html'>
<div>
  <div class='export'>
    <b-dropdown class="ml-auto" id="dropdownexport" text="Export Tasks" variant="secondary">
        <b-dropdown-item>Export as PDF</b-dropdown-item>
        <b-dropdown-item>Export as Excel</b-dropdown-item>
    </b-dropdown>
  </div>
  <h5 style="text-align: center"> <b> John Doe's Tasks </b> </h5>
  <b-table :items="tabledata" :fields="fields"
      class="text-center"
      id='mytasks'
      head-variant='light'
      outlined
      :sort-compare="sortingChanged"
      >

      <template v-slot:cell(status)="data">
      <div>
        <b-form-select
          v-model="data.item.status"
          :options="status_options"
          size="sm"
          @change="changeColor(data.item)"
        />
      </div>
      </template>

  </b-table>
</div>
</template>

<script lang='js'>

export default {
  name: 'dashboard',
  data: function() {
    return{
      fields: [ //table header
        { key: 'task_description', sortable: true },
        { key: 'patients', sortable: true },
        { key: 'assigned_by', sortable: true },
        { key: 'priority', sortable: true },
        { key: 'due_date', sortable: true },
        { key: 'status', sortable: true, tdClass:'status'},
      ],
      tabledata: [ // table data
        { task_description: 'Radiology, X-Ray, Knee left', patients: 'John Smith', assigned_by: 'Dr. Mueller', priority: 'Medium', due_date: 'June 5th 20:30', status: 'open',
        _cellVariants: { priority: 'warning', status: 'primary' } },
        { task_description: 'ICU, Medication, Painkillers', patients: 'Janine Mayer', assigned_by: 'Dr. Schmidt', priority: 'Medium', due_date: 'June 6th 08:00', status: 'open',
        _cellVariants: { priority: 'warning', status: 'primary' } },
        { task_description: 'Blood sample, Blood sugar', patients: 'Bob Taylor', assigned_by: 'Nurse Weber', priority: 'High', due_date: 'June 5th 10:30', status: 'progress',
        _cellVariants: { priority: 'danger', status: 'success' } },
        { task_description: 'Meeting with Dr. Ben', patients: '-', assigned_by: 'Dr. Ben', priority: 'Low', due_date: 'June 9th 14:00', status: 'open',
        _cellVariants: { priority: 'success', status: 'primary' } },
        { task_description: 'Pre-surgery checkup', patients: 'Lisa Lindt', assigned_by: 'Nurse Kremer', priority: 'High', due_date: 'June 5th 15:20', status: 'progress',
        _cellVariants: { priority: 'danger', status: 'success' } },
      ], 
      status_options: [
        {value: 'open', text: 'Open'},
        {value: 'progress', text: 'In Progress'},
        {value: 'forward', text: 'Forward Task'},
        {value: 'close', text: 'Close Task'},
      ],
      priority: { 'low': 2, 'medium': 1, 'high':0 },
    }
  },
  methods: {
    removeEntry(value) {
      this.$nextTick(() => {
        let idx_entry =  this.tabledata.indexOf(value)
        if (confirm('Confirm: Task is completed or will be forwarded and can be closed.')) {
          this.tabledata.splice(idx_entry, 1)
        }
      })
    },
    changeColor(value) {
      let idx_entry =  this.tabledata.indexOf(value)
      if (value.status == 'open') {
        this.tabledata[idx_entry]._cellVariants.status = 'primary'
      } else if (value.status == 'progress') {
        this.tabledata[idx_entry]._cellVariants.status = 'success'
      } else if (value.status == 'close') {
        this.tabledata[idx_entry]._cellVariants.status = 'danger'
        this.removeEntry(value)
      } else if (value.status == 'forward') {
        this.forwardTask(this.tabledata[idx_entry])
        this.removeEntry(value)
      }
    },
    forwardTask(rowdata) {
      console.log(rowdata.task_description)
    },
    sortingChanged(a, b, key) {
      let result = 0;
      if (key === 'priority') {
          let one = a[key].toLowerCase();
          let two = b[key].toLowerCase();
          return this.priority[one] - this.priority[two];
      } 
      return false;
    }

  }
}
</script>

<style scoped lang='scss'>
#mytasks {
  margin: 20px;
  background-color: rgb(239, 239, 239);
}
.export {
  float: right;
}
.btn {
  float: right;
}
.status {
  max-width: 50px;
}
</style>
