<template>
  <div class="text-xl flex items-center space-x-20 md:space-x-0 ml-20 md:ml-0 md:block md:fixed left-6 top-20">
    <nuxt-link to="/" class="text-2xl text-blue">
      RYAM
    </nuxt-link>
    <div class="ml-2 md:ml-0 md:mt-2 flex md:flex-col items-start space-x-5 md:space-x-0">
      <nuxt-link
        v-for="item in menu"
        :key="item.link"
        :to="item.link"
        class="hover:text-blue"
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
          title: 'Videos',
          link: '/videos'
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
  @apply text-blue relative
  &::before
    content: '['
    left: -7px
  &::after
    content: ']'
  &::before, &::after
    position: absolute

</style>
