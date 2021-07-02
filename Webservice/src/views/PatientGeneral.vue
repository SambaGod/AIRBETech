<template>
  <div>
    <div class='card'>
      <div class='card-body'>
        <table class="table">
          <tr>
            <th>First Name</th>
            <td>{{ user.firstname }}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>{{ user.lastname }}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{{ user.gender }}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{{ user.age }}</td>
          </tr>
          <tr>
            <th>Room</th>
            <td>{{ user.room }}</td>
          </tr>
          <tr>
            <th>Diagnosis</th>
            <td>{{ user.diagnosis }}</td>
          </tr>
          <tr>
            <th>Symptoms</th>
            <td><span v-for='symptom in user.symptoms' :key='symptom'>{{ symptom }}, </span></td>
          </tr>
          <tr>
            <th>Medication</th>
            <td><span v-for='medication in user.medications' :key='medication'>{{ medication }}, </span></td>
          </tr>
          <tr>
            <th>Tasks</th>
            <td><span v-for='task in user.tasks' :key='task'>{{ task }}, </span></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang='js'>
export default {
  data () {
    return {
      jennifer: {
        firstname: 'Jenny',
        lastname: 'Schmidt',
        room: 256,
        gender: 'F',
        age: 24,
        diagnosis: 'Pneumonia',
        symptoms: [
          'Cough',
          'Fever',
          'Short breath'
        ],
        medications: [
          'Antibiotics (x1)',
          'Ibuprofen 500mg (x3)',
          'Amoxicillin 40mg/kg (x1)'
        ],
        tasks: [
          'Chest X-Ray',
          'General check-up'
        ]
      },
      user: {
        firstname: '',
        lastname: '',
        room: '',
        gender: '',
        age: '',
        diagnosis: '',
        symptoms: [''],
        medications: [''],
        tasks: []
      }
    }
  },
  name: 'PatientGeneral',
  props: {
    info: Boolean
  },
  watch: {
    info: function () {
      this.user = this.jennifer
      console.log(this.user)
    }
  }
}
</script>

<style scoped lang='scss'>
  table {
    tr {
      th, td{
        font-size: 1.5em;
      }
    }
  }
</style>
