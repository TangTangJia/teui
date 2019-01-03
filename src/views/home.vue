<template>
  <div>
    <te-button
      type="primary"
      icon="te__icon--checked"
      @click="click"
      class="btn"
    >成功</te-button>
    <te-answer></te-answer>
  </div>
</template>

<script>
    export default {
        methods: {
          click(event){
            console.log(event)
          }
        }
    }
</script>

<style scoped>
</style>