<template>
  <div class="h-min-full w-4/5 mx-auto py-20 flex flex-col items-center justify-center">
    <img :src="require('@/assets/ryam-cropped-hehe.jpg')" alt="Ryam" class="max-w-md w-4/5 mx-auto rounded">
    <div class="mt-8 text-5xl">
      Hello there, this is Ryam.
    </div>
    <div class="text-3xl mt-2">
      <!-- I am the most woke empty-house billionaire developer, <br>
      in particular, a world class S-rank web developer. -->
      My class is Tech Magician. My speciality is front-end, design and drawing
    </div>
    <div class="">
      <div class="text-3xl mt-4">
        My Current Level:
      </div>
      <div v-for="(skill, idx) in skills" :key="idx" class="text-2xl">
        <span class="text-red"> {{ skill.name }} </span> : <span class="text-blue"> {{ skill.exp }} </span>
      </div>
    </div>
    <div class="mt-12 text-4xl w-full text-center">
      Donate to my Monero wallet
      <div class="text-2xl break-words">
        43rL42d12AZV2TPECztzuF7VBg5y7U279dJQaLoefHcgDxDpsNqhpE4ftGtWdqaSs3WTn11jY8NRHabKDt5BqYfCVGq6UoS
      </div>
    </div>

    <div class="mt-20 max-w-full px-5">
      <div class="text-4xl text-center">
        Blog Posts
      </div>
      <ul class="mt-5">
        <li v-for="article of articles" :key="article.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="flex">
            <img :src="article.img" class="h-80 max-w-full">
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
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  },
  data () {
    return {
      skills: [
        {
          name: 'Tech Magic',
          exp: 1.5
        },
        {
          name: 'Training',
          exp: 0.3
        },
        {
          name: 'Hidden Skill',
          exp: 2.25
        }
      ]
    }
  }
}
</script>

<style lang="sass">
#__nuxt, #__layout, body, html
  @apply h-full
</style>
