<template>
  <div class="wrapper">
    <PageHeader/>
    <PageContent>
      <img alt="Vue logo" src="./assets/logo.png">
    </PageContent>
    <PageFooter/>
  </div>

</template>

<script>

import {defineComponent} from "vue";
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
import PageContent from "@/components/PageContent.vue";

export default defineComponent({
  components: {PageContent, PageFooter, PageHeader}
})
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
  flex-grow: 1;
}
</style>
