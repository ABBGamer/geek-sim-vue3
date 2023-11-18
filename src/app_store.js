import {ref, watch} from "vue";

export const money = ref(localStorage.getItem("money") | 0);
export const salary = ref(localStorage.getItem("salary") | 1)
export const price = ref(localStorage.getItem("price") | 10)

watch(money,(value)=>localStorage.setItem('money',String(value)))
watch(salary,(value)=>localStorage.setItem('salary',String(value)))
watch(price,(value)=>localStorage.setItem('price',String(value)))
