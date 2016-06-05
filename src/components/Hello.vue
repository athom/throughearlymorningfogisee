<template>
  <div class="row {{hh}}">
    <div class="col-lg-3"> </div>
    <div class="col-lg-6">

      <div class="alert alert-success alert-dismissible" role="alert">
        {{ msg }}
      </div>

    </div>
    <div class="col-lg-3"> </div>
  </div>
</template>

<script>
export default {
  props: ['hh'],
  data () {
    const adages = [
      'wow! cheer up',
    ]
    let index = Math.round(Math.random() * adages.length)
    let msg = adages[index]
    return {
      msg: msg
    }
  }
}
</script>

<style>
@import '../../node_modules/bootstrap/dist/css/bootstrap.css';
h1 {
  color: #42b983;
}
</style>
