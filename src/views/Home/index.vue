<template>
  <div class="home">
    <div class="demo-block">
      <img class="demo-img" v-for="(img, index) in imageList" v-lazy="img" :key="index">
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/TabBar.vue";
import helper from "@/mixins/helper";
import { mapState, mapActions } from 'vuex';
export default {
  name: "home",
  mixins: [helper],
  components: {
    TabBar
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      imageList: state => state.example.imageList
    })
  },
  mounted() {
    this.queryImgList((data) => {
      this.$toast(data.log)
    })
  },
  methods: {
    ...mapActions({
      queryImgList: 'example/queryImgList'
    })
  }
};
</script>

<style lang="less">
.demo-block {
  padding: 0 15px 60px 15px;
  .demo-img {
    padding: 15px;
    width: 100%;
    height: 250px;
    margin: 10px 0 0;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    background-size: 315px 250px;
    background-position: 15px;
    background-repeat: no-repeat;
    box-sizing: border-box;
  }
}
</style>

