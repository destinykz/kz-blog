<template>
  <div class="root">
    <el-container style="height:100%">
      <el-header>
        <el-tabs  v-model="defaultname">
          <el-tab-pane label="博客" name="blog"></el-tab-pane>
          <el-tab-pane label="C/C++" name="cpp"></el-tab-pane>
          <el-tab-pane label="WPF" name="wpf"></el-tab-pane>
          <el-tab-pane label="前端" name="web"></el-tab-pane>
          <el-tab-pane label="生活小记" name="life"></el-tab-pane>
        </el-tabs>
      </el-header>
      <el-aside></el-aside>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      defaultname:"blog"
    }
  }
};
</script>

<style>
</style>
