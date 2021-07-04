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
                <h3>
                    <strong>Patient:</strong>
                    <span>Jenny Schmidt</span>
                    <span>(ID: 392761)</span>

                    <strong class="text-muted">| Room</strong>
                    <span class="text-muted">256</span>
                </h3>
            </div>
        </div>
        <div class="mt-3">
            <b-tabs>
                <b-tab title="Allergies" active>
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">This Patient has the following allergies:</h3>
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
                            <img src="../assets/images/decree.png" alt="patient-decree" width="100%">
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
                                        <th>Outcome</th>
                                        <th>Number</th>
                                        <th>Mean</th>
                                        <th>SEM</th>
                                        <th><em>p</em> Value</th>
                                    </tr>
                                    <tr v-for="test in tests" :key="test.id">
                                        <td>{{ test.type }}</td>
                                        <td><p>Alive</p><p>Dead</p></td>
                                        <td><p>{{ test.num1 }}</p><p>{{ test.num2 }}</p></td>
                                        <td><p>{{ test.mean1 }}</p><p>{{ test.mean2 }}</p></td>
                                        <td><p>{{ test.sem1 }}</p><p>{{ test.sem2 }}</p></td>
                                        <td>{{ test.pval }}</td>
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
          type: 'Total WBC',
          num1: 291,
          num2: 47,
          mean1: 12.5,
          mean2: 11.3,
          sem1: 0.4,
          sem2: 1.4,
          pval: 0.37
        },
        {
          id: 1,
          type: 'Platelet',
          rnum1: 291,
          num2: 47,
          mean1: 292.2,
          mean2: 265.8,
          sem1: 8.7,
          sem2: 26.4,
          pval: 0.27
        },
        {
          id: 2,
          type: 'Blood Urea Nitrogen',
          num1: 273,
          num2: 47,
          mean1: 8.3,
          mean2: 11.8,
          sem1: 0.5,
          sem2: 1.4,
          pval: 0.01
        },
        {
          id: 3,
          type: 'Createnine',
          rnum1: 273,
          num2: 47,
          mean1: 93.6,
          mean2: 12.7,
          sem1: 3.1,
          sem2: 11.7,
          pval: 0.03
        },
        {
          id: 4,
          type: 'Sodium',
          num1: 268,
          num2: 47,
          mean1: 136.1,
          mean2: 138.3,
          sem1: 0.9,
          sem2: 1.9,
          pval: 0.32
        },
        {
          id: 5,
          type: 'Glucose',
          rnum1: 268,
          num2: 47,
          mean1: 9.6,
          mean2: 9.3,
          sem1: 0.5,
          sem2: 0.1,
          pval: 0.77
        },
        {
          id: 6,
          type: 'pH',
          num1: 76,
          num2: 16,
          mean1: 7.4,
          mean2: 7.3,
          sem1: 0.01,
          sem2: 0.03,
          pval: 0.07
        },
        {
          id: 7,
          type: 'PCO2',
          num1: 76,
          num2: 16,
          mean1: 37.6,
          mean2: 51.2,
          sem1: 1.2,
          sem2: 4.8,
          pval: '< 0.001'
        },
        {
          id: 8,
          type: 'PO2',
          num1: 76,
          num2: 16,
          mean1: 64.9,
          mean2: 68.3,
          sem1: 3,
          sem2: 7.2,
          pval: 0.64
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
