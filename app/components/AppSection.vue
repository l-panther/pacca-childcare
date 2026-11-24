<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },

  containerClass: {
    type: String,
    defauilt: '',
  },
  aria: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section :id="id" :class="['section', containerClass]">
    <div class="container"
    role="region"
    :aria-labelledby="aria"
    >
      <slot />
    </div>
  </section>
</template>