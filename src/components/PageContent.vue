<template>
  <div class="content">
    <div>
      <div>Добро пожаловать, {{ name }}!</div>
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
import {ref, toRefs} from "vue";
import {app} from "../../app_config";


export default {
  props: {
    name: String,
  },
  setup(props) {
    const money = ref(localStorage.getItem("money") | 0);
    const salary = ref(localStorage.getItem("salary") | 1)
    const price = ref(localStorage.getItem("price") | 10)
    const {name} = toRefs(props)
    const addMoney = () => {
      money.value += salary.value;
      localStorage.setItem("money", money.value.toString())
    }

    const addSalary = () => {
      if (money.value - price.value > 0) {
        money.value -= price.value;
        price.value = Math.round(price.value * 1.7);
        salary.value += 1;
        localStorage.setItem("money", money.value.toString())
        localStorage.setItem("salary", salary.value.toString())
        localStorage.setItem("price", price.value.toString())
      }
    }
    return {
      is_mobile: app.is_mobile,
      // eslint-disable-next-line
      name,
      money,
      price,
      salary,
      addMoney,
      addSalary
    }
  }
}


</script>

<style scoped>

</style>