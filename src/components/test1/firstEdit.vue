<template>
  <div>
    <el-input v-model="firstOne.name"></el-input>
    <el-input v-model="firstOne.value"></el-input>
    <el-button type="primary"  size="small" @click="save">保存</el-button>
    <el-button type="primary"  size="small" @click="back">返回</el-button>
  </div>
</template>

<script>
export default {
  name: 'firstEdit',
  data () {
    return {
      id: 0,
      firstOne: {}
    }
  },
  created: function () {
    this.initData()
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    save () {
      this.$http({
        method: this.id ? 'put' : 'post',
        url: '/api/test1/first',
        data: this.firstOne
      }).then(response => {
        if (response.data.success === 200) {
          this.$message.success('保存成功')
        } else {
          this.$message.error('保存失败')
        }
      }).catch(() => {
        this.$message.error('保存失败')
      })
    },
    initData: function () {
      this.id = this.$route.query.id
      if (this.id === undefined) {
        return
      }
      var self = this
      this.$http.get('/api/test1/first/' + self.id).then(function (response) {
        if (response.data.success === 200) {
          self.$data.firstOne = response.data
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  }

}
</script>

<style scoped>

</style>
