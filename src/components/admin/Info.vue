<template>
  <div>
    <div>
      <h1>网站概要</h1>
      <h2 style="color: #909399; padding: 20px 0">
        目前有
        <span id="aCount" style="color: #303133; font-size: 35px">{{
          aCount
        }}</span>
        篇文章,并有
        <span id="cCount" style="color: #303133; font-size: 35px">{{cCount}}</span>
        条关于你的评论在
        <span id="categoryCount" style="color: #303133; font-size: 35px">{{
          cateCount
        }}</span>
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
            <el-table-column prop="createDate" label="日期" width="180">
            </el-table-column>
            <el-table-column label="文章" width="180">
              <template slot-scope="scope">
                <a :href="null">{{ scope.row.content }}</a>
              </template>
            </el-table-column>
          </el-table>
        </a-col>

        <a-col :span="12" style="margin: 20px 0"
          ><h3>最近发布的评论</h3>
          <el-table :data="cTableData" height="250" style="width: 100%">
            <el-table-column prop="commentDate" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="commentator" label="评论人" width="180">
            </el-table-column>
            <el-table-column prop="commentContent" label="评论" width="180">
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
      aCount: 0,
      cCount: 0,
      cateCount: 0,
      aTableData: [
        {
          createDate: '09-19',
          content: 'java'
        }
      ],
      cTableData: [
        {
          commentDate: '09-19',
          commentator: 'yousa',
          commentContent: '甘露！'
        }
      ]
    }
  },
  mounted: function () {
    this.getdata()
  },
  methods: {
    toWrite () {
      this.$router.push('/write')
    },
    getdata () {
      this.$http.get('/FindAllArticleServlet').then((res) => {
        for (var i in res.data) {
          if (i >= 3) {
            break
          }
          this.aTableData.push(res.data[i])
        }
        this.aCount = res.data.length
      })
      this.$http.get('/FindAllCommentServlet').then((res) => {
        for (var i in res.data) {
          if (i >= 3) {
            break
          }
          this.cTableData.push(res.data[i])
        }
        this.cateCount = res.data.length
      })
      this.$http.get('/admin/FindAllCategoryServlet').then((res) => {
        this.cCount = res.data.length
      })
    }
  }
}
</script>
