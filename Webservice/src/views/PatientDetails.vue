<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/patient">Patient Info</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">Patient Details</li>
            </ol>
        </nav>
        <div class="card">
            <div class="card-body">
                <h2>
                    <strong>Patient:</strong>
                    <span>Jenny Schmidt</span>

                    <strong class="text-muted">| Room</strong>
                    <span class="text-muted">256</span>
                </h2>
            </div>
        </div>
        <div class="mt-3">
            <b-tabs>
                <b-tab title="Allergies" active>
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title">This Patient has the following allergies:</h2>
                            <div class="card-text">
                                <ul>
                                    <li v-for="allergy in allergies" :key="allergy">{{ allergy }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </b-tab>
                <b-tab title="Patient Decree">
                    <div class="card">
                        <div class="card-body">
                            Patient Decree not available
                        </div>
                    </div>
                </b-tab>
                <b-tab title="X-Ray Results">
                    <div class="card">
                        <div class="card-body">
                            <img src="https://media.springernature.com/original/springer-static/image/chp%3A10.1007%2F978-981-15-1624-5_9/MediaObjects/472321_1_En_9_Fig2_HTML.png" alt="x-ray">
                        </div>
                    </div>
                </b-tab>
                <b-tab title="Lab Results">
                    <div class="card">
                        <div class="card-body">
                            <table class='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>Test Type</th>
                                        <th>Result</th>
                                    </tr>
                                    <tr v-for="test in tests" :key="test.id">
                                        <td>{{ test.type }}</td>
                                        <td :class='test.result ? "text-danger" : "text-success"'>{{ test.result ? 'Positive' : 'Negative' }}</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </b-tab>
                <b-tab title="Nutrition">
                    <div class="card">
                        <div class="card-body">
                            <div class="card-title">The following should be included in Jenny's diet:</div>
                            <div class="card-text">
                                <ul>
                                    <li v-for="diet in nutrition" :key="diet">{{ diet }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </b-tab>
            </b-tabs>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PatientDetails',
  data () {
    return {
      allergies: [
        'Pollen allergy',
        'Peanut allergy',
        'Allergic to bee sting'
      ],
      tests: [
        {
          id: 0,
          type: 'CBC',
          result: false
        },
        {
          id: 1,
          type: 'BMP',
          result: false
        },
        {
          id: 2,
          type: 'Blood Gases',
          result: true
        },
        {
          id: 3,
          type: 'Bacterial Sputum Culture',
          result: false
        },
        {
          id: 4,
          type: 'Influenza Test',
          result: true
        },
        {
          id: 5,
          type: 'Fungal Test',
          result: false
        },
        {
          id: 6,
          type: 'PCR',
          result: true
        }
      ],
      nutrition: [
        'Water',
        'Whole Grains',
        'Protien Rich Foods',
        'Green Leafy Vegeatable',
        'Citrus Fruits',
        'Yogurt',
        'Honey',
        'Fenugreek Tea',
        'Turmeric',
        'Ginger'
      ]
    }
  }
}
</script>

<style scoped lang='scss'>
    table {
        tr {
            &:hover {
                background: #eee;
            }
        }
    }
</style>
