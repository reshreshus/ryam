<template>
  <div class="mt-10">
    <h1 class="mb-5 text-3xl"> Links and resources </h1>

    <div class="space-y-5">
      <div
        v-for="(section, idx) in links"
        :key="idx"
      >
        <h3 class="text-xl" >
          {{ section.title }}
        </h3>
        <ul
          class="ml-8 list-disc"
        >
          <li
            v-for="(link, jdx) in section.links"
            :key="jdx"
            class=""
          >
            <a
              :href="link.link"
              :alt="link.description ? link.description : link.label"
              class="text-blue"
            >
              {{ link.label }}
            </a>
            <p class="ml-4">
              {{ link.description }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          title: 'Programming',
          links: [
            {
              link: 'https://lukesmith.xyz/',
              label: 'lukesmith.xyz',
              description: ''
            },
            {
              link: 'http://catb.org/~esr/faqs/hacker-howto.html#respect1',
              label: 'Hot to become a hacker',
              description: ''
            },
            {
              link: 'https://www.yegor256.com/',
              label: 'yegor256.com',
              description: ''
            }
          ]
        },
        {
          title: 'Spirituality',
          links: [
            {
              link: 'https://www.goodreads.com/book/show/44321378-lsd-and-the-mind-of-the-universe?ref=nav_sb_ss_1_32',
              label: 'LSD and the Mind of the Universe',
              description: 'by Christopher M. Bache'
            },
            {
              link: 'https://www.goodreads.com/book/show/639864.Autobiography_of_a_Yogi?ac=1&from_search=true&qid=ESyLbnsjUA&rank=1',
              label: 'Autobiography of a Yogi',
              description: 'by Paramahansa Yogananda'
            }
          ]
        }
      ]
    }
  }
}
</script>
