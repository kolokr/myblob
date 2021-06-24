import Vue from "vue"
/**
 * 获取组件根标签
 * @param {*} comp 组件
 * @param {*} props 属性
 */
export default function (comp, props) {
    const vm = new Vue({
        render: (h) => h(comp, {
            props
        })
    })
    vm.$mount();
    return vm.$el;
}