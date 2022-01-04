<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">控制台</el-menu-item>
        <el-submenu index="2">
          <template slot="title">管理</template>
          <el-menu-item index="2-1">文章</el-menu-item>
          <el-menu-item index="2-2">评论</el-menu-item>
          <el-menu-item index="2-3">分类</el-menu-item>
          <el-menu-item index="2-3">标签</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">撰写</el-menu-item>
        <el-row type="flex" class="row-bg" justify="end">
            <el-menu-item index="3-1">Linmo</el-menu-item>
            <el-menu-item index="3-2">登出</el-menu-item>
            <el-menu-item index="3-3">主页</el-menu-item>
        </el-row>
      </el-menu>
    </el-header>
    <el-main>
        <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
