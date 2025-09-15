<template>
  <main class="min-h-screen bg-base-100">
    <header class="text-base-content flex justify-between items-center p-2">
      <div class="mr-auto px-2 py-2">
        <img @click="navigateTo('/')" class="cursor-pointer" src="/logo.png" width="200" />
      </div>
      <div class="flex gap-2">
        <button class="btn btn-outline btn-xs flex items-center gap-2" v-if="!home"><Icon name="mdi:arrow-left" @click="goBack()" /> Back</button>
        <Icon name="mdi:palette" @click="changeColor()" class="text-2xl cursor-pointer mix-blend-difference" />
      </div>
    </header>
    <NuxtSnackbar />
    <div class="grid grid-cols-12">
      <div class="col-span-2">
        <ul class="menu p-4 space-y-2 text-base-content">
          <li v-for="link in navLinks" :key="link.name">
            <NuxtLink :to="link.url"><Icon :name="link.icon" size="30" />&emsp;{{ link.name }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="col-span-10">
        <slot />
      </div>
    </div>
  </main>
</template>
<script setup>
const route = useRoute();
const home = ref(false);
const navLinks = [
  { name: "Dashboard", url: "/", icon: "mdi:view-dashboard" },
  { name: "File Manager", url: "/filemanager", icon: "fluent:folder-open-vertical-24-filled" },
  { name: "Applications", url: "/applications", icon: "mdi:package-variant" },
  { name: "Nginx Manager", url: "/nginxmanager", icon: "skill-icons:nginx" },
  { name: "Caddy Manager", url: "/caddymanager", icon: "mdi:web-plus" },
  { name: "SQL Manager", url: "/sqlmanager", icon: "skill-icons:mysql-dark" },
  { name: "Process Manager", url: "/pm2", icon: "skill-icons:nodejs-dark" },
  { name: "Languages", url: "/languages", icon: "mdi:code-block-braces" },
  { name: "Databases", url: "/databases", icon: "mdi:database" },
];
const navdrawer = ref(false);
const nextColor = ref(0);
watch(
  () => route.path,
  () => {
    if (route.path == "/") {
      home.value = true;
    } else {
      home.value = false;
    }
  }
);

const colors = ref(["night", "luxury", "sunset", "dracula", "silk", "caramelatte", "lemonade", "cupcake"]);

function changeColor() {
  // Cycle to next theme
  nextColor.value = (nextColor.value + 1) % colors.value.length;
  const themeName = colors.value[nextColor.value];

  // Set DaisyUI theme
  document.documentElement.setAttribute("data-theme", themeName);

  // Save to localStorage
  if (process.client) {
    localStorage.setItem("daisyui-theme", themeName);
    localStorage.setItem("theme-index", nextColor.value.toString());
  }

  console.log("Switched to theme:", themeName, "at index:", nextColor.value);
}

onMounted(() => {
  if (route.path == "/") {
    home.value = true;
  }

  // Load saved theme or set default
  if (process.client) {
    const savedTheme = localStorage.getItem("daisyui-theme");
    const savedIndex = localStorage.getItem("theme-index");

    if (savedTheme && colors.value.includes(savedTheme)) {
      const themeIndex = colors.value.indexOf(savedTheme);
      nextColor.value = themeIndex;
      document.documentElement.setAttribute("data-theme", savedTheme);
      console.log("Loaded saved theme:", savedTheme);
    } else {
      // Set default theme (first one)
      const defaultTheme = colors.value[0];
      document.documentElement.setAttribute("data-theme", defaultTheme);
      console.log("Set default theme:", defaultTheme);
    }
  }
});
async function addUser() {
  await this.$api.post("/register", regData).then(
    (res) => {
      //console.log("🚀 addUser ~ res:", res);
    },
    (err) => {
      //console.log("🚀 addUser ~ err:", err);
    }
  );
  // Handle response...
}
async function checkLogin() {
  if (useAuthStore().$state.user) {
    navigateTo("/account");
  } else {
    useNuxtApp().$bus.$emit("loginDialog", true);
  }
}

function goBack() {
  useRouter().back();
}
</script>
<style lang="scss">
.register .m-dialog-layout {
  background: #000000cc;
  backdrop-filter: blur(5px);
}
.navbarBg {
  background: #006b52aa !important;
  /*background: linear-gradient(120deg, #ebb30bdd 10%, #e5b804aa) !important;*/
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}
.menuBtn {
  padding: 2px 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  backdrop-filter: blur(2px);
  font-weight: bold;
  color: white;
}
.menuBtn:hover {
  color: white !important;
  background: var(--primary-900);
}

.navbar {
  background: #ffffff00;
  width: 100%;
  padding: 12px;
  z-index: 777;
}
</style>
