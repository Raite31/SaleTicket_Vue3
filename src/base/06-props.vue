<template>
  <div>
    通信
    <navbar myname="home" myid="1111" @event="change"></navbar>
    <sidebar v-show="obj.isShow"></sidebar>
  </div>
</template>
<script>
import navbar from "./navbar.vue";
import sidebar from "./sidebar.vue";
import { reactive } from "vue";
export default {
  components: {
    navbar,
    sidebar,
  },
  setup(props) {
    const obj = reactive({
      isShow: false,
    });
    // 使用vue3 setup这种写法的时候，就这样写，然后dom中添加@event，然后在navbar.vue中解构{emit}触发这个事件
    const change = () => {
      obj.isShow = !obj.isShow;
    };
    return {
      obj,
      change,
    };
  },
};
</script>