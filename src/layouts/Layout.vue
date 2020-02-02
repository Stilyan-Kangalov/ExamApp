<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          ЧПКС "БИО ФИТ"
        </q-toolbar-title>

        <div>Контролен панел</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Меню</q-item-label>
        <q-item to="/" exact clickable >
          <q-item-section avatar>
            <q-icon name="history" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Табло за изпити</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/info" exact clickable >
          <q-item-section avatar>
            <q-icon name="class" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Информация</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/schedule" exact clickable >
          <q-item-section avatar>
            <q-icon name="assignment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>График</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/files" exact clickable >
          <q-item-section avatar>
            <q-icon name="folder_shared" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Файлове</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/admin" exact clickable >
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Контролен панел</q-item-label>
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
      leftDrawerOpen: false
    }
  }
}
</script>
