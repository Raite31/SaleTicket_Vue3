<template>
  <div>
    vue3新写法
    {{myname}}
    <button @click="handleClick()">change</button>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  // vue3老写法或者vue写法中beforeCreate，created生命周期 === setup
  setup() {
    const myname = ref("lee") // .value属性
    const handleClick = () => {
        console.log(myname)
        myname.value = "xiaoming"
    };

    return {
      handleClick,
      myname
    };
  },
};
</script>