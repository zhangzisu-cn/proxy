<template>
  <v-app>
    <v-app-bar app>
      <v-btn icon tile href="https://zhangzisu.cn/" target="_blank">
        <v-avatar tile size="32">
          <v-img src="@/assets/logo.svg"/>
        </v-avatar>
      </v-btn>
      <div class="ml-2">
        <div class="font-weight-bold">ZhangZisu.CN</div>
        <div class="text-overline" style="line-height: unset;">Proxy Services</div>
      </div>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
    <div id="z-bg">
      <v-img src="https://proxy.zhangzisu.cn/pximg/img-original/img/2019/04/09/21/13/01/74125498_p0.png" contain height="100%"/>
    </div>
    <v-footer dark app>
      <v-row justify="end" no-gutters>
        <v-col cols="12" sm="auto" class="text-right">
          <v-btn text disabled class="text-none" >
            &copy; {{ new Date().getFullYear() }} ZhangZisu
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn text href="https://github.com/zhangzisu-cn/proxy" target="_blank" v-on="on">
                <v-icon left>mdi-git</v-icon>
                {{ build.hash.substr(0, 7) }}
              </v-btn>
            </template>
            <span>{{ build.branch }}@{{ build.date }}</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  build = {
    hash: GIT_HASH,
    branch: GIT_BRANCH,
    date: BUILD_DATE
  }
}
</script>

<style lang="scss" scoped>
#z-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
</style>
