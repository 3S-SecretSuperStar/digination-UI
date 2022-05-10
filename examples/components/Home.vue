<template>
  <div class="demo-main">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div >
        <h1 class="mb-5 text-5xl font-bold">Digi Button </h1>
        <p class="mb-5">Digi Button plugin.</p>

        <div class="item">
            <digi-button   type="primary" @click="handleClick()" >button</digi-button>
            <digi-button   type="success" >button</digi-button>
            <digi-button   type="info" >button</digi-button>
            <digi-button   type="warning" >button</digi-button>
            <digi-button   type="danger" >button</digi-button>
        </div>
      </div>

    </div>
    <digi-toasts></digi-toasts>
  </div>

</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data () {
    return {
      visible: false,
      plain: true,
      round: true,
      loading: true,
      circle: true,
      disabled: true
    }
  },
  methods: {
    handleClick () {
      // this.$Toast{'123123'}
      this.$toast.success('currentMessage')
    }
  }
}
</script>
<style scoped lang="scss">
.demo-main{
  display: flex;
  justify-content: center;
  text-align: center;
  button{
    margin-right: 10px;
  }
  .item{
    margin-bottom: 20px;
  }
}
</style>
