<template>
  <div class="home container">    
    <Challenge />
  </div>
</template>

<script>
// @ is an alias to /src
import Challenge from '@/components/Challenge.vue'

export default {
  name: 'home',
  components: {
    Challenge
  }
}
</script>
