<template>
  <div class="hello">
    <h5> <span> <button @click="handleClickTile"> click show</button></span> </h5>
    <h5> <span> <button @click="handleClickhide"> click hide</button></span> </h5>
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
    }
  },
  methods: {
    handleClickTile () {
        let _this = this
        _this.$Loading.show()
        setTimeout(() => {
            _this.$Loading.hide()
        }, 3000);
    },
    handleClickhide () {
        this.$Loading.hide()
    },

  }
}
</script>

<style scoped>
.hello {
  text-align: center;
}
button {
  height: 30px;
  background: #42b983;
  cursor: pointer;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
