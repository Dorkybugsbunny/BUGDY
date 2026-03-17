<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { githubService } from '~/services/github'

type GitHubRepo = {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  topics: string[]
  fork: boolean
}

const repos = ref<GitHubRepo[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    repos.value = await githubService.getUserRepos('dorkybugsbunny')
  } catch (err) {
    error.value = 'Failed to load repositories'
    console.error(err)
  } finally {
    loading.value = false
  }
})

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short' 
  })
}
</script>

<template>
  <div class="min-h-screen bg-black text-white">


    <!-- Hero Section -->
    <section class="relative h-screen">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          src="/view-apocalyptic-dark-stormy-clouds.jpg" 
          alt="Hero background" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      
      <!-- Hero Content -->
      <div class="relative h-full flex items-center">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl">
            <h1 class="w-full text-6xl md:text-7xl font-bold mb-4">Bugsy Balberan</h1>
            <div class="flex items-center space-x-4 mb-4">
              <span class="text-green-500 font-semibold">Currently Working</span>
              <span class="text-gray-300">2+ Years</span>
              <span class="border border-gray-400 px-1 text-xs">REMOTE</span>
              <span class="text-gray-300">Front-End Web Developer</span>
            </div>
            <p class="text-lg text-gray-300 mb-6">
              With Enough Butter, You can do anything.
            </p>
            <div class="flex items-center space-x-4">
              <button class="flex items-center space-x-2 bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="font-semibold">View Projects</span>
              </button>
              <button class="flex items-center space-x-2 bg-gray-700/80 text-white px-8 py-2 rounded hover:bg-gray-600 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
                <span class="font-semibold">Contact Me</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Rows -->
    <div class="container mx-auto px-4 py-8">
      <!-- Featured Projects -->
      <section id="projects" class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Featured Projects</h2>
        
        <!-- Loading State -->
        <div v-if="loading" class="flex space-x-4">
          <div v-for="i in 6" :key="i" class="flex-none w-48">
            <div class="relative aspect-[2/3] overflow-hidden rounded bg-gray-800 animate-pulse"></div>
            <div class="mt-2">
              <div class="h-4 bg-gray-800 rounded animate-pulse mb-1"></div>
              <div class="h-3 bg-gray-800 rounded animate-pulse w-3/4"></div>
            </div>
          </div>
        </div>
        
        <!-- Error State -->
        <div v-else-if="error" class="text-red-500 text-center py-8">
          {{ error }}
        </div>
        
        <!-- Repositories -->
        <div v-else class="relative group">
          <div class="flex space-x-4 overflow-x-auto scrollbar-hide">
            <div v-for="repo in repos" :key="repo.id" class="flex-none w-48 group/item">
              <div class="relative aspect-[2/3] overflow-hidden rounded bg-gray-900 border border-gray-800">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                <div class="absolute inset-0 flex flex-col justify-between p-4">
                  <div>
                    <h3 class="text-white font-semibold text-sm mb-2 line-clamp-2">{{ repo.name }}</h3>
                    <p v-if="repo.description" class="text-gray-400 text-xs line-clamp-3 mb-3">{{ repo.description }}</p>
                  </div>
                  <div class="space-y-2">
                    <div v-if="repo.language" class="flex items-center space-x-2">
                      <div 
                        class="w-2 h-2 rounded-full" 
                        :style="{ backgroundColor: githubService.getLanguageColor(repo.language) }"
                      ></div>
                      <span class="text-xs text-gray-400">{{ repo.language }}</span>
                    </div>
                    <div class="flex items-center justify-between text-xs text-gray-500">
                      <div class="flex items-center space-x-3">
                        <div class="flex items-center space-x-1">
                          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <span>{{ repo.stargazers_count }}</span>
                        </div>
                        <div class="flex items-center space-x-1">
                          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                          <span>{{ repo.forks_count }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="absolute inset-0 bg-black/0 group-hover/item:bg-black/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover/item:opacity-100">
                  <a 
                    :href="repo.html_url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="bg-white/90 rounded-full p-3 hover:bg-white transition-colors"
                  >
                    <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="mt-2">
                <p class="text-sm text-gray-300 font-medium">{{ repo.name }}</p>
                <p class="text-xs text-gray-500">Updated {{ formatDate(repo.updated_at) }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Technical Skills -->
      <section id="skills" class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Technical Skills</h2>
        <div class="relative group">
          <div class="flex space-x-4 overflow-x-auto scrollbar-hide">
            <div class="flex-none w-48 group/item">
              <div class="relative aspect-[16/9] overflow-hidden rounded">
                <img 
                  src="/placeholder.png" 
                  alt="Show thumbnail" 
                  class="w-full h-full object-cover"
                />
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                  <div class="w-full bg-gray-600 rounded-full h-1 mb-1">
                    <div class="bg-red-600 h-1 rounded-full" style="width: 35%"></div>
                  </div>
                  <p class="text-xs text-white">Episode 3</p>
                </div>
              </div>
              <div class="mt-2">
                <p class="text-sm text-gray-300">Frontend Development</p>
                <p class="text-xs text-gray-500">Vue.js • React • TypeScript</p>
              </div>
            </div>
            
            <div class="flex-none w-48 group/item">
              <div class="relative aspect-[16/9] overflow-hidden rounded">
                <img 
                  src="/placeholder.png" 
                  alt="Show thumbnail" 
                  class="w-full h-full object-cover"
                />
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                  <div class="w-full bg-gray-600 rounded-full h-1 mb-1">
                    <div class="bg-red-600 h-1 rounded-full" style="width: 67%"></div>
                  </div>
                  <p class="text-xs text-white">Episode 5</p>
                </div>
              </div>
              <div class="mt-2">
                <p class="text-sm text-gray-300">Backend Development</p>
                <p class="text-xs text-gray-500">Node.js • Python • PostgreSQL</p>
              </div>
            </div>
            
            <div class="flex-none w-48 group/item">
              <div class="relative aspect-[16/9] overflow-hidden rounded">
                <img 
                  src="/placeholder.png" 
                  alt="Show thumbnail" 
                  class="w-full h-full object-cover"
                />
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                  <div class="w-full bg-gray-600 rounded-full h-1 mb-1">
                    <div class="bg-red-600 h-1 rounded-full" style="width: 12%"></div>
                  </div>
                  <p class="text-xs text-white">Episode 1</p>
                </div>
              </div>
              <div class="mt-2">
                <p class="text-sm text-gray-300">DevOps & Cloud</p>
                <p class="text-xs text-gray-500">Docker • AWS • CI/CD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact & About -->
      <section id="contact" class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Get In Touch</h2>
        <div class="relative group">
          <div class="flex space-x-4 overflow-x-auto scrollbar-hide">
            <div class="flex-none w-48 group/item">
              <div class="relative aspect-[2/3] overflow-hidden rounded">
                <img 
                  src="/placeholder.png" 
                  alt="Movie thumbnail" 
                  class="w-full h-full object-cover transition-transform duration-300 group-hover/item:scale-105"
                />
                <div class="absolute inset-0 bg-black/0 group-hover/item:bg-black/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover/item:opacity-100">
                  <button class="bg-white/90 rounded-full p-3 hover:bg-white transition-colors">
                    <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-2">
                <p class="text-sm text-gray-300">Email Contact</p>
                <p class="text-xs text-gray-500">dorkybugsbunny@gmail.com</p>
              </div>
            </div>
            
            <div class="flex-none w-48 group/item">
              <div class="relative aspect-[2/3] overflow-hidden rounded">
                <img 
                  src="/placeholder.png" 
                  alt="Movie thumbnail" 
                  class="w-full h-full object-cover transition-transform duration-300 group-hover/item:scale-105"
                />
                <div class="absolute inset-0 bg-black/0 group-hover/item:bg-black/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover/item:opacity-100">
                  <button class="bg-white/90 rounded-full p-3 hover:bg-white transition-colors">
                    <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-2">
                <p class="text-sm text-gray-300">GitHub Profile</p>
                <p class="text-xs text-gray-500">github.com/Dorkybugsbunny</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>