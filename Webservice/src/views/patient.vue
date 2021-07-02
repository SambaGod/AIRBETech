<template lang="html">
  <div>
    <div class="row justify-content-between">
      <div>
        <form class="form-inline">
          <div class="form-group mx-sm-3 mb-2">
            <input
              type="text"
              class="form-control"
              placeholder="<Patient Name>"
            />
          </div>
          <button type="submit" class="btn btn-lg btn-primary mb-2" @click='togglePatientData()'>
            Search
          </button>
        </form>
      </div>
      <PatientQR />
    </div>
    <div :class='info ? "" : "d-none"'>
      <PatientGeneral />
      <router-link class="nav-link btn btn-primary py-4 mt-5" to="/patient/patient-details/">Load More Details</router-link>
    </div>
  </div>
</template>

<script lang="js">
import PatientGeneral from './PatientGeneral'
import PatientQR from './PatientQR'
export default {
  name: 'Patient',
  components: {
    PatientGeneral,
    PatientQR
  },
  methods: {
    togglePatientData () {
      this.info = true
    }
  },
  data () {
    return {
      info: false
    }
  }
}
</script>

<style scoped lang="css">
  input[type=text] {
    width: 20em;
    font-size: 1.5em;
  }
</style>
