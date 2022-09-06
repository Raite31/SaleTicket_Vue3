<template>
  <div>
    todo
    <!-- {{obj.mytext}} -->
    <input type="text" v-model="obj.mytext" ref="mytestref"/>
    <button @click="handleAdd">add</button>
    <ul>
        <li v-for="data in obj.datalist" :key="data">
            {{data}}
        </li>
    </ul>
  </div>
</template>
<script>
import { reactive,ref } from 'vue';
export default {
    data(){
        return {
            myname: 'lee'
        }
    },
    setup(){
        const obj = reactive({
            mytext: '',
            datalist: []
        })
        const mytestref = ref() // 创建ref对象
        const handleAdd = () => {
            console.log(mytestref.value.value) // 必须.value才是拿到原生dom节点; .value.value的时候是拿到输入框里的值
            obj.datalist.push(obj.mytext)
            obj.mytext = ''
        }
        return {
            obj,
            handleAdd,
            mytestref
        }
    }
};
</script>