<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2>
          <strong>{{ name }}</strong> <span>| Room: {{ room }}</span>
        </h2>
        <h4>
          <strong>Gender:</strong> <span>{{ gender }}</span>
          <strong class='pl-4'>Age:</strong> <span>{{ age }}</span>
          </h4>
        <div>
          <h4>
          <strong>Diagnosis:</strong> <span>{{ diagnosis }}</span>
          </h4>
          <h4>
          <strong>Symptoms:</strong> <span v-for='symptom in symptoms' :key='symptom'>{{ symptom }}, </span>
          </h4>
          <h4>
          <strong>Medication:</strong> <span v-for='medication in medications' :key='medication'>{{ medication }}, </span>
          </h4>
          <h4>
          <strong>Tasks:</strong> <span v-for='task in tasks' :key='task'>{{ task }}, </span>
          </h4>
        </div>
      </div>
    </div>
    <button class="btn btn-primary mt-5" @click='toggleAddInfo()'>Additional Information</button>
  </div>
</template>

<script lang="js">
export default {
  data () {
    return {
      name: 'Jenny Schmidt',
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
  name: 'PatientGeneral',
  methods: {
    toggleAddInfo () {
      return (
        console.log('Additional Info Button Clicked')
      )
    }
  }
}
</script>
