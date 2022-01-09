<template>
  <div class="mt-10 flex flex-wrap">
    <div
      v-for="(photo, idx) in photos"
      :key="idx"
      class=""
    >
      <img
        :src="require(`@/assets/photos/${photo.src}`)"
        :alt="photo.desc"
        class="p-4 max-w-full w-80 h-80 object-cover"
      >
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
  }
}
</script>

<style>

</style>
