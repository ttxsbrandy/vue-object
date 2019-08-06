import Vue from 'vue'



import {
    Button,
    Step,
    Steps,
    Card,
    Stepper,
    Divider,
    Swipe,
    SwipeItem,
    Lazyload,
    Pagination
} from 'vant';




// 分页

export default () => {
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(Lazyload);
    Vue.use(Button).use(Divider);
    Vue.use(Step).use(Steps)
    Vue.use(Card)
    Vue.use(Stepper)
    Vue.use(Pagination);
}