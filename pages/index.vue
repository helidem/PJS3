<template lang="html">
  <div>
    <main>
    <b-container>
      <b-row>
        <b-col md="12">
          <ul>
            <li v-for="(post,index) in posts" :key="index">
              <nuxt-link :to="{ name: 'posts-id', params:{id: post.slug}}">{{ post.title }}</nuxt-link></li>
          </ul>
          <NavButton/>
        </b-col>
      </b-row>
    </b-container>
    </main>
  </div>

</template>

<script>
import NavButton from '@/components/NavButton.vue'
export default {

  data: () => ({
    posts: []
}),
  async asyncData({store}){
    store.dispatch('posts/all',[
      {
        title : 'Article 1',
        slug : 'article-1',
        content: 'coucou 1'
      },
      {
        title : 'Article 2',
        slug : 'article-2',
        content: 'coucou 2'
      }
    ] )

    return {
      posts: store.state.posts.posts
    }
}

}
</script>

<style lang="css" scoped>
</style>
