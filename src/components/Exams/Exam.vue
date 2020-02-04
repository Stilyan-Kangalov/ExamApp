<template>
<q-item clickable v-ripple>
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
