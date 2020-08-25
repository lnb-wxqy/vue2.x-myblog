<template>
  <div class="register">
    <b-row class="mt-5">
      <b-col md="8" offset-md="2" lg="6" offset-lg="3">
        <b-card title="注册">
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
            <b-form-group label="手机号">
              <b-form-input
                v-model="$v.user.telephone.$model"
                type="text"
                placeholder="请输入11位手机号"
                :state="validateState('telephone')"
              >
              </b-form-input>
              <b-form-invalid-feedback :state="validateState('telephone')">
                手机号不符合要求
              </b-form-invalid-feedback>
            </b-form-group>

            <!-- 密码 -->
            <b-form-group label="密码">
              <b-form-input
                v-model="$v.user.password.$model"
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
import { required, minLength } from 'vuelidate/lib/validators'
import customerValidator from '@/helper/validator'
import storageService from '@/service/storageService'
import userService from '@/service/userService'

export default {
  components: {},
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
      telephone: {
        required,
        telephone: customerValidator.telephoneValidator
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  methods: {
    validateState(userProperty) {
      const { $dirty, $error } = this.$v.user[userProperty]
      return $dirty ? !$error : null
    },
    register() {
      //验证数据
      //这行代码，在表单中没有填写注册信息时点击注册按钮会进行校验
      //用户没有和表单交互时校验
      this.$v.user.$touch()
      if (this.$v.user.$anyError) {
        return
      }
      //axios 请求
      userService
        .register(this.user)
        .then(res => {
          // 成功，保存token
          // sessionStorage和localStorage 两者的唯一区别在于时效性。
          // sessionStorage在关闭窗口或标签页之后将会删除这些数据。
          // 而localStorage则没有这样的特性，今天、下周、明年、一百年，甚至理论上的成千上万年后都能用，除非你手动去删除。
          storageService.set(storageService.USER_TOKEN, res.data.token)
          //注册成功后 调用获取用户信息接口
          userService.info().then(resp => {
            // 日志转换成json打印，否则打印不出来
            // console.log(JSON.stringify(resp))
            //保存用户信息，序列化
            storageService.set(
              storageService.USER_INFO,
              JSON.stringify(resp.data.user)
            )
            //跳转到主页面
            this.$router.replace({ name: 'home' })
          })
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
