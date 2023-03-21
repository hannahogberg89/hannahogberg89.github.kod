

<script>
export default {
  created() {

    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
      .then((response) => response.json())
      .then((data) => {
        this.data = data
        console.log(data)

      })
  },
  data() {
    return {
      data: null,
      login: true
    }
  }
}


</script>

<template>
  <div :key="data.body" v-for="data in data">
    <h2>{{ data.name }}</h2>
    <h2>{{ data.email }}</h2>
    <h2>{{ data.body }}</h2>
  </div>
</template>

<style lang="scss" scoped>
$border-color: rgb(236, 242, 236);

div {
  border: solid 1px $border-color;
  border-width: 10px;
  margin: auto;
}
</style>
