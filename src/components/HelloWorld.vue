<script>
export default {
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
$paragraph-font-weight: bold;

p {
  font-weight: $paragraph-font-weight;
}
</style>

<template>
  <img alt="" src="/assets/fox.jpeg" />
  <p>{{ msg }}</p>
</template>
