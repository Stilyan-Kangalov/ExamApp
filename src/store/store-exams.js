/* eslint-disable */

import Vue from 'vue'

const state = {
  exams: {
    'ID1': {
      name: 'Фитнес тренировка - Фитнес състезания',
      startDate: '08/02/2020 08:00',
      endDate: '08/02/2020 08:00'
    },
    'ID2': {
      name: 'Педагогика',
      startDate: '09/02/2020 08:00',
      endDate: '09/02/2020 09:00'
    },
    'ID3': {
      name: 'Спортна аеробика',
      startDate: '10/02/2020 08:00',
      endDate: '10/02/2020 09:00'
    },
    'ID4': {
      name: 'Спортна психология',
      startDate: '01/02/2020 08:00',
      endDate: '01/02/2020 09:00'
    },
    'ID5': {
      name: 'Спортен масаж',
      startDate: '03/02/2020 02:50',
      endDate: '03/02/2020 04:05'
    }
  }
}

const mutations = {
  deleteExam(state, id) {
    Vue.delete(state.exams, id)
  }
}

const actions = {
  deleteExam({ commit }, id) {
    commit('deleteExam', id)
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
