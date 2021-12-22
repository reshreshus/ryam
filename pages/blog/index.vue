<template>
  <div class="mt-10 max-w-[65ch]">
    <div class="text-3xl text-center">
      Blog Posts
    </div>
    <ul class="mt-5">
      <li v-for="article of articles" :key="article.slug" class="">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="text-2xl text-blue">
          {{ article.title }}
        </NuxtLink>
        <div class="text-sm text-gray">
          {{ formatDate(article.updatedAt) }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { formatDate } from '@/helpers'

export default {
  async asyncData ({ $content }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author', 'updatedAt'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articles
    }
  },
  methods: {
    formatDate
  }

}
</script>

<style lang="sass" scoped>

</style>
