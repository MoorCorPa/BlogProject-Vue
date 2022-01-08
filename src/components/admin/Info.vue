<template>
  <div>
    <div>
      <h1>网站概要</h1>
      <h2 style="color: #909399; padding: 20px 0">
        目前有
        <span id="aCount" style="color: #303133; font-size: 35px">6</span>
        篇文章,并有
        <span id="cCount" style="color: #303133; font-size: 35px">39</span>
        条关于你的评论在
        <span id="categoryCount" style="color: #303133; font-size: 35px"
          >4</span
        >
        个分类中.
        <br />点击下面的链接快速开始:
      </h2>
      <a @click="toWrite" style="font-size: 20px">撰写新文章</a>
    </div>

    <el-divider></el-divider>

    <div>
      <a-row>
        <a-col :span="12" style="margin: 20px 0px">
          <h3>最近发布的文章</h3>
          <el-table :data="aTableData" height="250" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="aname" label="文章" width="180">
            </el-table-column>
          </el-table>
        </a-col>

        <a-col :span="12" style="margin: 20px 0"
          ><h3>最近发布的评论</h3>
          <el-table :data="cTableData" height="250" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="cname" label="评论人" width="180">
            </el-table-column>
            <el-table-column prop="cmsg" label="评论" width="180">
            </el-table-column>
            </el-table>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      aTableData: [{
        date: '09-19',
        aname: 'java'
      }],
      cTableData: [{
        date: '09-19',
        cname: 'yousa',
        cmsg: '甘露！'
      }]
    }
  },
  methods: {
    toWrite () {
      this.$router.push('/write')
    }
  }
}
</script>
