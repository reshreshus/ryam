<template>
  <div class="h-full">
    <sidebar class="mt-5 md:mt-0" />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'DeafultLayout'
}
</script>

<style lang="sass" >
#__layout, body
  min-height: 100%
</style>
