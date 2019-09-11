<template>
  <hello />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './HelloWorld.vue'

@Component({
  components: {
    Hello: HelloWorld
  }
})
export default class Example2 extends Vue { }
</script>
