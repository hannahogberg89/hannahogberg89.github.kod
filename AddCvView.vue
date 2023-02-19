




<template>
  <h1>ADD CV</h1>

  <div class="container">
    <h2>LOGIN</h2>
    {{ email }} {{ '' }}
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p>
      <input type="password" placeholder="Password" v-model="password" />
    </p>
    <div id="example-3">
      <button v-on:click="say('KLAR')">KLAR!</button>
    </div>
    <p class="error-message" v-if="password.length < 6">Lösenordet måste innehålla minst 6 tecken.</p>
    <p class="correct-message" v-else>Starkt Lösenord</p>

  </div>

</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  }, methods: {
    say: function (message) {
      alert(message)
    }
  }
}

</script>

<style lang="scss" scoped>
.error-message {
  color: rgb(255, 0, 25);
}

.correct-message {
  color: rgb(33, 112, 67);
}
</style>
