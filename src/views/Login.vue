<template>
  <div class="login">
    <b-row class="mt-5">
      <b-col md="8" offset-md="2" lg="6" offset-lg="3">
        <b-card title="登录">
          <b-form>
            <!-- 姓名 -->
            <b-form-group label="姓名">
              <b-form-input
                v-model="$v.user.name.$model"
                type="text"
                placeholder="请输入用户名"
              >
              </b-form-input>
              <b-form-invalid-feedback :state="validateState('name')">
                用户名不能为空
              </b-form-invalid-feedback>
            </b-form-group>

            <!-- //手机号 -->
            <!-- 登录不需要手机号 -->
            <!-- <b-form-group label="手机号">
              <b-form-input v-model="user.telephone"
                            type="text"
                            placeholder="请输入11位手机号"
                            :state="validateState('telephone')">
              </b-form-input>
              <b-form-invalid-feedback :state="validateState('telephone')">
                手机号必须为11位
              </b-form-invalid-feedback>
            </b-form-group> -->

            <!-- 密码 -->
            <b-form-group label="密码">
              <b-form-input
                v-model="$v.user.password.$model"
                type="password"
                placeholder="请输入密码(不能少于6位)"
                :state="validateState('password')"
                @keyup.enter="login"
              ></b-form-input>
              <b-form-invalid-feedback :state="validateState('password')">
                密码必须大于等于 6 位
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group>
              <b-button @click="login" variant="outline-primary" block
                >登录</b-button
              >
            </b-form-group>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import customerValidator from '@/helper/validator'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      user: {
        name: '',
        telephone: '',
        password: ''
      }
    }
  },
  validations: {
    user: {
      name: {
        required
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  methods: {
    ...mapActions('userModule', { userLogin: 'login' }),
    validateState(userProperty) {
      // 这里是es6 结构赋值
      const { $dirty, $error } = this.$v.user[userProperty]
      return $dirty ? !$error : null
    },
    login() {
      //验证数据
      //这行代码，在表单中没有填写注册信息时点击注册按钮会进行校验
      //用户没有和表单交互时校验
      this.$v.user.$touch()
      if (this.$v.user.$anyError) {
        return
      }
      //axios 请求
      // this.$store.dispatch('userModule/register', this.user).then(() => {
      this.userLogin(this.user)
        .then(() => {
          // 跳转到主页面
          this.$router.replace({ name: 'home' })
        })
        .catch(err => {
          this.$bvToast.toast('数据验证错误', {
            title: err.response.data.msg,
            variant: 'danger',
            solid: true
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
