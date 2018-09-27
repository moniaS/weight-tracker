<template>
  <div id="app">
    <TheNavbar></TheNavbar>
    <TheMainContent></TheMainContent>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import TheMainContent from './components/TheMainContent.vue'

export default {
  name: 'app',
  components: {
    TheNavbar,
    TheMainContent
  }
}
</script>

<style>
</style>
