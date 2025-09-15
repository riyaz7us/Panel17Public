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
  </div>
</template>

<script setup>
definePageMeta({
	layout:'plain'
})
</script>

<style scoped>
/* Additional styles if needed */
</style>
