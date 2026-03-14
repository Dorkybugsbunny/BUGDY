<template>
  <div>
    <NuxtRouteAnnouncer />
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
useHead({
    link: [
        { rel: 'icon', type: 'image/png', href: '/assests/img/CCS-Logo.png' }
    ]
})
</script>