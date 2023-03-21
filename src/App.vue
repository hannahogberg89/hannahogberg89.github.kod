<style>
#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border-radius: red;
}
</style>

<template>
  <nav>
    <ul>
      <ol>
        <RouterLink to="/">Hem</RouterLink>
      </ol>
      <ol>
        <RouterLink to="/addcv">Add CV</RouterLink>
      </ol>
    </ul>
  </nav>
  <main>
    <div id="app">
      <MinKomponent :name="name" />
    </div>

    <RouterView></RouterView>
  </main>
  <Welcome msg="Dela ditt CV med alla!" />
  <EntriesList />
</template>




<script>
import Welcome from './components/Welcome.vue'
import MinKomponent from './MinKomponent.vue'
import EntriesList from './components/EntriesList.vue'


export default {
  name: "App",
  components: {
    Welcome,
    MinKomponent,
    EntriesList,
  },
  data() {
    return {
      name: "CV"
    };
  }
}
</script>
