<template>
  <div class="mt-10 h-min-full w-[600px] max-w-full flex flex-col items-start justify-center">
    <img :src="require('@/assets/jpg/ryam-gone.jpg')" alt="Ryam" class="max-w-md w-4/5 rounded">
    <nuxt-content :document="about" class="mt-5 prose w-[65ch] max-w-full break-words" />
    <div class="mt-12 text-3xl w-full text-center" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const about = await $content('about', 'index').fetch()

    return {
      about
    }
  }
}
</script>

<style lang="sass">
#__nuxt, #__layout, body, html
  @apply h-full
</style>
