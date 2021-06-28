<template>
    <div>
        <b-button v-b-modal.modal-1 class="btn-lg">QR Code</b-button>
        <b-modal id="modal-1" title="Scanning QR Code">
            <h3 class="my-4">Please place QR code in front of the camera</h3>
            <div>
                <p class='error'>{{ error }}</p>
                <qrcode-stream @decode='onDecode' @init='onInit' />
                <p class='decode-result'>URL Result:
                    <a :href='result'>{{ result }}</a>
                </p>
            </div>
        </b-modal>
    </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'
import { BModal } from 'bootstrap-vue'
export default {
  name: 'PatientQR',
  components: {
    QrcodeStream,
    BModal
  },
  data () {
    return ({
      result: '',
      error: ''
    })
  },
  methods: {
    onDecode (result) {
      this.result = result
    },
    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = 'ERROR: you need to grant camera access permisson'
        } else if (error.name === 'NotFoundError') {
          this.error = 'ERROR: no camera on this device'
        } else if (error.name === 'NotSupportedError') {
          this.error = 'ERROR: secure context required (HTTPS, localhost)'
        } else if (error.name === 'NotReadableError') {
          this.error = 'ERROR: is the camera already in use?'
        } else if (error.name === 'OverconstrainedError') {
          this.error = 'ERROR: installed cameras are not suitable'
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = 'ERROR: Stream API is not supported in this browser'
        }
      }
    }
  }
}
</script>
