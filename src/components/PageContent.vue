<template>
  <div class="content">
    <div>
      <div>Добро пожаловать, {{ $props.name }}!</div>
      <div style="font-size: 35px; font-weight: bold">
        {{ money }} ₽
      </div>
      <v-tooltip text="Нажми меня">
        <template v-slot:activator="{ props }">
          <v-btn @click="addMoney" prepend-icon="$vuetify" v-bind="props" stacked variant="outlined">
            работать
          </v-btn>
        </template>
      </v-tooltip>
      <div>{{ salary }} ₽ за клик</div>
    </div>
    <div>
      <v-btn @click="addSalary" variant="outlined">
        Улучшить
        {{ price }} ₽
      </v-btn>
    </div>
  </div>
</template>

<script>
import {app} from "../../app_config";
import {money, price, salary} from "@/app_store";


export default {
  props: {
    name: String,
  },
  setup() {

    const addMoney = () => money.value += salary.value

    const addSalary = () => {
      if (money.value - price.value > 0) {
        money.value -= price.value;
        price.value = Math.round(price.value * 1.7);
        salary.value += 1;
      }
    }

    return {
      is_mobile: app.is_mobile,

      price,
      salary,
      money,

      addMoney,
      addSalary
    }
  }
}
</script>

<style scoped>
.content {
  height: 100%;
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
}
</style>