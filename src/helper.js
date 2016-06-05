let randomScalingFactor = function () {
  // return Math.round(Math.random() * 24 * (Math.random() > 0.5 ? -1 : 1))
  return Math.round(Math.random() * 12)
}
let randomColorFactor = function () {
  return Math.round(Math.random() * 255)
}
let randomColor = function (opacity) {
  return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')'
}

export default {
  randomColor: randomColor,
  randomScalingFactor: randomScalingFactor,
}

