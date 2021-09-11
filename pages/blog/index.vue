<template>
  <div class="mt-10 max-w-[65ch] mx-auto px-5">
    <div class="text-4xl text-center">
      Blog Posts
    </div>
    <ul class="mt-5">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="flex">
          <img :src="article.img" class="w-40 h-32 max-w-full object-cover rounded">
          <div class="ml-5">
            <div class="text-3xl">
              {{ article.title }}
            </div>
            <!-- <p v-if="article.author">
              by {{ article.author.name }}
            </p> -->
            <p class="text-xl text-gray">
              {{ article.description }}
            </p>
            <div class="text-sm text-gray">
              {{ formatDate(article.updatedAt) }}
            </div>
          </div>
        </NuxtLink>
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
      .sortBy('createdAt', 'asc')
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
