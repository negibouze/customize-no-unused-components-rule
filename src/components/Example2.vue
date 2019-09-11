<template>
  <hello-world />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './HelloWorld.vue'

@Component({
  components: {
    HelloWorld
  }
})
export default class Example2 extends Vue { }
</script>
