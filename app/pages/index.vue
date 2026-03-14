<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Header -->
    <header class="bg-black border-b border-gray-800">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center space-x-8">
            <div class="text-2xl font-bold text-orange-500">Portfolio</div>
            <nav class="hidden lg:flex space-x-6">
              <a href="#home" class="hover:text-orange-500 transition-colors">Home</a>
              <a href="#projects" class="hover:text-orange-500 transition-colors">Projects</a>
              <a href="#skills" class="hover:text-orange-500 transition-colors">Skills</a>
              <a href="#contact" class="hover:text-orange-500 transition-colors">Contact</a>
            </nav>
          </div>
          <div class="flex items-center space-x-4">
            <button class="text-gray-400 hover:text-white">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <div class="flex">
      <!-- Sidebar -->
      <aside class="w-64 bg-gray-900 min-h-screen border-r border-gray-800 hidden lg:block">
        <div class="p-4">
          <div class="mb-6">
            <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Technologies</h3>
            <ul class="space-y-2">
              <li><a href="#" class="block py-2 px-3 hover:bg-gray-800 rounded transition-colors">Frontend</a></li>
              <li><a href="#" class="block py-2 px-3 hover:bg-gray-800 rounded transition-colors">Backend</a></li>
              <li><a href="#" class="block py-2 px-3 hover:bg-gray-800 rounded transition-colors">Database</a></li>
              <li><a href="#" class="block py-2 px-3 hover:bg-gray-800 rounded transition-colors">DevOps</a></li>
              <li><a href="#" class="block py-2 px-3 hover:bg-gray-800 rounded transition-colors">Cloud</a></li>
              <li><a href="#" class="block py-2 px-3 hover:bg-gray-800 rounded transition-colors">Mobile</a></li>
            </ul>
          </div>
          
          <div class="mb-6">
            <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Experience</h3>
            <ul class="space-y-2">
              <li><a href="#" class="block py-2 px-3 hover:bg-gray-800 rounded transition-colors">Web Development</a></li>
              <li><a href="#" class="block py-2 px-3 hover:bg-gray-800 rounded transition-colors">System Admin</a></li>
              <li><a href="#" class="block py-2 px-3 hover:bg-gray-800 rounded transition-colors">Cloud Architecture</a></li>
              <li><a href="#" class="block py-2 px-3 hover:bg-gray-800 rounded transition-colors">UI/UX Design</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Contact</h3>
            <ul class="space-y-2">
              <li><a href="#" class="block py-2 px-3 hover:bg-gray-800 rounded transition-colors">Email</a></li>
              <li><a href="#" class="block py-2 px-3 hover:bg-gray-800 rounded transition-colors">LinkedIn</a></li>
              <li><a href="#" class="block py-2 px-3 hover:bg-gray-800 rounded transition-colors">GitHub</a></li>
              <li><a href="#" class="block py-2 px-3 hover:bg-gray-800 rounded transition-colors">Resume</a></li>
            </ul>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1">
        <!-- Hero Section -->
        <section id="home" class="relative">
          <div class="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20"></div>
          <div class="relative container mx-auto px-4 py-24">
            <div class="max-w-4xl">
              <h1 class="text-5xl md:text-7xl font-bold mb-6">
                IT Professional
                <span class="block text-3xl md:text-4xl text-orange-500 mt-2">Full-Stack Developer</span>
              </h1>
              <p class="text-xl text-gray-300 mb-8">
                Specialized in building scalable web applications, managing infrastructure, and implementing cloud solutions with modern technologies.
              </p>
              <div class="flex flex-wrap gap-4">
                <button class="px-8 py-3 bg-orange-600 hover:bg-orange-700 rounded font-semibold transition-colors">
                  View Projects
                </button>
                <button class="px-8 py-3 border border-gray-600 hover:border-gray-400 rounded font-semibold transition-colors">
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Featured Projects -->
        <section id="projects" class="py-16">
          <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-8">Featured Projects</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              <div class="group cursor-pointer">
                <div class="aspect-[2/3] bg-gradient-to-br from-orange-600 to-red-600 rounded-lg overflow-hidden">
                  <div class="h-full flex items-center justify-center">
                    <div class="text-center p-4">
                      <div class="text-4xl mb-2">🛒</div>
                      <h3 class="font-semibold text-sm">E-Commerce</h3>
                    </div>
                  </div>
                </div>
                <div class="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p class="text-xs text-gray-400">Vue.js • Node.js • MongoDB</p>
                </div>
              </div>
              
              <div class="group cursor-pointer">
                <div class="aspect-[2/3] bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg overflow-hidden">
                  <div class="h-full flex items-center justify-center">
                    <div class="text-center p-4">
                      <div class="text-4xl mb-2">☁️</div>
                      <h3 class="font-semibold text-sm">Cloud Platform</h3>
                    </div>
                  </div>
                </div>
                <div class="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p class="text-xs text-gray-400">AWS • Docker • Kubernetes</p>
                </div>
              </div>
              
              <div class="group cursor-pointer">
                <div class="aspect-[2/3] bg-gradient-to-br from-green-600 to-teal-600 rounded-lg overflow-hidden">
                  <div class="h-full flex items-center justify-center">
                    <div class="text-center p-4">
                      <div class="text-4xl mb-2">📊</div>
                      <h3 class="font-semibold text-sm">Analytics Dashboard</h3>
                    </div>
                  </div>
                </div>
                <div class="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p class="text-xs text-gray-400">React • Python • PostgreSQL</p>
                </div>
              </div>
              
              <div class="group cursor-pointer">
                <div class="aspect-[2/3] bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg overflow-hidden">
                  <div class="h-full flex items-center justify-center">
                    <div class="text-center p-4">
                      <div class="text-4xl mb-2">📱</div>
                      <h3 class="font-semibold text-sm">Mobile App</h3>
                    </div>
                  </div>
                </div>
                <div class="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p class="text-xs text-gray-400">React Native • Firebase</p>
                </div>
              </div>
              
              <div class="group cursor-pointer">
                <div class="aspect-[2/3] bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg overflow-hidden">
                  <div class="h-full flex items-center justify-center">
                    <div class="text-center p-4">
                      <div class="text-4xl mb-2">🤖</div>
                      <h3 class="font-semibold text-sm">AI Assistant</h3>
                    </div>
                  </div>
                </div>
                <div class="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p class="text-xs text-gray-400">Python • TensorFlow • API</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Skills Section -->
        <section id="skills" class="py-16 bg-gray-900">
          <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-8">Technical Skills</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div class="bg-gray-800 p-6 rounded-lg">
                <h3 class="text-lg font-semibold text-orange-500 mb-4">Frontend</h3>
                <ul class="space-y-2 text-sm text-gray-300">
                  <li>• Vue.js / React</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Next.js / Nuxt.js</li>
                </ul>
              </div>
              
              <div class="bg-gray-800 p-6 rounded-lg">
                <h3 class="text-lg font-semibold text-blue-500 mb-4">Backend</h3>
                <ul class="space-y-2 text-sm text-gray-300">
                  <li>• Node.js</li>
                  <li>• Python</li>
                  <li>• PostgreSQL</li>
                  <li>• MongoDB</li>
                </ul>
              </div>
              
              <div class="bg-gray-800 p-6 rounded-lg">
                <h3 class="text-lg font-semibold text-green-500 mb-4">DevOps</h3>
                <ul class="space-y-2 text-sm text-gray-300">
                  <li>• Docker</li>
                  <li>• Kubernetes</li>
                  <li>• CI/CD</li>
                  <li>• AWS / Azure</li>
                </ul>
              </div>
              
              <div class="bg-gray-800 p-6 rounded-lg">
                <h3 class="text-lg font-semibold text-purple-500 mb-4">Tools</h3>
                <ul class="space-y-2 text-sm text-gray-300">
                  <li>• Git</li>
                  <li>• Linux</li>
                  <li>• Nginx</li>
                  <li>• Monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-16">
          <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-8">Get In Touch</h2>
            <div class="grid md:grid-cols-2 gap-8 max-w-4xl">
              <div>
                <h3 class="text-xl font-semibold mb-4">Let's Connect</h3>
                <p class="text-gray-300 mb-6">
                  Available for freelance opportunities and full-time positions. 
                  Let's discuss how I can help with your next project.
                </p>
                <div class="space-y-3">
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-orange-600 rounded flex items-center justify-center">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                    <span class="text-gray-300">contact@example.com</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                      </svg>
                    </div>
                    <span class="text-gray-300">+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
              
              <div class="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <form class="space-y-4">
                  <input type="text" placeholder="Name" class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-orange-500 text-white">
                  <input type="email" placeholder="Email" class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-orange-500 text-white">
                  <textarea placeholder="Message" rows="4" class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-orange-500 text-white"></textarea>
                  <button type="submit" class="w-full px-6 py-2 bg-orange-600 hover:bg-orange-700 rounded font-semibold transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>