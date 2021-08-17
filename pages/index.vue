<template>
  <div class="h-full w-4/5 mx-auto flex flex-col items-center justify-center">
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
  </div>
</template>

<script>
export default {
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
