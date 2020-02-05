<template>
  <div class="q-pa-md q-gutter-md">
    <q-list bordered padding class="rounded-borders" style="max-width: 80%; background-color: white;">
      <q-item-label header><h1>Изпити</h1></q-item-label>

      <exam v-for="(exam, key) in exams" :key="key" :id="key" :exam="exam" :date="getMyDate" ></exam>
    </q-list>
  </div>
</template>

<script>
import { date } from 'quasar'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      visible: true
    }
  },
  computed: {
    ...mapGetters('exams', ['exams']),
    getMyDate () {
      let timeStamp = Date.now()
      let myCurrentDate = date.formatDate(timeStamp, 'DD/MM/YYYY HH:mm')
      return myCurrentDate
    }
  },
  components: {
    'exam': require('components/Exams/Exam.vue').default
  }
}
</script>

<style scoped>
h1 {
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 0rem;
    letter-spacing: -0.01562em;
}
</style>
