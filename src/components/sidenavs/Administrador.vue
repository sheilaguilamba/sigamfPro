<template>
  <q-list class="menu-list">
    <q-item-label header class="text-grey-8">
      SIGAMF - Administrador
    </q-item-label>
    <q-item
      clickable
      :active-class="
        $route.path == '/administrador'
          ? 'text-teal text-bold text-body1'
          : 'text-bold text-body1'
      "
      to="/administrador"
    >
      <q-item-section avatar>
        <q-icon name="dashboard" />
      </q-item-section>

      <q-item-section>
        <q-item-label>Dashboard Administrador</q-item-label>
      </q-item-section>
    </q-item>
    <q-expansion-item
      v-for="(nav, i) in sideItems"
      :key="i"
      expand-separator
      default-opened
      :label="nav.name"
      header-class="bg-grey-4 text-black"
    >
      <q-card>
        <q-item
          clickable
          active-class="text-teal text-bold text-body1"
          v-for="(link, index) in nav.items"
          :key="index"
          :to="link.to"
        >
          <q-item-section v-if="link.icon" avatar>
            <q-icon :name="link.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ link.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script>
export default {
  data() {
    return {
      sideItems: [
        {
          name: "Farmácias",
          items: [
            {
              title: "Cadastro das Farmácias",
              to: "/administrador/cadastro",
            },
            
          ], 
        },
        
      ],
    }
  },
}
</script>

<style>
</style>