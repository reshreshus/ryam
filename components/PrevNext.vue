<template>
  <div class="flex flex-col justify-between">
    <div v-if="prev" class="">
      <div class="">
        Prev. article
      </div>
      <NuxtLink
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
        class="font-bold text-primary hover:underline"
      >
        {{ prev.title }}
      </NuxtLink>
    </div>
    <span v-else>&nbsp;</span>
    <div v-if="next" class="">
      <div class="">
        Next. article
      </div>
      <NuxtLink
        :to="{ name: 'blog-slug', params: { slug: next.slug } }"
        class="font-bold hover:underline"
      >
        {{ next.title }}
      </NuxtLink>
    </div>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
