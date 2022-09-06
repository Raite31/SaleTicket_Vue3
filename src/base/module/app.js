import axios from "axios";
import { onMounted, reactive } from "vue";
function getData1() {
    const obj1 = reactive({
        list: [],
    })
    onMounted(() => {
        axios.get("/test1.json").then((res) => {
            console.log(res.data);
            obj1.list = res.data.list;
        });
    });
    return obj1
}
function getData2() {
    const obj2 = reactive({
        list: [],
    })
    onMounted(() => {
        axios.get("/test2.json").then((res) => {
            console.log(res.data);
            obj2.list = res.data.list;
        });
    });
    return obj2
}
export { getData1, getData2 }