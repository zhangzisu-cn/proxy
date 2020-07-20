<template>
  <v-app>
    <v-app-bar app>
      <v-btn icon tile>
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
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  //
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
