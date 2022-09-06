<template>
  <div>
    vue3新写法
    {{ obj.myname }}
    <button @click="handleClick()">change</button>


    
  </div>
</template>
<script>
import { reactive } from 'vue';
export default {
    // vue3老写法或者vue写法中beforeCreate，created生命周期 === setup
    setup(){
        console.log("setup")
        
        // 定义状态
        const obj = reactive({
            myname: "lee",
            myage: 100
        })
        const handleClick=() => {
            // console.log("111111111111")
            obj.myname = "xiaoming"
        }
        return {
            obj,
            handleClick
        }
    }
};
</script>