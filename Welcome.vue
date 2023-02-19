<script>
export default {
  props: {
    msg: String
  }
}
</script>

<style>
p {
  font-size: 20px;
  font-weight: bold;
  color: brown
}
</style>

<template>
  <img alt="" width="900" height="600" src="/assets/joao-ferrao-4YzrcDNcRVg-unsplash.jpg" />
  <p>{{ msg }}</p>
</template>
