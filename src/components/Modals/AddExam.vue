<template>
<q-card class="my-bcg text-white">
        <q-bar>
          <q-space />

          <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle" content-class="bg-white text-primary">Minimize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
            <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-primary">Maximize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6">Добави нов изпит</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input outlined v-model="submitExam.name" label="Име на предмета" color="white" />
          <div class="row q-my-sm q-gutter-md">
            <q-select outlined v-model="submitExam.profession" transition-show="flip-up" transition-hide="flip-down" :options="optionsProfession" style="width: 250px" label="Професия" />
            <q-select outlined v-model="submitExam.level" transition-show="flip-up" transition-hide="flip-down" :options="optionsLevel" style="width: 100px" label="Курс" />
            <q-select outlined v-model="submitExam.type" transition-show="flip-up" transition-hide="flip-down" :options="optionsType" style="width: 200px" label="Форма на изпита" />
          </div>
        </q-card-section>
      </q-card>
</template>

<script>
export default {
  data () {
    return {
      submitExam: {
        name: '',
        type: '',
        level: '',
        profession: '',
        number: '',
        theme: '',
        description: '',
        teacher: '',
        startDate: '',
        endDate: ''
      },
      dialog: false,
      maximizedToggle: true,
      model: null,
      optionsProfession: [
        'Инструктор по фитнес', 'Треньор', 'Инструктор и Треньор'
      ],
      optionsLevel: [
        'Първи', 'Втори'
      ],
      optionsType: [
        'Теория', 'Практика'
      ]
    }
  },
  props: ['maximized']
}
</script>

<style scoped>
  .my-bcg {background-color: #26a69a;}
</style>
