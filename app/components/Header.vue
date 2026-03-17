<template>
        <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-20">
          <!-- Left side - Logo and Navigation -->
          <div class="flex items-center space-x-8">
            <img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/test/img/logo/TechSavvyLogo.png" alt="TechSavvy Logo" class="h-20 w-auto" />
            <nav class="hidden lg:flex space-x-6">
              <a href="#home" class="hover:text-gray-300 transition-colors">Home</a>
              <a href="#projects" class="hover:text-gray-300 transition-colors">Projects</a>
              <a href="#skills" class="hover:text-gray-300 transition-colors">Skills</a>
              <a href="#about" class="hover:text-gray-300 transition-colors">About</a>
              <a href="#contact" class="hover:text-gray-300 transition-colors">Contact</a>
            </nav>
          </div>
          
          <!-- Right side - Search and Profile -->
          <div class="flex items-center space-x-6">
            <button class="text-gray-300 hover:text-white">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            <a href="#" class="text-gray-300 hover:text-white">KIDS</a>
            <a href="#" class="text-gray-300 hover:text-white">DVD</a>
            <div class="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>