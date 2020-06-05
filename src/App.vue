<template>
  <div id="app">
    <Welcome />
    <router-view />
  </div>
</template>

<script>
import Welcome from "@/components/Welcome";
export default {
  name: "App",
  components: {
    Welcome
  }
};
</script>

<style></style>
