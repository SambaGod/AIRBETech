<template>
  <div>
    <div class='card'>
      <div class='card-body'>
        <table class="table">
          <tr>
            <th>First Name</th>
            <td>{{ firstname }}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>{{ lastname }}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{{ gender }}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{{ age }}</td>
          </tr>
          <tr>
            <th>Room</th>
            <td>{{ room }}</td>
          </tr>
          <tr>
            <th>Diagnosis</th>
            <td>{{ diagnosis }}</td>
          </tr>
          <tr>
            <th>Symptoms</th>
            <td><span v-for='symptom in symptoms' :key='symptom'>{{ symptom }}, </span></td>
          </tr>
          <tr>
            <th>Medication</th>
            <td><span v-for='medication in medications' :key='medication'>{{ medication }}, </span></td>
          </tr>
          <tr>
            <th>Tasks</th>
            <td><span v-for='task in tasks' :key='task'>{{ task }}, </span></td>
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
    }
  },
  name: 'PatientGeneral'
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
