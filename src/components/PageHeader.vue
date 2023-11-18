<template>
  <v-app-bar :elevation="1">
    <div :style="{fontSize: is_mobile?'16px':'24px'}">
      Симулятор компьютерщика
      <div style="font-size: 12px" v-if="!is_mobile"> Ваши деньги: {{ money }}</div>
    </div>
    <template v-slot:append>
      <v-switch style="margin-top: 13px;"
                inset
                v-model="localTheme"
                true-value="dark"
                false-value="light"
                :label="displayLabel"
      ></v-switch>
    </template>
  </v-app-bar>
</template>

<script>
import {app} from "../../app_config";
import {localTheme, money} from "@/app_store";
import {computed} from "vue";

export default {
  setup() {
    const is_mobile = app.is_mobile
    const displayLabel = computed(() => is_mobile ? '' : localTheme.value === "dark" ? 'Темная' : 'Cветлая')

    return {
      is_mobile,
      displayLabel,

      money: money,

      localTheme
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