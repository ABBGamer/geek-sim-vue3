<template>
  <v-app-bar :elevation="1">
    <div :style="{fontSize: is_mobile?'16px':'24px'}">
      Симулятор компьютерщика
      <div style="font-size: 12px" v-if="!is_mobile"> Ваши деньги: {{ money }}</div>
    </div>
    <template v-slot:append>
      <v-switch style="margin-top: 13px;" @click="toggleTheme" inset
                :label="displayLabel"></v-switch>
    </template>
  </v-app-bar>
</template>

<script>
import {useTheme} from "vuetify";
import {app} from "../../app_config";
import {money} from "@/app_store";
import {computed} from "vue";

export default {
  setup() {
    const is_mobile = app.is_mobile
    const displayLabel = computed(() => is_mobile ? '' : !theme.global.current.value.dark ? 'Cветлая' : 'Темная')
    const theme = useTheme()
    const toggleTheme = () => {
      theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }

    return {
      is_mobile,
      theme,
      displayLabel,

      money: money,

      toggleTheme
    }
  }
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
</style>