<script setup lang="ts">
import { useModalStore } from '@/stores/modalStore.ts';

const modalStore = useModalStore();
</script>

<template>
  <button
    class="sort-btn"
    @click.prevent="modalStore.isSortName = !modalStore.isSortName"
  >
    показывать фамилии
    <span v-if="modalStore.isSortName">
      <i class="fa fa-list" aria-hidden="true"></i>
    </span>
  </button>
</template>

<style scoped>
.sort-btn {
  display: flex;
  align-items: center;
  background-color: red;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border: none;
  cursor: pointer;
}
</style>
