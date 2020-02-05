<template>
  <q-layout view="hHh lpR lFf" style="background-color: #f5f5f5;">
    <q-header class="my-green-90">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title class="absolute-center">
          ЧПКС "БИО ФИТ"
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
    v-model="leftDrawerOpen"
    show-if-above

    :mini="miniState"
    @mouseover="miniState = false"
    @mouseout="miniState = true"
    mini-to-overlay

    :width="200"
    :breakpoint="500"
    bordered
    content-class="bg-cyan-10"
    >
      <q-list>
        <q-item to="/" exact clickable>
          <q-item-section avatar>
            <q-icon name="history" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-cyan-11">Табло за изпити</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/info" exact clickable >
          <q-item-section avatar>
            <q-icon name="class" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-cyan-11">Информация</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/schedule" exact clickable >
          <q-item-section avatar>
            <q-icon name="assignment" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-cyan-11">График</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/files" exact clickable >
          <q-item-section avatar>
            <q-icon name="folder_shared" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-cyan-11">Файлове</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/admin" exact clickable >
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-cyan-11">Настройки</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      drawer: false,
      miniState: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.my-green-90 {
  background: rgb(0,96,100);
background: linear-gradient(90deg, rgba(0,96,100,1) 0%, rgba(0,96,100,1) 13%, rgba(11,109,109,1) 23%, rgba(11,115,112,1) 35%, rgba(12,121,116,1) 48%, rgba(17,172,160,1) 75%, rgba(19,195,179,1) 87%, rgba(21,219,200,1) 100%);
}
</style>
