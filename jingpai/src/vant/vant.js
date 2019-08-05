import Vue from 'vue'

import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { Button ,Divider } from 'vant';

export default ()=>{
    Vue.use(Button);
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(Lazyload);
    Vue.use(Button).use(Divider);

}

