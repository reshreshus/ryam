<template>
  <div class="text-xl flex items-center space-x-6 md:space-x-0 ml-6 md:ml-0 md:block md:fixed left-6 top-10">
    <nuxt-link to="/" class="text-2xl">
      <span class="text-blue-dark">R</span>
      <span class="text-pink">Y</span>
      <span class="text-yellow-bright">A</span>
      <span class="">M</span>
    </nuxt-link>
    <div class="ml-2 md:ml-0 md:mt-2 flex md:flex-col items-start space-x-5 md:space-x-0">
      <nuxt-link
        v-for="item in menu"
        :key="item.link"
        :to="item.link"
        class="text-blue hover:text-blue-dark"
        :class="{'-selected': selected(item.link)}"
      >
        {{ item.title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        {
          title: 'Blog',
          link: '/blog'
        },
        {
          title: 'Links',
          link: '/links'
        },
        {
          title: 'Photos',
          link: '/photos'
        }
      ]
    }
  },
  methods: {
    selected (link) {
      return link === this.$route.path
    }
  }
}
</script>

<style lang="sass" scoped>
.-selected
  @apply relative text-blue-dark
  &::before
    content: '['
    left: -7px
  &::after
    content: ']'
  &::before, &::after
    position: absolute

</style>
