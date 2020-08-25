<template>
  <div class="register">
    <b-row class="mt-5">
      <b-col md="8" offset-md="2" lg="6" offset-lg="3">
        <b-card title="注册">
          <b-form>
            <!-- 姓名 -->
            <b-form-group label="姓名">
              <b-form-input
                v-model="user.name"
                type="text"
                placeholder="请输入用户名"
              >
              </b-form-input>
            </b-form-group>

            <!-- //手机号 -->
            <b-form-group label="手机号">
              <b-form-input
                v-model="user.telephone"
                type="text"
                placeholder="请输入11位手机号"
                :state="validateState('telephone')"
              >
              </b-form-input>
              <b-form-invalid-feedback :state="validateState('telephone')">
                手机号必须为11位
              </b-form-invalid-feedback>
            </b-form-group>

            <!-- 密码 -->
            <b-form-group label="密码">
              <b-form-input
                v-model="user.password"
                type="password"
                placeholder="请输入密码(不能少于6位)"
                :state="validateState('password')"
              ></b-form-input>
              <b-form-invalid-feedback :state="validateState('password')">
                密码必须大于等于 6 位
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group>
              <b-button @click="register" variant="outline-primary" block
                >注册</b-button
              >
            </b-form-group>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// import { BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue'
// import { BIconArrowDown } from 'bootstrap-vue'

export default {
  components: {
    // BIcon,
    // BIconArrowUp,
    // BIconArrowDown
  },
  data() {
    return {
      user: {
        name: '',
        telephone: '',
        password: ''
      },
      showTelephoneValidater: false
    }
  },
  methods: {
    register() {
      if (this.user.telephone.length != 11) {
        this.showTelephoneValidater = true
      }
      console.log(this.user.telephone)
      console.log(this.showTelephoneValidater)
    },
    validateState(telephone) {}
  }
}
</script>

<style lang="scss" scoped></style>
