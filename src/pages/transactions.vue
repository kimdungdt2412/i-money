<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <p>transaction</p>
  <div class="item" v-for="transaction in transactions" :key="transaction.id">
    <router-link
      :to="{
        name: 'transaction-detail',
        params: { id: transaction.id }
      }"
    >
      {{ transaction.name }}
    </router-link>
    <p class="price">{{ transaction.price }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactions: [
        {
          id: 1,
          name: 'Đi siêu thị',
          price: 2000
        },
        {
          id: 2,
          name: 'Đi uống cafe',
          price: 20004
        },
        {
          id: 3,
          name: 'Đi xem phim',
          price: 53000
        }
      ]
    }
  }
}
</script>

<style></style>
