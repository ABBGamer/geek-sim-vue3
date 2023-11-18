<template>
  <div class="content">
    <div>
      <div style="font-size: 35px; font-weight: bold">{{ money }} ₽
      </div>
      <v-btn @click="addMoney" prepend-icon="$vuetify" stacked variant="outlined">
        Button
      </v-btn>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    let money = ref(0);
    const addMoney = () => {
      money.value += 1;
      console.log(money)
    }
    return {
      money,
      addMoney
    }
  }
}


</script>

<style scoped>

</style>