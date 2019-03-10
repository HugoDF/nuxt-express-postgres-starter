export const state = () => ({
  sessionId: null
})
export const mutations = {
  session(state, id) {
    state.sessionId = id
  }
}
export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.session.id) {
      commit('session', req.session.id)
    }
  }
}
