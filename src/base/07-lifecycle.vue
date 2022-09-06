<template>
  <div>
    生命周期
    <ul>
      <li v-for="data in obj.list" :key="data">
        {{ data }}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import { onBeforeMount, onMounted, reactive } from "vue";
export default {
  setup() {
    const obj = reactive({
      list: [],
    });
    // lieecycle要在setup里面写
    onBeforeMount(() => {
      console.log("dom上树前");
    });
    onMounted(() => {
      console.log("dom上树");
      setTimeout(() => {
        obj.list = [1, 2, 3, 4, 5];
      }, 2000);
    });
    return {
      obj,
    };
  },
};
</script>