<template>
  <div>
    <h1>编辑文章</h1>
    <el-row :gutter="20">
      <el-col :span="19">
        <el-input
          v-model="title"
          placeholder="标题"
          style="margin: 0 0 30px 0"
        ></el-input>
        <div class="markdown">
          <Markdown v-model="content" />
        </div>
      </el-col>
      <el-col :span="5">
        <div class="block">
          <p class="demonstration">发布日期</p>
          <el-date-picker v-model="dateVal" type="datetime" readonly>
          </el-date-picker>
        </div>
        <div style="margin-top: 30px">
          <p>分类</p>
          <div>
            <el-select
              v-model="category"
              placeholder="请选择"
              @change="indexSelect($event)"
            >
              <el-option
                v-for="item in categorys"
                :key="item.value"
                :label="item.category_name"
                :value="item.category_id"
              >
              </el-option>
            </el-select>
          </div>
        </div>
        <div style="margin-top: 30px">
          <p>标签</p>
          <el-input v-model="label" placeholder="请输入标签"></el-input>
        </div>

        <div style="margin-top: 350px">
          <a-button type="primary" block @click="sendAData()"> 发布 </a-button>
        </div>
        <!-- <div style="position: fixed; right: 150px; bottom: 150px;">
          <a-button type="primary" block>
            发布
          </a-button>
        </div> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Markdown from 'vue-meditor'

const date = new Date()

export default {
  components: {
    Markdown
  },
  data () {
    return {
      dateVal: date.getTime(),
      title: '',
      content: '',
      label: '',
      category: '',
      categorys: [],
      params: {},
      aid: -1
    }
  },
  mounted: function () {
    this.getcategorys()
    this.queryArticleById()
  },
  methods: {
    queryArticleById () {
      this.aid = this.$route.query.aid
      if (this.aid === -1) {
        this.$notify.error({
          title: '错误',
          message: '文章获取失败'
        })
        return
      }
      this.$http.post('/FindArticleByIdServlet', this.$qs.stringify({ aid: this.aid }))
        .then((res) => {
          console.log(res.data)
          this.title = res.data[0].title
          this.content = res.data[0].content
        })
    },
    sendAData () {
      this.setParams()
      this.$http
        .post('/admin/UpdateArticleServlet', this.$qs.stringify(this.params))
        .then((res) => {
          if (res.data.status === 200) {
            this.$notify({
              title: '成功',
              message: res.data.msg,
              type: 'success'
            })
            this.$router.push('/mArticle')
          }
        })
    },
    getcategorys () {
      this.$http.get('/admin/FindAllCategoryServlet').then((res) => {
        for (var i in res.data) {
          this.categorys.push(res.data[i])
        }
      })
    },
    setParams () {
      this.params.title = this.title
      this.params.content = this.content
      this.params.aid = this.aid
    },
    indexSelect (e) {
      this.params.category = this.categorys[e].category_id
    }
  }
}
</script>
