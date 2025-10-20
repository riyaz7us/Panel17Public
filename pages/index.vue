<template>
  <div class="min-h-screen bg-slate-950 text-white">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-purple-900 to-indigo-900 py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-4">Welcome to Panel 17</h1>
        <p class="text-xl mb-8">The ultimate control panel for managing your servers and applications with ease.</p>
        <img class="my-4 rounded-lg shadow-2xl border-2 " src="/screenshot.png"/>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-slate-900">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">Powerful Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- One-Click Installation -->
          <div class="group bg-slate-800 p-6 rounded-xl hover:bg-slate-900 transition-all duration-300 transform hover:scale-105">
            <div class="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Icon name="mdi:cursor-pointer" size="32" class="text-white" />
            </div>
            <h3 class="text-xl font-semibold mb-2 text-center">One-Click Installation</h3>
            <p class="text-gray-300 text-center">Deploy applications instantly with automated setup and configuration.</p>
          </div>

          <!-- Auto Dependencies -->
          <div class="group bg-slate-800 p-6 rounded-xl hover:bg-slate-900 transition-all duration-300 transform hover:scale-105">
            <div class="bg-gradient-to-r from-green-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Icon name="mdi:package-variant" size="32" class="text-white" />
            </div>
            <h3 class="text-xl font-semibold mb-2 text-center">Auto Dependencies</h3>
            <p class="text-gray-300 text-center">Automatically install and manage all required dependencies for your projects.</p>
          </div>

          <!-- WordPress Applications -->
          <div class="group bg-slate-800 p-6 rounded-xl hover:bg-slate-900 transition-all duration-300 transform hover:scale-105">
            <div class="bg-gradient-to-r from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Icon name="skill-icons:wordpress" size="32" class="text-white" />
            </div>
            <h3 class="text-xl font-semibold mb-2 text-center">WordPress Manager</h3>
            <p class="text-gray-300 text-center">Complete WordPress installation, management, and optimization tools.</p>
          </div>

          <!-- Laravel Applications -->
          <div class="group bg-slate-800 p-6 rounded-xl hover:bg-slate-900 transition-all duration-300 transform hover:scale-105">
            <div class="bg-gradient-to-r from-red-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Icon name="skill-icons:laravel-dark" size="32" class="text-white" />
            </div>
            <h3 class="text-xl font-semibold mb-2 text-center">Laravel Manager</h3>
            <p class="text-gray-300 text-center">Seamless Laravel deployment with artisan commands and environment management.</p>
          </div>

          <!-- NodeJS Applications -->
          <div class="group bg-slate-800 p-6 rounded-xl hover:bg-slate-900 transition-all duration-300 transform hover:scale-105">
            <div class="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Icon name="skill-icons:nodejs-dark" size="32" class="text-white" />
            </div>
            <h3 class="text-xl font-semibold mb-2 text-center">Node.js Manager</h3>
            <p class="text-gray-300 text-center">Full Node.js support with PM2 process management and npm automation.</p>
          </div>

          <!-- Web Server Integration -->
          <div class="group bg-slate-800 p-6 rounded-xl hover:bg-slate-900 transition-all duration-300 transform hover:scale-105">
            <div class="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Icon name="skill-icons:nginx" size="32" class="text-white" />
            </div>
            <h3 class="text-xl font-semibold mb-2 text-center">Web Server Control</h3>
            <p class="text-gray-300 text-center">Nginx & Caddy integration with SSL certificates and performance optimization.</p>
          </div>

          <!-- File & Database Management -->
          <div class="group bg-slate-800 p-6 rounded-xl hover:bg-slate-900 transition-all duration-300 transform hover:scale-105">
            <div class="bg-gradient-to-r from-yellow-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Icon name="fluent:folder-open-vertical-24-filled" size="32" class="text-white" />
            </div>
            <h3 class="text-xl font-semibold mb-2 text-center">File & Database</h3>
            <p class="text-gray-300 text-center">Advanced file manager and SQL database tools with backup automation.</p>
          </div>

          <!-- PM2 Process Manager -->
          <div class="group bg-slate-800 p-6 rounded-xl hover:bg-slate-900 transition-all duration-300 transform hover:scale-105">
            <div class="bg-gradient-to-r from-purple-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Icon name="skill-icons:nodejs-dark" size="32" class="text-white" />
            </div>
            <h3 class="text-xl font-semibold mb-2 text-center">PM2 Manager</h3>
            <p class="text-gray-300 text-center">Process management with clustering, monitoring, and auto-restart capabilities.</p>
          </div>

          <!-- Language & Database Versions -->
          <div class="group bg-slate-800 p-6 rounded-xl hover:bg-slate-900 transition-all duration-300 transform hover:scale-105">
            <div class="bg-gradient-to-r from-indigo-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Icon name="mdi:code-block-braces" size="32" class="text-white" />
            </div>
            <h3 class="text-xl font-semibold mb-2 text-center">Multi-Language Support</h3>
            <p class="text-gray-300 text-center">Install and manage PHP, Python, Node.js, and database versions effortlessly.</p>
          </div>

          <!-- Git Management -->
          <div class="group bg-slate-800 p-6 rounded-xl hover:bg-slate-900 transition-all duration-300 transform hover:scale-105">
            <div class="bg-gradient-to-r from-gray-600 to-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Icon name="mdi:git" size="32" class="text-white" />
            </div>
            <h3 class="text-xl font-semibold mb-2 text-center">Git Integration</h3>
            <p class="text-gray-300 text-center">Seamless Git operations with repository management and deployment automation.</p>
          </div>

          <!-- Database Backups -->
          <div class="group bg-slate-800 p-6 rounded-xl hover:bg-slate-900 transition-all duration-300 transform hover:scale-105">
            <div class="bg-gradient-to-r from-emerald-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Icon name="mdi:database" size="32" class="text-white" />
            </div>
            <h3 class="text-xl font-semibold mb-2 text-center">Smart Backups</h3>
            <p class="text-gray-300 text-center">Automated database backups with scheduling and cloud storage integration.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Screenshots Section -->
    <section class="py-20 bg-slate-800">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">See It In Action</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- Main Screen -->
          <div class="bg-slate-700 p-2 rounded-xl cursor-pointer hover:bg-slate-600 transition-colors" @click="selectedImage = '/screenshot.png'; showDialog = true">
            <img src="/screenshot.png" alt="Main Screen" class="w-full object-cover rounded-lg">
          </div>
          <!-- File Manager -->
          <div class="bg-slate-700 p-2 rounded-xl cursor-pointer hover:bg-slate-600 transition-colors" @click="selectedImage = '/file-manager.png'; showDialog = true">
            <img src="/file-manager.png" alt="File Manager" class="w-full object-cover rounded-lg">
          </div>

          <!-- App Installer -->
          <div class="bg-slate-700 p-2 rounded-xl cursor-pointer hover:bg-slate-600 transition-colors" @click="selectedImage = '/installer.png'; showDialog = true">
            <img src="/installer.png" alt="App Installer" class="w-full object-cover rounded-lg">
          </div>

          <!-- Language Management -->
          <div class="bg-slate-700 p-2 rounded-xl cursor-pointer hover:bg-slate-600 transition-colors" @click="selectedImage = '/languages.png'; showDialog = true">
            <img src="/languages.png" alt="Language Management" class="w-full object-cover rounded-lg">
          </div>


        </div>
      </div>
    </section>

    <!-- Themes Section -->
    <section class="py-20 bg-slate-900">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <!-- Left Side: Title and Description -->
            <div class="text-center lg:col-span-1 lg:text-left">
              <h2 class="text-4xl font-bold mb-6">Experience In Multiple Themes</h2>
              <p class="text-xl text-gray-300 leading-relaxed">
                Discover the versatility of Panel 17 with its diverse theme collection.
                Customize your interface to match your workflow and aesthetic preferences,
                making every session uniquely yours.
              </p>
            </div>

            <!-- Right Side: Themes Demo -->
            <div class="lg:col-span-2 relative bg-slate-800 p-6 rounded-2xl shadow-2xl overflow-hidden w-full h-[500px]">
              <div class="relative h-full w-full flex items-center justify-center">
                <div class="relative h-full w-full">
                  <div v-for="(theme, index) in themes" :key="theme.name + currentTheme" :src="`/themes/${theme.name}.png`" class="absolute inset-0 w-full h-full object-cover rounded-xl transition-all duration-1000 ease-in-out" :class="getStackClass(index)">
                    <img :src="`/themes/${theme.name}.png`" alt="Theme Demo" class="w-full h-full rounded-xl">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- USP Section -->
    <section class="py-20 bg-slate-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">Why Choose Panel 17?</h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">Experience the next generation of server management with our minimalist approach that combines power, simplicity, and reliability.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Minimalist Design -->
          <div class="text-center group">
            <div class="bg-gradient-to-r from-slate-600 to-gray-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon name="mdi:palette-outline" size="36" class="text-white" />
            </div>
            <h3 class="text-2xl font-semibold mb-4">Minimalist Design</h3>
            <p class="text-gray-300 leading-relaxed">Clean, distraction-free interface that focuses on what matters most - your applications and performance.</p>
          </div>

          <!-- Lightning Fast -->
          <div class="text-center group">
            <div class="bg-gradient-to-r from-yellow-500 to-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon name="mdi:lightning-bolt" size="36" class="text-white" />
            </div>
            <h3 class="text-2xl font-semibold mb-4">Lightning Fast</h3>
            <p class="text-gray-300 leading-relaxed">Optimized for speed with instant deployments, real-time monitoring, and zero-downtime updates.</p>
          </div>

          <!-- Developer Friendly -->
          <div class="text-center group">
            <div class="bg-gradient-to-r from-blue-500 to-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon name="mdi:code-tags" size="36" class="text-white" />
            </div>
            <h3 class="text-2xl font-semibold mb-4">Developer Friendly</h3>
            <p class="text-gray-300 leading-relaxed">Built by developers, for developers. Powerful CLI tools, API access, and extensive customization options.</p>
          </div>

          <!-- Enterprise Security -->
          <div class="text-center group">
            <div class="bg-gradient-to-r from-green-500 to-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon name="mdi:shield-check" size="36" class="text-white" />
            </div>
            <h3 class="text-2xl font-semibold mb-4">Enterprise Security</h3>
            <p class="text-gray-300 leading-relaxed">Bank-level security with encrypted connections, automated SSL certificates, and comprehensive audit logs.</p>
          </div>

          <!-- 24/7 Support -->
          <div class="text-center group">
            <div class="bg-gradient-to-r from-purple-500 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon name="mdi:headset" size="36" class="text-white" />
            </div>
            <h3 class="text-2xl font-semibold mb-4">24/7 Expert Support</h3>
            <p class="text-gray-300 leading-relaxed">Round-the-clock technical support with dedicated account managers and comprehensive documentation.</p>
          </div>

          <!-- Cost Effective -->
          <div class="text-center group">
            <div class="bg-gradient-to-r from-teal-500 to-cyan-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon name="mdi:cash-multiple" size="36" class="text-white" />
            </div>
            <h3 class="text-2xl font-semibold mb-4">Cost Effective</h3>
            <p class="text-gray-300 leading-relaxed">Reduce infrastructure costs by up to 60% with our efficient resource management and automated scaling.</p>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center mt-16">
          <div class="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 class="text-3xl font-bold mb-4">Ready to Transform Your Server Management?</h3>
            <p class="text-xl text-gray-300 mb-6">Join thousands of developers who have simplified their workflow with Panel 17.</p>
            <button class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
              Join The Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Built By Section -->
    <section class="py-20 bg-slate-900">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-8">Built By A Polyglot Programmer</h2>
        <p class="text-xl mb-8">A Passionate developer and programmer with a goal of simplicity, minimalism, and productivity</p>
        <div class="flex justify-center space-x-8">
          <div class="text-center">
            <img src="/pfp.jpg" alt="Syed Riyaz Uddin" class="w-24 h-24 rounded-full mx-auto object-cover mb-4">
            <h3 class="text-xl font-semibold">Syed Riyaz Uddin</h3>
            <p>Lead Developer</p>
          </div>
          <!-- Add more team members if needed -->
        </div>
      </div>
    </section>

    <!-- Join the Waitlist Section -->
    <section id="waitlist" class="py-20 bg-slate-950">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-8">Join the Waitlist</h2>
        <p class="text-xl mb-8">Be the first to know when we launch new features. What would you expect from this panel?</p>
        <!-- Zoho Form Embed -->
        <div class="max-w-4xl mx-auto">
        <iframe aria-label='Event Registration' frameborder="0" style="height:900px;width:100%;border:none;border-radius:20px;" src='https://forms.zohopublic.in/spotverge1gm1/form/EventRegistration/formperma/cRg7Oi8IFdszk3WxGRw5Nnnx6X21nlxWTmhxAu7NUGc'></iframe>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-900 py-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2023 Panel 17. All rights reserved.</p>
        <div class="mt-4">
          <a href="#" class="text-blue-400 hover:text-blue-300 mx-2">Privacy Policy</a>
          <a href="#" class="text-blue-400 hover:text-blue-300 mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>

    <!-- Lightbox Dialog -->
    <Dialog v-model="showDialog">
      <img :src="selectedImage" alt="Screenshot" class="w-full max-h-[80vh] object-contain rounded-lg">
    </Dialog>
  </div>
