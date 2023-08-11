<script setup lang="ts">
import { useModalStore } from '@/stores/modalStore';

const modalStore = useModalStore();
</script>

<template>
  <button
    class="sort-btn"
    @click.prevent="modalStore.isSortName = !modalStore.isSortName"
  >
    <span class="text-btn">показывать фамилии</span>
    <span v-if="modalStore.isSortName">
      <i class="fa fa-list" aria-hidden="true"></i>
    </span>
  </button>
</template>

<style scoped>
.sort-btn {
  display: flex;
  padding: 6px 12px;
  align-items: center;
  background-color: rgba(255, 0, 0, 0.645);
  color: white;
  font-size: 12px;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

.text-btn {
  margin-right: 5px;
  padding: 3px;
}

.fa-list {
  padding: 3px;
}
</style>
