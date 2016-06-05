import moment from 'moment'
import AV from 'avoscloud-sdk'
// import {randomColor} from '../helper.js'

class Roster {
  constructor () {
    AV.initialize('Noi61BjaaTSmpaGmyqv2SAuf-gzGzoHsz', 'YfP5EAcXEHeLhdhKv6vunKvT')
  }

  wake (cb) {
    var Morning = AV.Object.extend('GoodMorning')
    var morning = new Morning()
    morning.save({
      date: moment().format('YYYY-MM-DD')
    }, {
      success: function (object) {
        cb()
      },
    })
  }

  walk (cb) {
    let query = new AV.Query('GoodMorning')
    query.descending('createdAt')
    query.find().then(function (results) {
      let xs = []
      let ys = []
      let zs = []
      for (let item of results) {
        const x = item.get('date')
        const y = item.createdAt
        let h = y.getHours()
        const m = y.getMinutes()
        const half = m / 60.0
        h += half
        xs.unshift(x)
        ys.unshift(h)
        let z = randomScalingFactor()
        zs.unshift(z)
      }
      cb(xs, ys, zs)
    }, function (error) {
      console.log(error)
    })
  }
}

var options = {
  legend: {
    position: 'bottom',
  },
  hover: {
    mode: 'label',
  },
  scales: {
    xAxes: [{
      display: true,
      scaleLabel: {
        display: true,
        labelString: '',
      },
    }],
    yAxes: [{
      display: true,
      scaleLabel: {
        display: true,
        labelString: '',
      },
      ticks: {
        beginAtZero: true,
        max: 12,
        stepSize: 1,
      },
    }],
  },
  title: {
    display: true,
    text: 'Through early morning fog I see',
  },
}

let generateConfig = function (xs, yss) {
  let config = {
    type: 'line',
    data: {
      labels: xs,
      datasets: [],
    },
    options: options,
  }
  for (let ys of yss) {
    let item = {
      label: ys.label,
      data: ys.data,
      fill: false,
    }

    const background = randomColor(0.5)
    item.borderColor = background
    item.backgroundColor = background
    item.pointBorderColor = background
    item.pointBackgroundColor = background
    item.pointBorderWidth = 2

    config.data.datasets.push(item)
  }
  return config
}

let randomScalingFactor = function () {
  return Math.round(Math.random() * 12)
}
let randomColorFactor = function () {
  return Math.round(Math.random() * 255)
}
let randomColor = function (opacity) {
  return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')'
}

export default {
  generateConfig: generateConfig,
  Roster
}
