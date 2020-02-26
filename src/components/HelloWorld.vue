<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button>hello</el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
p{
  color:rgb(51,51,51);
}
</style>
