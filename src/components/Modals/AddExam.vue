<template>
<q-card class="my-bcg text-white">
        <q-bar>
          <q-space />

          <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle" content-class="bg-white text-accent">Намали</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
            <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-accent">Увеличи</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-accent">Затвори</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6" style="color: #4effee">Добави нов изпит</div>
        </q-card-section>

        <q-form @submit.prevent="submitForm">
        <q-card-section class="q-pt-none">
          <q-input outlined v-model="submitExam.name" label="Име на предмета" style="width: 70%" dark color="white" :rules="[val => !!val ]">
            <template v-slot:append>
              <q-icon name="edit" />
            </template>
          </q-input>
          <div class="row q-my-sm q-gutter-md">
            <q-select outlined v-model="submitExam.profession" transition-show="flip-up" transition-hide="flip-down" :options="optionsProfession" :rules="[val => !!val ]" style="width: 250px" dark label="Професия" />
            <q-select outlined v-model="submitExam.level" transition-show="flip-up" transition-hide="flip-down" :options="optionsLevel" :rules="[val => !!val ]" style="width: 130px" dark label="Курс" />
            <q-select outlined v-model="submitExam.type" transition-show="flip-up" transition-hide="flip-down" :options="optionsType" :rules="[val => !!val ]" style="width: 200px" dark label="Форма на изпита" />
            <q-input outlined v-model="submitExam.number" label="Номер на билета" :rules="[val => !!val ]" style="width: 230px" dark color="white">
              <template v-slot:append>
                <q-icon name="edit" />
              </template>
            </q-input>
            <q-input outlined v-model="submitExam.teacher" label="Преподавател" :rules="[val => !!val ]" style="width: 450px" dark color="white">
              <template v-slot:append>
                <q-icon name="edit" />
              </template>
            </q-input>
          </div>
          <div class="row q-my-sm q-gutter-md">
            <q-input outlined v-model="submitExam.theme" label="Тема на изпита" :rules="[val => !!val ]" style="width: 69.5%" dark color="white">
              <template v-slot:append>
                <q-icon name="edit" />
              </template>
            </q-input>
          </div>
          <div class="q-my-sm q-gutter-md" style="max-width: 50%">
            <div class="q-gutter-md">Описание:</div>
            <q-input v-model="submitExam.description" :rules="[val => !!val ]" filled dark type="textarea" />
          </div>
          <div class="row q-my-sm q-gutter-md">
          <div style="max-width: 300px;">
    <q-input filled dark v-model="submitExam.startDate" :rules="[val => !!val ]" label="Започва на...">
      <template v-slot:prepend>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" dark transition-hide="scale">
            <q-date v-model="submitExam.startDate" dark mask="DD/MM/YYYY HH:mm" />
          </q-popup-proxy>
        </q-icon>
      </template>

      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" dark transition-hide="scale">
            <q-time v-model="submitExam.startDate" dark mask="DD/MM/YYYY HH:mm" format24h />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
  <div style="max-width: 300px">
    <q-input filled dark v-model="submitExam.endDate" :rules="[val => !!val ]" label="Завършва на...">
      <template v-slot:prepend>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" dark transition-hide="scale">
            <q-date v-model="submitExam.endDate" dark mask="DD/MM/YYYY HH:mm" />
          </q-popup-proxy>
        </q-icon>
      </template>

      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" dark transition-hide="scale">
            <q-time v-model="submitExam.endDate" dark mask="DD/MM/YYYY HH:mm" format24h />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
  </div>
  <div class="text-h6" style="color: #4effee; margin-top: 20px;">Проверка за валидни данни</div>
  <div class="q-px-sm no-margin">
      <p v-if="!submitExam.name == '' "><q-icon name="check" color="light-green-13"></q-icon>&nbsp;<strong>Име на предмета:</strong><strong class="text-cyan-13"> {{ submitExam.name }}.</strong></p>
      <p v-else ><q-icon name="add_alert" class="bell"></q-icon>&nbsp;<strong class="my-warn-msg">Не е въведено име на предмета !</strong></p>
      <p v-if="!submitExam.profession == '' "><q-icon name="check" color="light-green-13"></q-icon>&nbsp;<strong>Избрана професия:</strong><strong class="text-cyan-13"> {{ submitExam.profession }}.</strong></p>
      <p v-else ><q-icon name="add_alert" class="bell"></q-icon>&nbsp;<strong class="my-warn-msg">Няма избрана професия !</strong></p>
      <p v-if="!submitExam.level == '' "><q-icon name="check" color="light-green-13"></q-icon>&nbsp;<strong>Избран курс:</strong><strong class="text-cyan-13"> {{ submitExam.level }}.</strong></p>
      <p v-else ><q-icon name="add_alert" class="bell"></q-icon>&nbsp;<strong class="my-warn-msg">Не е избран курс !</strong></p>
      <p v-if="!submitExam.type == '' "><q-icon name="check" color="light-green-13"></q-icon>&nbsp;<strong>Форма на изпита:</strong><strong class="text-cyan-13"> {{ submitExam.type }}.</strong></p>
      <p v-else ><q-icon name="add_alert" class="bell"></q-icon>&nbsp;<strong class="my-warn-msg">Не сте избрали форма на изпита !</strong></p>
      <p v-if="!submitExam.number == '' "><q-icon name="check" color="light-green-13"></q-icon>&nbsp;<strong>Номер на билета:</strong><strong class="text-cyan-13"> {{ submitExam.number }}.</strong></p>
      <p v-else ><q-icon name="add_alert" class="bell"></q-icon>&nbsp;<strong class="my-warn-msg">Не е въведен номер на билета !</strong></p>
      <p v-if="!submitExam.teacher == '' "><q-icon name="check" color="light-green-13"></q-icon>&nbsp;<strong>Преподавател:</strong><strong class="text-cyan-13"> {{ submitExam.teacher }}.</strong></p>
      <p v-else ><q-icon name="add_alert" class="bell"></q-icon>&nbsp;<strong class="my-warn-msg">Няма записан преподавател !</strong></p>
      <p v-if="!submitExam.theme == '' "><q-icon name="check" color="light-green-13"></q-icon>&nbsp;<strong>Тема:</strong><strong class="text-cyan-13"> {{ submitExam.theme }}.</strong></p>
      <p v-else ><q-icon name="add_alert" class="bell"></q-icon>&nbsp;<strong class="my-warn-msg">Не е определена изпитна тема !</strong></p>
      <p v-if="!submitExam.description == '' "><q-icon name="check" color="light-green-13"></q-icon>&nbsp;<strong>Описание:</strong>&nbsp;<strong class="text-cyan-13">(въведено).</strong></p>
      <p v-else ><q-icon name="add_alert" class="bell"></q-icon>&nbsp;<strong class="my-warn-msg">Липсва кратко описание !</strong></p>
      <p v-if="!submitExam.startDate == '' "><q-icon name="check" color="light-green-13"></q-icon>&nbsp;<strong>Стартира на:</strong><strong class="text-cyan-13"> {{ submitExam.startDate }} </strong></p>
      <p v-else ><q-icon name="add_alert" class="bell"></q-icon>&nbsp;<strong class="my-warn-msg">Не е избрана стартова дата !</strong></p>
      <p v-if="!submitExam.endDate == '' "><q-icon name="check" color="light-green-13"></q-icon>&nbsp;<strong>Приключва на:</strong><strong class="text-cyan-13"> {{ submitExam.endDate }} </strong></p>
      <p v-else ><q-icon name="add_alert" class="bell"></q-icon>&nbsp;<strong class="my-warn-msg">Не е избрана финална дата !</strong></p>
  </div>
        </q-card-section>
        <div>
          <q-btn :loading="loading1" class="q-ma-md q-pa-xs" dark type="submit" color="dark" @click="simulateProgressSave(1)" label="Запази" icon="save" />
          <q-btn :loading="loading2" class="q-ma-md q-pa-xs" dark type="reset" color="dark" @click="simulateProgressEsc(2)" label="Откажи" icon="not_interested" />
        </div>
      </q-form>
      </q-card>
</template>

<script>
import { mapActions } from 'vuex'

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
      loading1: false,
      loading2: false,
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
  props: ['maximized'],
  methods: {
    ...mapActions('exams', ['addExam']),
    simulateProgressSave (number) {
      // we set loading state
      this[`loading${number}`] = true
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this[`loading${number}`] = false
      }, 1500)
    },
    simulateProgressEsc (number) {
      // we set loading state
      this[`loading${number}`] = true
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this[`loading${number}`] = false
      }, 1500)
    },
    submitForm () {
      this.addExam(this.submitExam)
    }
  }
}
</script>

<style scoped>
  .my-bcg {background-color: #26a69a;}
  .q-field--with-bottom {
    padding-bottom: 0;
}
</style>
