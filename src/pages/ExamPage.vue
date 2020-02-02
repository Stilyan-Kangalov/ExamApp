<template>
  <div class="q-pa-md q-gutter-md">
    <q-list bordered padding class="rounded-borders" style="max-width: 80%">
      <q-item-label header><h1>Изпити</h1></q-item-label>

      <q-item v-for="exam in exams" :key="exam.id" clickable v-ripple>
        <q-item-section avatar top>
          <q-avatar v-if="getMyDate < exam.startDate" icon="create" color="orange" text-color="white" />
          <q-avatar v-else-if="getMyDate >= exam.startDate && getMyDate <= exam.endDate" icon="play_arrow" color="red" text-color="white" />
          <q-avatar v-else icon="check" color="grey" text-color="white" />
        </q-item-section>
        <q-item-section>
          <q-item-label lines="1">{{ exam.name }}</q-item-label>
          <q-item-label caption>{{ exam.startDate }}</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-icon v-if="getMyDate < exam.startDate" name="info" color="amber" />
        <q-icon v-else-if="getMyDate >= exam.startDate && getMyDate <= exam.endDate" name="info" color="red" />
        <q-icon v-else name="info" color="green" />
        </q-item-section>
        </q-item>
    </q-list>
  </div>
</template>

<script>
import { date } from 'quasar'

export default {
  data () {
    return {
      exams: [
        {
          id: 1,
          name: 'Фитнес тренировка - Фитнес състезания',
          startDate: '08/02/2020 08:00',
          endDate: '08/02/2020 08:00'
        },
        {
          id: 2,
          name: 'Педагогика',
          startDate: '09/02/2020 08:00',
          endDate: '09/02/2020 09:00'
        },
        {
          id: 3,
          name: 'Спортна аеробика',
          startDate: '10/02/2020 08:00',
          endDate: '10/02/2020 09:00'
        },
        {
          id: 4,
          name: 'Спортна психология',
          startDate: '01/02/2020 08:00',
          endDate: '01/02/2020 09:00'
        },
        {
          id: 5,
          name: 'Спортен масаж',
          startDate: '02/02/2020 13:00',
          endDate: '02/02/2020 17:05'
        }
      ],
      visible: true
    }
  },
  computed: {
    getMyDate () {
      let timeStamp = Date.now()
      let myCurrentDate = date.formatDate(timeStamp, 'DD/MM/YYYY HH:mm')
      return myCurrentDate
    }
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
