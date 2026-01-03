<template>
  <aside class="sidebar">
    <h2 class="logo">Toram DB</h2>

    <nav>
      <router-link to="/" class="menu">🎒 Tas Ekspansi</router-link>
      <router-link to="/mq" class="menu">📜 Main Quest</router-link>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 220px;
  min-height: 100vh;
  background: #111827;
  color: white;
  padding: 20px;
}

.logo {
  font-size: 20px;
  margin-bottom: 24px;
}

.menu {
  display: block;
  padding: 10px 12px;
  margin-bottom: 8px;
  border-radius: 6px;
  color: white;
  text-decoration: none;
}

.menu:hover {
  background: #1f2937;
}

.router-link-active {
  background: #2563eb;
}
</style>
