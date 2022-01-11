<template>
  <div class="backclout">
    <div class="backclout">
      <el-form
        ref="loginForm"
        :model="form"
        :rules="rules"
        label-width="80px"
        class="login-box"
      >
        <h3 class="login-title">欢迎登录</h3>
        <el-form-item label="账号: " prop="username">
          <el-input
            type="text"
            placeholder="请输入账号"
            v-model="loginForm.username"
          />
        </el-form-item>
        <el-form-item label="密码: " prop="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="loginForm.password"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt />
      </div>
      <el-form :model="loginForm" ref="LoginFormRef" label-width="0px" class="login_form">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            prefix-icon="iconfont icon-3702mima"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 数据绑定
      loginForm: {
        username: 'admin',
        password: '123'
      }
    }
  },
  // 添加行为，
  methods: {
    // 添加表单重置方法
    resetLoginForm () {
      // this=>当前组件对象，其中的属性$refs包含了设置的表单ref
      //   console.log(this)
      this.$refs.LoginFormRef.resetFields()
    },
    async login () {
      // 点击登录的时候先调用validate方法验证表单内容是否有误

      // 发送请求进行登录
      const { data: res } = await this.$http.post(
        '/LoginServlet',
        this.$qs.stringify(this.loginForm)
      )
      console.log(res)
      if (res.status !== 200) {
        return this.$message.error('登录失败:' + res.msg) // console.log("登录失败:"+res.meta.msg)
      }

      this.$message.success('登录成功')
      // console.log('res.token:', res.token)
      // 保存token
      window.sessionStorage.setItem('token', res.token)
      window.sessionStorage.setItem('username', this.loginForm.username)
      console.log(this.loginForm.username)
      // 导航至/home
      //   this.$router.push('/admin')
      this.$router.replace('/admin')
    }
  }
}
</script>

<style  scoped>
@import url(../assets/css/css.css);
/* .login_container {
  background-color: #2b5b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}
.avatar_box img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-end;
} */
</style>
