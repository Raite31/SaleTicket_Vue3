<template>
  <div>
    <input type="text" v-model="obj.mytext" />
    <ul>
      <!-- <li v-for="data in filterlist()" :key="data"> -->
      <li v-for="data in computedList" :key="data">
        {{ data }}
      </li>
    </ul>
  </div>
</template>
<script>
import { reactive, computed } from "vue";
export default {
  setup() {
    const obj = reactive({
      mytext: "",
      datalist: [
        "aaaaaaaaa",
        "bbbbbbbbb",
        "ccccccccc",
        "abbbbaa",
        "dwdwaaaaaaaaaa",
      ],
    });
    // 方法的坏处：无缓存，浪费资源
    // const filterlist = () => {
    //   return obj.datalist.filter((item) => item.includes(obj.mytext));
    // };

    // computed属性的好处：有缓存
    const computedList = computed(() => {
      return obj.datalist.filter((item) => item.includes(obj.mytext));
    });
    return {
      obj,
      //   filterlist,
      computedList,
    };
  },
};
</script>