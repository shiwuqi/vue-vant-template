<template>
  <van-tabbar v-model="active" class="vant__tabbar">
    <van-tabbar-item v-for="item in tabbar" :key="item.id" :to="item.path">
      <span>{{item.name}}</span>
      <span slot="icon" :class="item.icon"></span>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
const tabbar = [
  {
    id: 0,
    icon: "iconfont icon-home",
    name: "首页",
    path: "/"
  },
  {
    id: 1,
    icon: "iconfont icon-shangcheng",
    name: "商城",
    path: "/store"
  },
  {
    id: 2,
    icon: "iconfont icon-geren",
    name: "我的",
    path: "/person"
  }
];
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: 0,
      tabbar: tabbar
    };
  },
  mounted() {
    this.setActive(this.$route.path);
  },
  methods: {
    setActive(val) {
      this.tabbar.forEach(item => {
        if (item.path === val) {
          this.active = item.id;
        }
      });
    }
  }
};
</script>

<style lang="less">
.vant__tabbar {
  background-color: #f7f7fa !important;
}
</style>


