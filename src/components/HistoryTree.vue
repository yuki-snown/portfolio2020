<template>
  <v-timeline>
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :color="year.color"
    >
    <br>
      <div class="py-1">
        <h2
          :class="`headline font-weight-bold --text`"
          :color="year.color"
          v-text="year.year"
        ></h2>
        <h1 :class="`headline font-weight-light mb-4 --text`"
         v-text="year.title"
         :color="year.color"
         ></h1>
        <h3 v-text="year.content"></h3>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
  export default {
    data: () => ({
      years: [
        {
          color: '#F06292',
          year: '2019.7-現在',
          title: 'phoxter',
          content: '機械学習プロダクトの開発',
        },
        {
          color: '#9CCC65',
          year: '2019.11',
          title: "PwC's Cyber Security Hackathon",
          content: 'IoTデバイスのセキュリティの脆弱性調査',
        },
        {
          color: '#9575CD',
          year: '2020.2',
          title: 'mixi bug shooting challenge',
          content: 'ユーザからの情報を元にプロダクトのバグの調査',
        },
        {
          color: '#EEFF41',
          year: '2020.2',
          title: 'Brain(s)con',
          content: 'アナログ写真の日付認識を行うAIモデルを作成',
        },
        {
          color: '#29B6F6',
          year: '2020.2',
          title: 'NISUCON',
          content: 'NTTコミュニケーションズの社内で行われたものと同じISUCON',
        },
        {
          color: '#F06292',
          year: '2020.2',
          title: 'Cyber Agent tech Challenge 2222ハッカソン!!',
          content: 'お年玉企画の運営サービスを開発',
        },
        {
          color: '#9CCC65',
          year: '2020.3',
          title: 'Recruit Speed Hackathon',
          content: 'Hot pepper beautyのフロントエンドチューニング',
        },
        {
          color: '#9575CD',
          year: '2020.3',
          title: 'ドワンゴ　就業型インターンシップ',
          content: 'Androidアプリの開発',
        },
      ],
    }),
  }
</script>