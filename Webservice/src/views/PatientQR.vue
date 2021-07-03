<template>
    <div>
        <b-button v-b-modal.modal-1 class="btn-lg mr-3">QR Code</b-button>
        <b-modal id="modal-1" title="Scanning QR Code">
            <h3 class="my-4">Please place QR code in front of the camera</h3>
            <div>
                <p class='error'>{{ error }}</p>
                <qrcode-stream @decode='onDecode' @init='onInit' class="text-center">
                    <div class="loading-indicator spinner-border m-5" v-if="loading" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                </qrcode-stream>
                <div class='decode-result pt-3 h5'>Status:
                    <i v-if='result' class="mdi mdi-checkbox-marked-circle text-success"></i>
                    <i v-if='result==""' class="mdi mdi-close-circle text-danger"></i>
                    <p v-if='result'><strong>Detected Patient ID: 392761</strong></p>
                </div>
                <hr />
                <p>
                    <strong>Note:</strong> Please make sure the status turns to a green check before removing the QR code
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
      error: '',
      loading: false
    })
  },
  methods: {
    onDecode (result) {
      this.result = result
    },
    async onInit (promise) {
      try {
        this.loading = true
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
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
