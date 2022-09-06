<template>
  <div>
    nowplaying
    <ul>
      <li
        v-for="data in datalist"
        :key="data.filmId"
        @click="handleChangePage(data.filmId)"
      >
        {{ data.name }}
        <div>{{ actorFilter(data.actors) }}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import { onMounted, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter(); // router === this.$route
    const obj = reactive({
      datalist: [],
    });
    const handleChangePage = (id) => {
      router.push(`/detail/${id}`);
    };
    const actorFilter = (data) => {
      if (data === undefined) return "暂无主演";
      return data.map((item) => item.name).join("、");
    };
    onMounted(() => {
      axios({
        url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=3269077",
        // 这个headers一定用小写！！！
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.2.0","e":"16562305782017071261024257"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        console.log(res.data.data.films);
        obj.datalist = res.data.data.films;
      });
    });
    return {
      ...toRefs(obj),
      handleChangePage,
      actorFilter,
    };
  },

  /*
  data() {
    return {
      datalist: [],
    };
  },
  methods: {
    handleChangePage(id) {
      this.$router.push(`/detail/${id}`);
    },
    actorFilter(data) {
      if (data === undefined) return "暂无主演";
      return data.map((item) => item.name).join("、");
    },
  },
  mounted() {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=3269077",
      // 这个headers一定用小写！！！
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.0","e":"16562305782017071261024257"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      console.log(res.data.data.films);
      this.datalist = res.data.data.films;
    });
  },
  */
};
</script>