<template>
  <div>detail</div>
</template>
<script>
import { inject, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  setup(props) {
    const route = useRoute(); // route === this.$route
    const store = useStore(); // store === this.$store
    const isShow = inject("leeShow"); // 直接从App.vue注入进来，控制状态，用于父组件方法状态管理；但是出错了就不好找
    onMounted(() => {
      store.commit("hide");
      console.log(route.params.id);
      isShow.value = false;
    });
    onUnmounted(() => {
      store.commit("show");
      isShow.value = true;
    });
  },
  // mounted() {
  //   // 从路由获取参数
  //   console.log(this.$route.params.id);

  //   this.$store.commit("hide")
  // },
  // beforeUnmount(){
  //   console.log("beforeUnmount")
  // },
  // unmounted() {
  //   this.$store.commit("show")
  // },
};
</script>