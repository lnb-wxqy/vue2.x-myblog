import storageService from '@/service/storageService'
import userService from '@/service/userService'

const userModule = {
  namespaced: true,
  state: {
    token: storageService.get(storageService.USER_TOKEN),
    userInfo: storageService.get(storageService.USER_INFO)
  },

  mutations: {
    SET_TOKEN (state, token) {
      // 更新本地缓存
      storageService.set(storageService.USER_TOKEN, token)
      // 更新state
      state.token = token
    },
    SET_USERINFO (state, userInfo) {
      // 更新本地缓存
      storageService.set(storageService.USER_INFO, userInfo)
      // 更新state
      state.userInfo = userInfo
    }
  },

  actions: {
    register (context, { name, telephone, password }) {
      return new Promise((resolve, reject) => {
        userService
          .register({ name, telephone, password })
          .then(res => {
            // 成功，保存token
            context.commit('SET_TOKEN', res.data.token)
            // vuex 链式调用
            return userService.info()
          }).then(response => {

            // 保存用户信息，序列化
            context.commit('SET_USERINFO', JSON.stringify(response.data.user))
            resolve(response)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}

export default userModule