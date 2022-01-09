<template>
  <div>
    <h1>撰写新文章</h1>
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
          <el-date-picker
            v-model="dateVal"
            type="datetime"
            readonly
            placeholder="选择日期时间"
          >
          </el-date-picker>
        </div>
        <div style="margin-top: 30px">
          <p>分类</p>
          <div>
            <el-select v-model="category" placeholder="请选择">
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
      category: '未分类',
      categorys: [],
      params: {}
    }
  },
  mounted: function () {
    this.getcategorys()
  },
  methods: {
    sendAData () {
      this.setData()
      console.log(this.params)
      this.$http.post('/admin/AddArticleServlet', this.$qs.stringify(this.params))
        .then((res) => {
          console.log(res)
        })
    },
    getcategorys () {
      this.$http.get('/admin/FindAllCategoryServlet').then((res) => {
        for (var i in res.data) {
          if (i >= 3) {
            break
          }
          this.categorys.push(res.data[i])
          console.log(this.categorys[0].category_id)
        }
      })
    },
    setData () {
      this.params.title = this.title
      this.params.content = this.content
      this.params.category = 0
    }
  }
}
</script>
