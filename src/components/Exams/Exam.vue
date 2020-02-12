<template>
<q-item clickable v-ripple class="exam-row">
    <q-item-section avatar top>
        <q-avatar v-if="getMyDate < exam.startDate" icon="create" class="pending-exam" text-color="white" />
        <q-avatar v-else-if="getMyDate >= exam.startDate && getMyDate <= exam.endDate" icon="play_arrow" class="active-now" text-color="white" />
        <q-avatar v-else icon="check" class="passed-exam" text-color="white" />
        </q-item-section>
        <q-item-section>
          <q-item-label lines="1" class="exam-label">{{ exam.name }}</q-item-label>
          <q-item-label caption class="day-label">{{ exam.startDate }}</q-item-label>
        </q-item-section>
        <q-item-section side>
        <q-icon v-if="getMyDate < exam.startDate" name="date_range" color="orange" />
        <q-icon v-else-if="getMyDate >= exam.startDate && getMyDate <= exam.endDate" name="event" style="color: #d01d57" />
        <q-icon v-else name="calendar_today" color="grey" />
        </q-item-section>
        <q-item-section side>
        <q-icon v-if="getMyDate < exam.startDate" name="info" color="amber" />
        <q-icon v-else-if="getMyDate >= exam.startDate && getMyDate <= exam.endDate" name="info" style="color: #ef358a" />
        <q-icon v-else name="info" color="green" />
        </q-item-section>
        </q-item>
</template>

<script>
/* eslint-disable */

import { date } from 'quasar'

export default {
  props: ['exam', 'id', 'date'],
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

</style>
