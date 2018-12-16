<template>
  <div>
    <p v-html="msg"></p>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="名字">
      </el-table-column>
      <el-table-column
        prop="value"
        label="数值">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary"  size="small" @click="add()">增加</el-button>
  </div>
</template>

<script>
export default {
  name: 'first',
  data () {
    return {
      msg: '测试一下',
      tableData: []
    }
  },
  created: function () {
    this.initData()
  },
  methods: {
    del (row) {
      var self = this
      this.$http.delete('/api/test1/first/' + row.id).then(response => {
        if (response.data.success === 200) {
          self.initData()
        } else {
          this.$message.error('保存失败')
        }
      }).catch(() => {
        this.$message.error('保存失败')
      })
    },
    edit (row) {
      // console.log(row)
      this.$router.push({path: '/test1/firstEdit', query: {id: row.id}})
    },
    add () {
      this.$router.push({path: '/test1/firstEdit'})
    },
    initData: function () {
      var self = this
      this.$http.get('/api/test1/first/all').then(response => {
        if (response.data.success === 200) {
          self.tableData = response.data.values
        }
      }).catch(() => {
        this.$message.error('保存失败')
      })
    }
  }

}
</script>

<style scoped>

</style>
