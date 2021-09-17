export const state = () => ({
  posts: []
})

export const mutations = {
  SET_POST : (state, posts) => state.posts = posts
}

export const actions = {
  all({commit}, posts){
    commit('SET_POST', posts)
  }
}
