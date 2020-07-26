import trackAction from "./action"; // 自定义埋点上报的方法

export default {
    /**
     * @name UVPV 固定名称不支持修改
     * @desc UV、PV埋点
     * @param {Object} context 当前上下文
     */
    UVPV(_) {
        trackAction("1");
    },
    /**
     * @name TONP 固定名称不支持修改
     * @desc 页面停留时间埋点（Time on Page）
     * @param {Object} context 当前上下文
     * @param {Timestamp} et 进入页面时间
     * @param {Timestamp} dt 离开页面时间
     */
    TONP(_, { et, dt }) {
        trackAction("2", {
            stt: dt - et
        });
    },
    /**
     * @param {Object} context 当前上下文
     * @param {Object} item 事件参数
     * @param {Object} event 事件对象
     */
    18015(
        {
            $route: { name }
        },
        { id },
        { target }
    ) {
        trackAction("18015", {
            id,
            source_page: name,
            target
        });
    },
};