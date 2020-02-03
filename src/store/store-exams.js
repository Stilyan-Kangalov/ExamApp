/* eslint-disable */

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
      startDate: '02/02/2020 13:00',
      endDate: '02/02/2020 17:05'
    }
  }
}

const mutations = {}

const actions = {}

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
