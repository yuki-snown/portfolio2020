<template>
    <v-container class="top-team-list ff7-card">
      <v-row dense align="center">
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <br>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>
                <h3 v-text="item.artist"></h3>
                <br>
                <br>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          color: '#81D4FA',
          title: 'favolyric',
          artist: 'レコチョクハッカソンで作成した音楽検索サービス',
        },
        {
          color: '#FF80AB',
          title: 'otoshidama-m',
          artist: 'サイバーエージェントハッカソンで作成したお年玉企画運営サービス',
        },
        {
          color: '#AED581',
          title: 'todo',
          artist: 'オンラインハッカソンで作成したランキング型todoタスク管理サービス',
        },
        {
          color: '#DCE775',
          title: '関学バスアプリ',
          artist: 'flutterで作成した関学-新三田間のバス時刻表アプリ',
        },
        {
          color: '#CE93D8',
          title: 'zip圧縮/解凍アプリ',
          artist: 'C#で作成したzip圧縮/解凍を行うデスクトップアプリ',
        },
      ],
    }),
  }
</script>
