<template>
  <section>
    <v-container class="top-team-list ff7-card">
      <v-row align="center">
        <v-col cols="12">
          <br />
          <h1>yuki's portfolio</h1>
          <br />
          <br />
          <v-row justify="center">
            <v-img src="https://pbs.twimg.com/profile_images/1226786060186746880/KZW4E8XQ_400x400.jpg" 
            />
          </v-row>
        </v-col>
        <v-col cols="6">
            <br />
          <v-row>
            <h1>名前:</h1>
          </v-row>
            <br />
          <v-row>
            <h1>生年月日:</h1>
          </v-row>
            <br />
          <v-row>
            <h1>所属:</h1>
          </v-row>
            <br />
            <br />
          <v-row>
            <router-link to="/twitter">
              <v-btn x-large >
                <v-img src="https://abs.twimg.com/favicons/twitter.ico" aspect-ratio="1"></v-img>
              </v-btn>          
            </router-link>
          </v-row>

        </v-col>
        <v-col cols="6">
            <br />
          <v-row>
            <h1>大石悠貴</h1>
          </v-row>
            <br />
          <v-row>
            <h1>1999年1月3日 (21)</h1>
          </v-row>
            <br />
          <v-row>
            <h1>関西学院大学 (B4)</h1>
          </v-row>
            <br />
            <br />
          <v-row>
            <router-link to="/github">
              <v-btn x-large color="primary" dark>
              <v-img src="https://github.com/fluidicon.png" aspect-ratio="1"></v-img>
              </v-btn>
            </router-link>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped lang="scss">
.top-team-list {
  padding: 0px 0px 0px 30px;
  width: 457px;
  height: 360px;
}

.progress-linear {
  margin: -15px 0px 0px 0px;
}

.status-item {
  color: #00ddd6;
  margin-right: 10px;
  font-size: 100%;
}
.status-content {
  font-size: 80%;
}
.level-margin {
  margin-top: 3px;
  margin-left: 18px;
}
.mp-margin {
  margin-left: 6px;
}

.next-level {
  font-size: 60%;
}
.next-level-margin {
  margin-left: 15px;
  margin-right: 0px;
}

.limit {
  font-size: 60%;
}
.limit-margin {
  margin-left: 15px;
  margin-right: 0px;
}
</style>