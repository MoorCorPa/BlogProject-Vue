<template>
  <el-container>
    <el-main class="login">
      <video id="v1" autoplay muted loop style="width: 100%">
        <source src="../assets/mp4/Login.mp4" />
      </video>
      <div class="container" id="container">
        <!-- <div class="form-container sign-up-container">
        <form action="#">
          <h1>☞第三方按钮注册</h1>
          <div class="social-container">
            <a href="#" class="social">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#" class="social">
              <ion-icon name="logo-googleplus"></ion-icon>
            </a>
            <a href="#" class="social">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
          <span>或使用电子邮箱注册(〃'▽'〃)</span>
          <input type="username" placeholder="用户名" />
          <input type="email" placeholder="邮 箱✉" />
          <input type="password" placeholder="密 码" />
          <button>注册</button>
        </form>
      </div> -->
        <div class="form-container sign-in-container">
          <form action="#">
            <h1>Admin登录♫</h1>
            <!-- <div class="social-container">
            <a href="#" class="social">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#" class="social">
              <ion-icon name="logo-googleplus"></ion-icon>
            </a>
            <a href="#" class="social">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div> -->
            <input
              type="username"
              placeholder="用户名"
              v-model="loginForm.username"
            />
            <input
              type="password"
              placeholder="密 码"
              v-model="loginForm.password"
            />
            <button @click="Login">登录</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>欢迎回来^o^</h1>
              <p>与我们保持联系请登录您的个人信息✍</p>
              <button class="ghost" id="signIn" ref="signIn">登录</button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>欢迎光临☺</h1>
              <p>输入您的账号，并与我们一起开始旅程吧~</p>
              <!-- <button class="ghost" id="signUp" ref="signUp" @click="addTodo">
              注册
            </button> -->
            </div>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<style src="../assets/css/style.css"></style>
<script src="https://unpkg.com/ionicons@4.2.2/dist/ionicons.js"></script>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "root",
      },
    };
  },

  methods: {
    // 登入 提交用户输入的 账号和密码
    async Login() {
      // 获取到数据
      const res = await this.$http.post("/LoginServlet", this.loginForm);

      if (res.data.msg == "登录成功") {
        // this.$message.success("登入成功");
        // window.sessionStorage.setItem("token", res.data.token);
        this.$router.push("/admin");
      } else {
        // return this.$message.error("登入失败" + res.data.msg);
      }
    },

    // // 注册想数据库提交 用户和密码
    // addTodo() {
    //   this.$http
    //     .post("/AddBituceServlet", { title: this.loginForm.username, details: this.loginForm.password })
    //     .then((response) => {
    //       if (response.data.status == 200) {
    //         this.Login();
    //       }
    //     })
    //     .catch((error) => {
    //       console.log("添加失败", error.message);
    //     });
    // },
  },
};
</script>