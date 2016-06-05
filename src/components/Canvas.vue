<template>
  <div id="board">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import Config from './config'
import Chart from 'chart.js'
export default {
  props: ['onLoad'],
  methods: {
    foo () {
      let roster = new Config.Roster()
      let _this = this
      roster.wake(function () {
        _this.$dispatch('wake-up', {})
      })
      roster.walk(function (xs, ys, zs) {
        let yss = [
          {
            'label': '雄州雾列',
            'data': zs,
          },
          {
            'label': '俊采星驰',
            'data': ys,
          }
        ]
        let config = Config.generateConfig(xs, yss)
        console.log(config)
        let ctx = document.getElementById("canvas").getContext("2d")
        window.myLine = new Chart(ctx, config)
      })
    },
  },

  ready () {
    this.foo()
  },

  data () {
    return {
    }
  }
}
</script>

<style>
#board {
  width: 180%;
}
</style>
