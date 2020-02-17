/* eslint-disable */

import Vue from 'vue'
import { uid } from 'quasar'

const state = {
  exams: {
    'ID1': {
      name: 'Фитнес тренировка - Фитнес състезания',
      type: 'Практика',
      level: 'Първи',
      profession: 'Инструктор по фитнес',
      number: 7,
      theme: 'Тема на изпита. Активна',
      description: 'Описание на изпита.',
      teacher: 'Юлиан Карабиберов',
      startDate: '17/02/2020 01:00',
      endDate: '17/02/2020 01:08',
    },
    'ID2': {
      name: 'Педагогика',
      type: 'Теория',
      level: 'Втори',
      profession: 'Инструктор и Треньор',
      number: 2,
      theme: 'Тема на изпита.',
      description: 'Няма допълнителна информация.',
      teacher: 'Юлиан Карабиберов',
      startDate: '20/02/2020 08:00',
      endDate: '20/02/2020 09:00'
    },
    'ID3': {
      name: 'Спортна аеробика',
      type: 'Практика',
      level: 'Втори',
      profession: 'Треньор',
      number: 2,
      theme: 'Тема на изпита.',
      description: 'Описание на изпита.',
      teacher: 'Юлиан Карабиберов',
      startDate: '16/02/2020 08:00',
      endDate: '16/02/2020 23:30'
    },
    'ID4': {
      name: 'Спортна психология',
      type: 'Теория',
      level: 'Първи',
      profession: 'Инструктор',
      number: 16,
      theme: 'Тема на изпита',
      description: 'Описание на изпита.',
      teacher: 'Юлиан Карабиберов',
      startDate: '14/02/2020 08:00',
      endDate: '14/02/2020 09:00'
    },
    'ID5': {
      name: 'Спортен масаж',
      type: 'Теория',
      level: 'Първи',
      profession: 'Инструктор',
      number: 5,
      theme: 'Тема на изпита',
      description: 'Описание на изпита.',
      teacher: 'Юлиан Карабиберов',
      startDate: '03/02/2020 02:50',
      endDate: '03/02/2020 04:05'
    }
  }
}

const mutations = {
  updateExam(state, payload) {
    Object.assign(state.exams[payload.id], payload.updates)
  },
  deleteExam(state, id) {
    Vue.delete(state.exams, id)
  },
  addExam(state, payload) {
    Vue.set(state.exams, payload.id, payload.exam)
  }
}

const actions = {
  updateExam({ commit }, payload) {
    commit('updateExam', payload)
  },
  deleteExam({ commit }, id) {
    commit('deleteExam', id)
  },
  addExam({ commit }, exam) {
    let examID = uid()
    let payload = {
      id: examID,
      exam: exam
    }
    commit('addExam', payload)
  }
}

const getters = {
  exams: (state) => {
    return state.exams
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
