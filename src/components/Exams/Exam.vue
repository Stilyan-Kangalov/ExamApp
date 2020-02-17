<template>
<q-item clickable v-ripple class="exam-row" @click="basic = true">
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
    <q-dialog v-model="basic" transition-show="rotate" transition-hide="rotate">
      <q-card class="exam-dialog">
        <q-card-section>
          <div class="text-h6 dialog-head">Информация</div>
        </q-card-section>
        <q-card-section class="q-pt-none dialog-label">
          <p>Изпит по: {{ exam.name }}</p>
          <p>Професия: {{ exam.profession }}</p>
          <p>Курс: {{ exam.level }}</p>
          <p>Форма на изпита: {{ exam.type }}</p>
          <p v-if="getMyDate < exam.startDate" class="topic-red">Номер на билета: Видим само по време на изпита!</p>
          <p v-else-if="getMyDate >= exam.startDate && getMyDate <= exam.endDate" class="topic-red">Номер на билета: {{ exam.number }}</p>
          <p v-else class="topic-red">Номер на билета: Видим само по време на изпита!</p>
          <p v-if="getMyDate < exam.startDate" class="topic-red">Тема: Видима само по време на изпита!</p>
          <p v-else-if="getMyDate >= exam.startDate && getMyDate <= exam.endDate" class="topic-red">Тема: {{ exam.theme }}</p>
          <p v-else class="topic-red">Тема: Видима само по време на изпита!</p>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Затвори" color="red" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
      </q-item>

</template>

<script>
/* eslint-disable */

import { date } from 'quasar'

export default {
  props: ['exam', 'id', 'date'],
  data() {
    return {
      basic: false
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

</style>