</template>

<script setup>
import Dialog from '~/components/native/dialog.vue'

const showDialog = ref(false)
const selectedImage = ref('')

const themes = [
  { name: 'color1', label: 'Blue Theme' },
  { name: 'color2', label: 'Green Theme' },
  { name: 'color3', label: 'Purple Theme' },
  { name: 'color4', label: 'Orange Theme' },
  { name: 'color5', label: 'Red Theme' },
  { name: 'color6', label: 'Minimal Theme' }
]

const currentTheme = ref(0)

onMounted(() => {
  const interval = setInterval(() => {
    currentTheme.value = (currentTheme.value + 1) % themes.length
  }, 1000)

  onUnmounted(() => clearInterval(interval))
})

const nextTheme = () => {
  currentTheme.value = (currentTheme.value + 1) % themes.length
}

const prevTheme = () => {
  currentTheme.value = (currentTheme.value - 1 + themes.length) % themes.length
}

const getStackClass = (index) => {
  const diff = (index - currentTheme.value + themes.length) % themes.length
  if (diff === 0) return 'opacity-100 z-10 translate-y-0 rotate-0 scale-100'
  if (diff === 1) return 'opacity-70 z-9 translate-y-1 rotate-1 transform translate-x-1 scale-98'
  if (diff === 2) return 'opacity-50 z-8 translate-y-2 rotate-2 transform translate-x-2 scale-96'
  if (diff === 3) return 'opacity-30 z-7 translate-y-3 rotate-3 transform translate-x-3 scale-94'
  return 'opacity-10 z-0 translate-y-4 rotate-4 transform translate-x-4 scale-92'
}

definePageMeta({
	layout:'plain'
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.stack-enter-active,
.stack-leave-active {
  transition: all 1s ease;
}

.stack-enter-from,
.stack-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}

.stack-move {
  transition: transform 0.5s ease;
}
</style>
