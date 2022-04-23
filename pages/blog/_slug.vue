<template>
  <article class="mt-20 w-[900px] max-w-full flex flex-col items-left">
    <div class="text-4xl text-center text-bold">
      {{ article.title }}
    </div>
    <div class="text-gray text-center">
      {{ article.description }}
    </div>
    <!-- <nav>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <nuxt-link :to="`#${link.id}`" :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }">
            {{ link.text }}
          </nuxt-link>
        </li>
      </ul>
    </nav> -->

    <img :src="article.img" :alt="article.alt" class="mt-5 w-max-full">
    <div class="text-sm text-gray mt-5">
      {{ formatDate(article.updatedAt) }}
    </div>

    <nuxt-content :document="article" class="prose" />

    <prev-next :prev="prev" :next="next" class="mt-20" />
  </article>
</template>

<script>
import { formatDate } from '@/helpers'

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

  head() {
    return {
      title: this.article.title,

      meta: [
        {
          name: 'description',
          content: this.article.description
        },
        // TODO
        // {
        //   name: 'keywords',
        //   content: ''
        // },
        {
          property: 'og:url',
          content: `https://ryam.codes/${this.article.link}`
        },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: this.article.title },
        { property: 'og:description', content: this.article.description ? this.article.description : 'A Blog post by Ryam' },
        { property: 'og:image', content: this.article.img }

      ]
    }
  },

  methods: {
    formatDate
  }
}
</script>

<style lang="sass" scoped>
.icon.icon-link
  background-image: '@/assets/svg/icon-hashtag.svg'

  display: inline-block

  width: 20px

  height: 20px

  background-size: 20px 20px</style>
