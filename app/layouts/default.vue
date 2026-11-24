<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

const {
  initReveal,
  destroyReveal
} = useReveal()


onMounted(() => {
  initReveal()
})


onBeforeUnmount(() => {
  destroyReveal()
})
</script>

<template>
  <Header />
  <main class="flex-grow-1">
    <slot />
  </main>
  <Footer />
</template>