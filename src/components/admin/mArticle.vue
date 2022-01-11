<template>
  <div>
    <h1>管理文章 <a @click="toWrite" style="font-size: 15px">新增</a></h1>
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="6">
        <div></div>
      </el-col>
      <el-col :span="8">
        <div>
          <el-row type="flex" class="row-bg" justify="end">
            <el-input v-model="input" placeholder="请输入关键字"></el-input>
            <el-select
              v-model="value"
              placeholder="请选择分类"
              @select="setCategory"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.category_name"
                :value="item.category_id"
              >
              </el-option>
            </el-select>
            <el-button type="primary" @click="search()">查询</el-button>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        :span="24"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column width="120">
          <template slot-scope="scope">
            <el-tag>{{ scope.row.cCount }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="标题" width="700">
          <template slot-scope="scope">
            <a href="">{{ scope.row.title }}</a>
          </template>
        </el-table-column>
        <el-table-column label="作者" width="200">
          <template slot-scope="scope">
            <a href="">{{ scope.row.author }}</a>
          </template>
        </el-table-column>
        <el-table-column label="分类" width="200">
          <template slot-scope="scope">
            <a href="">{{ scope.row.category_name }}</a>
          </template>
        </el-table-column>
        <el-table-column label="日期" width="200" show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.createDate }}</template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button
              @click.native="toEdit(scope.$index)"
              type="text"
              size="small"
            >
              编辑
            </el-button>
            <el-button
              @click.native="deleteData(scope.$index)"
              type="text"
              size="small"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      tableData: [],
      multipleSelection: [],
      options: [],
      value: '',
      params: {},
      aid: 0
    }
  },
  mounted: function () {
    this.getcategorys()
    this.getData()
  },
  methods: {
    toWrite () {
      this.$router.push('/write')
    },
    toEdit (e) {
      this.aid = this.tableData[e].id
      console.log(this.aid)
      this.$router.push({
        path: '/eArticle',
        query: {
          aid: this.aid
        }
      })
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    getData () {
      this.$http.get('/FindAllArticleServlet').then((res) => {
        this.tableData = res.data
      })
    },
    getcategorys () {
      this.$http.get('/admin/FindAllCategoryServlet').then((res) => {
        this.options.push({ category_name: '所有分类' })
        for (var i in res.data) {
          this.options.push(res.data[i])
        }
      })
    },
    search () {
      if (this.options[this.value].category_name === '所有分类') {
        this.getData()
        return
      }
      this.setData()
      this.$http
        .post('/FindArticleServletOne', this.$qs.stringify(this.params))
        .then((res) => {
          this.tableData = []
          this.tableData = res.data
          // this.tableData.push(res.data)
        })
    },
    setData () {
      this.params.title = this.input
      // this.params.category = this.options[this.value].category_name
    },
    setCategory () {
      this.params.category = this.options[this.value].category_name
    },
    deleteData (e) {
      this.aid = this.tableData[e].id
      this.$http
        .post('/admin/DelArticleServlet', this.$qs.stringify({ id: this.aid }))
        .then((res) => {
          if (res.data.status === 200) {
            this.$notify({
              title: '删除成功',
              message: res.data.msg,
              type: 'success'
            })
          }
          this.getData()
        })
    }
  }
}
</script>
