<template>
  <div>
    <div style="background: yellow" v-show="isShow">header</div>
    <ul v-show="$store.state.isTabbarShow">
      <router-link to="/film" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'leeActive' : ''">
          <i class="iconfont icon-all"></i><span>电影</span>
        </li>
      </router-link>
      <router-link to="/cinema" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'leeActive' : ''">
          <i class="iconfont icon-comments"></i><span>影院</span>
        </li>
      </router-link>
      <router-link to="/center" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'leeActive' : ''">
          <i class="iconfont icon-account"></i><span>我的</span>
        </li>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
import { ref, provide } from "vue";
export default {
  setup(props) {
    const isShow = ref(true);
    provide("leeShow", isShow); // provide
    return {
      isShow,
    };
  },
  data() {
    return {
      mytext: "",
    };
  },
  components: {},
  directives: {
    hello: {
      mounted() {
        console.log("mounted");
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.leeActive {
  color: red;
}
</style>