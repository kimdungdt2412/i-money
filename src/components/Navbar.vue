<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="nav">
    <router-link to="/">Overview</router-link>
    <router-link :to="{ name: 'transactions' }">Transactions</router-link>
    <router-link to="/">Budgets</router-link>
    <router-link to="/">Reports</router-link>
    <router-link to="/">Settings</router-link>
  </nav>
</template>
