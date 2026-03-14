<template>
  <header class="bg-white shadow-md sticky top-0 z-10">
    <div class="w-full px-6 py-3">
      <nav class="flex justify-between items-center gap-6 max-w-[1440px] px-10 mx-auto">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="/"><img src="/assests/img/CCS-Logo.png" alt="Logo" class="h-12 w-auto" /></a>
        </div>
        <div class="flex gap-5 justify-center">
          <!-- Search Bar -->
          <div class="flex-1 max-w-sm self-center">
            <div class="relative">
              <input
                type="text"
                placeholder="Search..."
                class="w-full pl-4 pr-10 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
              />
              <button class="absolute inset-y-0 right-0 px-3 flex items-center bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg transition-colors">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Navigation Links -->
          <div class="flex items-center space-x-6">
            <NuxtLink to="/" class="text-gray-800 hover:text-orange-600 text-sm font-medium transition-colors">
              <h3 class="text-4xl">Home</h3>
            </NuxtLink>
            <NuxtLink to="/services" class="text-gray-800 hover:text-orange-600 text-sm font-medium transition-colors">
              <h3 class="text-4xl">Services</h3>
            </NuxtLink>
            <NuxtLink to="/about" class="text-gray-800 hover:text-orange-600 text-sm font-medium transition-colors">
              <h3 class="text-4xl">About Us</h3>
            </NuxtLink>
          </div>

          <!-- Login/Register Buttons -->
          <div class="flex items-center space-x-3">
            <button class="btn btn-primary">
              Login
            </button>
            <button class="btn btn-secondary">
              Register
            </button>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
</script>
