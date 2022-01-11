<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <el-menu
      :default-active="$route.path"
      router
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="info">控制台</el-menu-item>
      <el-menu-item index="write">撰写</el-menu-item>
      <el-submenu index="2">
        <template slot="title">管理</template>
        <el-menu-item index="mArticle">文章</el-menu-item>
        <el-menu-item index="comment">评论</el-menu-item>
        <el-menu-item index="category">分类</el-menu-item>
        <el-menu-item index="label">标签</el-menu-item>
      </el-submenu>
      <el-row type="flex" class="row-bg" justify="end">
        <el-menu-item>{{username}}</el-menu-item>
        <el-menu-item @click="logout()">登出</el-menu-item>
        <el-menu-item index="index">主页</el-menu-item>
      </el-row>
    </el-menu>

    <a-layout-content style="padding: 0 50px">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin: 16px 0"></el-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <router-view/>
      </div>
    </a-layout-content>

    <a-layout-footer style="text-align: center"> 博客系统 </a-layout-footer>
  </a-layout>
</template>
<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
<script>
export default {
  data () {
    return {
      username: ''
    }
  },
  mounted: function () {
    this.username = window.sessionStorage.getItem('username')
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    activeIndex () {
      return this.$route.path.replace('/', '')
    },
    logout () {
      this.$http.get('/InvalidateServlet')
        .then((res) => {
          this.$router.replace('/')
        })
      window.sessionStorage.clear()
    }
  }
}
</script>
