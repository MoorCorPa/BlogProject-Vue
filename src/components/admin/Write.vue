<template>
    <div>
        <h1>撰写新文章</h1>
        <el-input v-model="input" placeholder="标题"></el-input>
        <div class="markdown">
            <Markdown/>
        </div>
    </div>
</template>

<script>

import Markdown from 'vue-meditor'

export default {
  components: {
    Markdown
  },
  data () {
    return {
      input: ''
    }
  }
}
</script>
