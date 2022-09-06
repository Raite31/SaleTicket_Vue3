<template>
  <div>
    <!-- 使用input监听的方法 -->
    <!-- <input type="text" v-model="obj.mytext" @input="handleInput" /> -->
    <!-- 使用watch监听的方法，不需要加任何东西，直接下面逻辑那里监听obj.mytext -->
    <input type="text" v-model="obj.mytext" />
    <ul>
      <li v-for="data in obj.datalist" :key="data">
        {{ data }}
      </li>
    </ul>
  </div>
</template>
<script>
import { reactive, computed, watch } from "vue";
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
      oldlist: [
        "aaaaaaaaa",
        "bbbbbbbbb",
        "ccccccccc",
        "abbbbaa",
        "dwdwaaaaaaaaaa",
      ],
    });
    watch(
      // 监察obj.mytext
      () => obj.mytext,
      () => {
        // console.log("watch");
        // 只需监听，作出相应改变，不需要像computed一样有return
        obj.datalist = obj.oldlist.filter((item) => item.includes(obj.mytext));
      }
    );
    const handleInput = () => {
      //   console.log("handelInput");
      obj.datalist = obj.oldlist.filter((item) => item.includes(obj.mytext));
    };

    return {
      obj,
      handleInput,
    };
  },
};
</script>