<template>
  <div class="ml-20 md:ml-32 xl:ml-56 h-min-full w-[600px] max-w-full py-20 flex flex-col items-start justify-center">
    <img :src="require('@/assets/jpg/ryam-gone.jpg')" alt="Ryam" class="max-w-md w-4/5 rounded">
    <nuxt-content :document="about" class="mt-5 prose w-[65ch] max-w-full" />
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
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">
#__nuxt, #__layout, body, html
  @apply h-full
</style>
