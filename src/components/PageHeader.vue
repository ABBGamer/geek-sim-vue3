<template>
  <v-app-bar :elevation="1">
    <div :style="{fontSize: is_mobile?'16px':'24px'}">
      Симулятор компьютерщика
    </div>
    <template v-slot:append>
      <v-switch style="margin-top: 13px;" @click="toggleTheme" inset
                :label="is_mobile?'':!theme.global.current.value.dark ? 'Cветлая' : 'Темная'"></v-switch>
    </template>
  </v-app-bar>
</template>

<script setup>
import {useTheme} from "vuetify";
import {app} from "../../app_config";

const is_mobile = app.is_mobile

const theme = useTheme()
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style scoped>
header {
  padding: 0 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #adadad;
}

.logo {
  font-size: 12px;
  font-weight: bold;
}
</style>