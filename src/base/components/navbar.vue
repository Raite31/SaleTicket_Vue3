<template>
  <div>
    <button @click="handleShow">left</button>
    {{ myname }}
    <button>right</button>
  </div>
</template>
<script>
export default {
  props: ["myname", "myid"],
  // mounted() {
  //   console.log(this.myname);
  //   console.log(this.myid);
  // },
  setup(props, { emit }) {
    // {emit}就是ES6的解构写法
    // emit(hook) === this.$emit(类)
    console.log(props.myname, props.myid);
    const handleShow = () => {
      // console.log("left");
      emit("event");
    };
    return {
      handleShow,
    };
  },
};
</script>