export default {
  methods: {
    linkTo (url) {
      if(!url) return false
      if(/^http/.test(url)){
        window.location.href = url
      }else{
        this.$router.push(url)
      }
    }
  }
}
