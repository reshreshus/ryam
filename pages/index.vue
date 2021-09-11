<template>
  <div class="ml-20 md:ml-32 xl:ml-56 h-min-full w-[600px] max-w-full py-20 flex flex-col items-center justify-center">
    <!-- <img :src="require('@/assets/ryam-cropped-hehe.jpg')" alt="Ryam" class="max-w-md w-4/5 mx-auto rounded"> -->
    <nuxt-content :document="about" class="prose w-[65ch] max-w-full" />
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
