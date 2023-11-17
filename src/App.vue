<!--<template>-->
<!--  <div class="wrapper">-->
<!--    <div>-->

<!--    </div>-->
<!--    <PageHeader/>-->
<!--    <PageContent>-->
<!--      <img alt="Vue logo" src="./assets/logo.png">-->
<!--    </PageContent>-->
<!--    <PageFooter/>-->
<!--  </div>-->

<!--</template>-->

<template>
  <v-app>
    <v-btn @click="toggleTheme">toggle theme</v-btn>

    <div style="margin-top: 10px">
      <v-btn>test</v-btn>

    </div>
    <div style="display: flex;justify-content: center">
      <div style="margin-top: 10px; width: 50%">
        <v-combobox
            label="Combobox"
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
            variant="solo-inverted"
        ></v-combobox>
      </div>
    </div>
  </v-app>
</template>

<script setup>

// import {defineComponent} from "vue";
// import PageHeader from "@/components/PageHeader.vue";
// import PageFooter from "@/components/PageFooter.vue";
// import PageContent from "@/components/PageContent.vue";

import {useTheme} from 'vuetify'

const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

// export default defineComponent({
//   components: {PageContent, PageFooter, PageHeader}
// })
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
