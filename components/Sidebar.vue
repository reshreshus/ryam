<template>
  <div class="text-xl fixed left-6 top-20">
    <nuxt-link to="/" class="text-2xl text-blue">
      RYAM
    </nuxt-link>
    <div class="mt-2 flex flex-col">
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
