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
          <button type="submit" class="btn btn-lg btn-primary mb-2">
            Search
          </button>
        </form>
      </div>
      <PatientQR />
    </div>
    <PatientGeneral />
  </div>
</template>

<script lang="js">
import PatientGeneral from './PatientGeneral'
import PatientQR from './PatientQR'
export default {
  name: 'patient',
  components: {
    PatientGeneral,
    PatientQR
  },
  props: {
    name: 'Jenny'
  }
}
</script>

<style scoped lang="css">
  input[type=text] {
    width: 20em;
    font-size: 1.5em;
  }
</style>
