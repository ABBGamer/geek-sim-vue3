<template>
  <v-app>
    <div class="wrapper">
      <PageHeader>
      </PageHeader>
      <PageContent>
        <img alt="Vue logo" src="./assets/logo.png">
      </PageContent>
      <PageFooter/>
    </div>
  </v-app>
</template>

<script setup>
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
import PageContent from "@/components/PageContent.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}

body {
  margin: 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 100vh;

}
</style>
