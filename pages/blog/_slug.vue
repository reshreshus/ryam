<template>
  <article class="w-[1000px] mx-auto flex flex-col items-center">
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <nav>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <nuxt-link :to="`#${link.id}`" :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }">
            {{ link.text }}
          </nuxt-link>
        </li>
      </ul>
    </nav>

    <img :src="article.img" :alt="article.alt" class="w-96">
    <div class="text-sm text-gray">
      Article last updated: {{ formatDate(article.updatedAt) }}
    </div>

    <nuxt-content :document="article" class="mt-5 prose" />

    <prev-next :prev="prev" :next="next" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style lang="sass" scoped>
h1
  font-weight: bold
  font-size: 36px

.nuxt-content
  h2
    font-weight: bold
    font-size: 28px
  h3
    font-weight: bold
    font-size: 22px
  p
    margin-bottom: 20px

.icon.icon-link
  background-image: url('@/assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;

</style>
