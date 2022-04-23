<template>
  <div class="mt-10 flex flex-wrap">
    <div
      v-for="(photo, idx) in photos"
      :key="idx"
      class="p-4 w-80 h-100 max-w-full"
    >
      <img
        :src="require(`@/assets/photos/${photo.src}`)"
        :alt="photo.desc"
        class="img object-cover cursor-pointer transform duration-300"
      >
      <p> {{ photo.desc }} </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [
        {
          src: 'reshi-crop.jpg',
          desc: 'wild reshreshus caught on photo',
          date: '29.12.2021'
        },
        {
          src: 'dendenmushi_and_rishat-crop.jpg',
          desc: '2 hot guys',
          date: '29.12.2021'
        }
      ]
    }
  },

  head() {
    return {
      title: 'Photos of Ryam',
      meta: {
        description: 'Family friendly'
      }
    }
  }
}
</script>

<style lang="sass">
.img
  position: relative
  &:active
    transform: scale(2)
    z-index: 10
</style>
