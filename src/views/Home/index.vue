<template>
  <div class="home">
    home
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import { loginIn } from '@/api/login'
import TabBar from '@/components/common/TabBar.vue'
export default {
  name: 'home',
  components: {
    TabBar
  },
  mounted() {
    // this.loginIn()
  },
  methods: {
    async loginIn() {
      const res = await loginIn({ account: 'admin', password: '123456' })
      if (res.status === '00') {
        console.log(res)
      }
    }
  }
}
</script>
