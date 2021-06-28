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
          <button type="submit" class="btn btn-primary mb-2">
            Search
          </button>
        </form>
      </div>
      <div>
        <button class="btn btn-primary">QR Code</button>
      </div>
    </div>
    <PatientGeneral />
  </div>
</template>

<script lang="js">
import PatientGeneral from './PatientGeneral'
export default {
  name: 'patient',
  components: {
    PatientGeneral
  }
}
</script>
