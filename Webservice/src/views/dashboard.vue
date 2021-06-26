<template lang='html'>
<div>
  <div class='export'>
    <b-dropdown class="ml-auto" id="dropdownexport" text="Export Tasks" variant="secondary">
        <b-dropdown-item>Export as PDF</b-dropdown-item>
        <b-dropdown-item>Export as DOCX</b-dropdown-item>
    </b-dropdown>
  </div>
  <h5 style="text-align: center"> <b> John Doe's Tasks </b> </h5>
  <b-table :items="tabledata" :fields="fields"
      id='mytasks'
      head-variant='light'
      outlined
      >
    <template v-slot:cell(close)="data">
      <div>
        <b-form-checkbox
          v-model="data.item.close"
          name="checkbox-1"
          value='is_checked'
          unchecked-value='not_checked'
          @change="removeEntry(data.item)"
        ></b-form-checkbox>
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
        { key: 'status', sortable: true },
        { key: 'close', sortable: true },
      ],
      tabledata: [ // table data
        { task_description: 'Radiology, X-Ray, Knee left', patients: 'John Smith', assigned_by: 'Dr. Mueller', priority: 'Medium', due_date: 'June 5th 20:30', status: 'Open', close: 'not_checked',
        _cellVariants: { priority: 'warning', status: 'primary' } },
        { task_description: 'ICU, Medication, Painkillers', patients: 'Janine Mayer', assigned_by: 'Dr. Schmidt', priority: 'Medium', due_date: 'June 6th 00:80', status: 'Open', close: 'not_checked',
        _cellVariants: { priority: 'warning', status: 'primary' } },
        { task_description: 'Blood sample, Blood sugar', patients: 'Bob Taylor', assigned_by: 'Nurse Weber', priority: 'High', due_date: 'June 5th 10:30', status: 'In Progress', close: 'not_checked',
        _cellVariants: { priority: 'danger', status: 'success' } },
        { task_description: 'Meeting with Dr.Ben', patients: '-', assigned_by: 'Dr.Ben', priority: 'Low', due_date: 'June 9th 14:00', status: 'Open', close: 'not_checked',
        _cellVariants: { priority: 'success', status: 'primary' } },
        { task_description: 'Pre-surgery checkup', patients: 'Lisa Lindt', assigned_by: 'Nurse Kremer', priority: 'High', due_date: 'June 5th 15:20', status: 'In Progress', close: 'not_checked',
        _cellVariants: { priority: 'danger', status: 'success' } },
      ], 
    }
  },
  methods: {
    removeEntry(value) {
      this.$nextTick(() => {
        let idx_entry =  this.tabledata.indexOf(value)
        if (confirm('Confirm: Task is completed and can be closed.')) {
          this.tabledata.splice(idx_entry, 1)
        }
      })
    },
  }
}
</script>

<style scoped lang='scss'>
#mytasks{
  margin: 20px;
  background-color: rgb(239, 239, 239);
}
.export{
  float: right;
}
</style>
