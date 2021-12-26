<template>
  <div class="mt-10">
    <nuxt-content :document="links" class="prose" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const links = await $content('links', 'index').fetch()
    return {
      links
    }
  }
}
</script>
