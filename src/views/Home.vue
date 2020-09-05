<template>
  <v-row justify="center">
    <v-col cols="12" lg="6">
      <v-card>
        <v-card-title>Description</v-card-title>
        <v-card-text>
          This utility tool is made for proxying GFW-Blocked Internet resources for non-commercial use.<br/>
          <v-divider/>
          Useful scripts:<br/>
          oh-my-zsh:<br/>
          <code style="white-space: nowrap">sh -c "$(curl -fsSL https://proxy.zhangzisu.cn/rawgit/ohmyzsh/ohmyzsh/master/tools/install.sh)"</code><br/>
          nvm:<br/>
          <code style="white-space: nowrap">curl -o- https://proxy.zhangzisu.cn/rawgit/nvm-sh/nvm/v0.35.3/install.sh | zsh</code><br/>
        </v-card-text>
        <v-divider/>
        <v-card-subtitle>RawGit</v-card-subtitle>
        <v-row no-gutters class="mr-3">
          <v-col>
            <v-text-field v-model="ipt1" placeholder="https://raw.githubusercontent.com/..." class="pa-4 pt-0" clearable/>
          </v-col>
          <v-col cols="auto" @click="gn1">
            <v-btn :disabled="!vld1">Proxy!</v-btn>
          </v-col>
        </v-row>
        <v-divider/>
        <v-card-subtitle>Pixiv Image</v-card-subtitle>
        <v-row no-gutters class="mr-3">
          <v-col>
            <v-text-field v-model="ipt2" placeholder="https://i.pximg.net/..." class="pa-4 pt-0" clearable/>
          </v-col>
          <v-col cols="auto" @click="gn2">
            <v-btn :disabled="!vld2">Proxy!</v-btn>
          </v-col>
        </v-row>
        <v-divider/>
        <v-card-subtitle>Github Release</v-card-subtitle>
        <v-row no-gutters class="mr-3">
          <v-col>
            <v-text-field v-model="ipt3" placeholder="https://github.com/.../.../releases/download/..." class="pa-4 pt-0" clearable/>
          </v-col>
          <v-col cols="auto" @click="gn3">
            <v-btn :disabled="!vld3">Proxy!</v-btn>
          </v-col>
        </v-row>
        <v-dialog v-model="dialog" max-width="480">
          <v-card>
            <v-card-title>
              Proxy link generated!
            </v-card-title>
            <v-divider/>
            <v-card-text>
              <div style="overflow-x: scroll" class="mt-4">
                <code style="white-space: nowrap">{{ generated }}</code>
              </div>
            </v-card-text>
            <v-divider/>
            <v-card-actions>
              <v-spacer/>
              <!-- <v-btn color="green">
                <v-icon left>mdi-content-copy</v-icon>
                Copy
              </v-btn> -->
              <v-btn color="blue" :href="generated" target="_blank" dark>
                <v-icon left>mdi-open-in-new</v-icon>
                Open
              </v-btn>
              <v-btn color="error" @click="dialog = false">
                <v-icon left>mdi-close</v-icon>
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  ipt1 = ''
  ipt2 = ''
  ipt3 = ''
  dialog = false

  generated = ''

  get vld1 () {
    const r = /https?:\/\/raw.githubusercontent.com(.+)/.exec(this.ipt1)
    return r && r[1]
  }

  get vld2 () {
    const r = /https?:\/\/i.pximg.net(.+)/.exec(this.ipt2)
    return r && r[1]
  }

  get vld3 () {
    const r = /https?:\/\/github.com(.+)/.exec(this.ipt3)
    return r && r[1]
  }

  gn1 () {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const path = /https?:\/\/raw.githubusercontent.com(.+)/.exec(this.ipt1)![1]
    this.generated = 'https://proxy.zhangzisu.cn/rawgit' + path
    this.dialog = true
  }

  gn2 () {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const path = /https?:\/\/i.pximg.net(.+)/.exec(this.ipt2)![1]
    this.generated = 'https://proxy.zhangzisu.cn/pximg' + path
    this.dialog = true
  }

  gn3 () {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const path = /https?:\/\/github.com(.+)/.exec(this.ipt3)![1]
    this.generated = 'https://proxy.zhangzisu.cn/github' + path
    this.dialog = true
  }
}
</script>
