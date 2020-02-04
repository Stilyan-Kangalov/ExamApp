<template>
  <div class="q-pa-md q-gutter-md">
    <q-list bordered padding class="rounded-borders" style="max-width: 80%">
      <q-item-label header><q-btn @click="showAddExam = true" class="float-right" round color="primary" size="15px" icon="add" /><h1>Контролен панел</h1></q-item-label>
      <q-item v-for="(exam, key) in exams" :key="key" clickable v-ripple>
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
              <q-btn flat round color="primary" icon="lock_open" />
            </q-item-section>
            <q-item-section side>
              <q-btn @click.stop="askToRemove(key)" flat round color="red" icon="highlight_off" />
            </q-item-section>
        </q-item>
        <q-dialog v-model="showAddExam" persistent :maximized="maximizedToggle" transition-show="slide-up" transition-hide="slide-down">
          <add-exam />
        </q-dialog>
    </q-list>
  </div>
</template>

<script>
/* eslint-disable */

import { date } from 'quasar'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      visible: true,
      showAddExam: false,
      dialog: false,
      maximizedToggle: true
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
    'add-exam' : require('components/Modals/AddExam.vue').default
  },
  props: ['exam', 'id'],
  methods: {
    ...mapActions('exams', ['deleteExam']),
    askToRemove (id) {
      this.$q.dialog({
        title: 'Моля потвърдете:',
        message: 'Желаете ли да изтриете изпита?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteExam(id)
      })
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
