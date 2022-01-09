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
          <el-select v-model="value" placeholder="所有分类">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
           <el-button type="primary">我是按钮</el-button>
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
                <el-tag :type="info">{{scope.row.cCount}}</el-tag>
            </template>
        </el-table-column>
        <el-table-column label="标题" width="700">
          <template slot-scope="scope">
            <a href="">{{ scope.row.title }}</a>
          </template>
        </el-table-column>
        <el-table-column label="作者" width="200">
          <template slot-scope="scope">
            <a href="">{{ scope.row.name }}</a>
          </template>
        </el-table-column>
        <el-table-column label="分类" width="200">
          <template slot-scope="scope">
            <a href="">{{ scope.row.category }}</a>
          </template>
        </el-table-column>
        <el-table-column label="日期" width="200" show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="editRow(scope.$index, tableData)"
              type="text"
              size="small"
            >
              编辑
            </el-button>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
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
      tableData: [
        {
          title: 'java21天从入门到放弃',
          cCount: 12,
          date: '2016-05-03',
          name: '王小虎',
          category: '书籍'
        },
        {
          title: '论小组作孽的二十一种方式',
          cCount: 12,
          date: '2016-05-02',
          name: '王小虎',
          category: '书籍'
        },
        {
          title: '摸鱼的一百种方法',
          cCount: 12,
          date: '2016-05-04',
          name: 'LingD',
          category: '书籍'
        }
      ],
      multipleSelection: [],
      options: [
        {
          value: '选项1',
          label: '书籍'
        },
        {
          value: '选项2',
          label: '课程'
        },
        {
          value: '选项3',
          label: '网课'
        }
      ],
      value: ''
    }
  },
  methods: {
    toWrite () {
      this.$router.push('/write')
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
    }
  }
}
</script>
