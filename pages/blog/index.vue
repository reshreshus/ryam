<template>
  <div class="mt-20 max-w-[65ch] mx-auto px-5">
    <div class="text-4xl text-center">
      Blog Posts
    </div>
    <ul class="mt-5">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="flex">
          <img :src="article.img" class="h-80 max-w-full object-cover">
          <div class="ml-5">
            <div class="text-3xl">
              {{ article.title }}
            </div>
            <p v-if="article.author">
              by {{ article.author.name }}
            </p>
            <p class="text-xl">
              {{ article.description }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  }

}
</script>

<style lang="sass" scoped>

</style>
