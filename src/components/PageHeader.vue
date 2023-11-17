<template>
  <header>
    <div class="logo">Симулятор компьютерщика</div>
    <v-btn @click="toggleTheme" icon="$vuetify" variant="tonal">
    </v-btn>
  </header>

</template>

<script setup>
import {useTheme} from "vuetify";

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