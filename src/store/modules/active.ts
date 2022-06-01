export default {
  state: {
    isActive: false
  },
  getters: {
    // isActiveNav(state:any) {
    //   console.log('getters',state);
    // }
  },
  mutations: {
    toggleIsActive(state:any, isActive:boolean) {
        state.isActive = !isActive
    }
  },
  actions: {
    toggleIsActive({commit}:any, isActive:boolean) {
      commit('toggleIsActive', isActive)
    }
  },
}