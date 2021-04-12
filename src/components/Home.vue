<template>
  <div>
    <el-button type="info" @click="logOut">退出</el-button>

  </div>
</template>

<script>
  export default {
    name: "Home.vue",
    methods: {
      logOut() {
        this.$confirm('此操作将退出登录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          window.sessionStorage.clear()
          this.$message({
            type: 'success',
            message: '已退出登录!'
          });
          this.$router.push('/login')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消登录'
          });
        });
      }
    }
  }
</script>

<style scoped>

</style>