<template>
  <div class="h-full">
    <sidebar class="mt-5 md:mt-0" />
    <Nuxt class="pl-6 md:pl-20 md:pl-32 xl:pl-56" />
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
