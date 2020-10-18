import Vue from "vue";
import VTrack from "v-track";
import trackEvents from "./track-events";

Vue.use(VTrack, {
    trackEvents, // 埋点事件对象
    trackEnable: {
        UVPV: true, // 是否开启UVPV统计，v0.8.3新增routeUpdate，即在当前路由参数发生改变时埋点，默认为false
        TONP: true // 是否开启页面停留时长统计，默认为false
    }
})