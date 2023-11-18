<template>
  <v-app>
    <div class="wrapper">
      <PageHeader />
      <PageContent :name="name"/>
      <PageFooter/>
    </div>
  </v-app>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
import PageContent from "@/components/PageContent.vue";
import {ref} from "vue";

export default {
  components: {PageFooter, PageContent, PageHeader},
  setup(){
    const name = ref('Пользователь');
    return {
      name,
    }
  }

}

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
  height: 100vh;
}

.wrapper {
  flex-direction: column;
}


</style>
