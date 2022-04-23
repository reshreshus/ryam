<template>
  <div class="mt-10 md:mt-20 max-w-[65ch]">
    <ul class="">
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

  head() {
    return {
      title: 'Blog posts'
    }
  },

  methods: {
    formatDate
  }
}
</script>

<style lang="sass" scoped>

</style>
