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
          <ul>
          <li v-for="item in items">
          <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>

            <v-card-title>{{ item.title }}</v-card-title>

            <v-card-text>
              <v-row
                align="center"
                class="mx-0"
              >
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">
                  4.5 (413)
                </div>
              </v-row>

              <div class="my-4 text-subtitle-1">
                $ • Italian, Cafe
              </div>

              <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Tonight's availability</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip>5:30PM</v-chip>

                <v-chip>7:30PM</v-chip>

                <v-chip>8:00PM</v-chip>

                <v-chip>9:00PM</v-chip>
              </v-chip-group>
            </v-card-text>

            <v-card-actions>
              <v-btn
                color="deep-purple lighten-2"
                text
                @click="reserve"
              >
                Reserve
              </v-btn>
            </v-card-actions>
          </v-card></li>
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
import Card from '@/components/Card.vue'
export default {

  data: () => ({
    posts: [],
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
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
