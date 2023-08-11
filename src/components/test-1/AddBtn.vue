<script setup lang="ts">
import { useModalStore } from '@/stores/modalStore';

const modalStore = useModalStore();
</script>

<template>
  <button
    class="button_add"
    @click.prevent="
      modalStore.toggleStatusActiveModal(!modalStore.isModalActive)
    "
  >
    Добавить пользователя
  </button>
</template>

<style scoped>
.button_add {
  margin-right: 20px;
  padding: 6px;
  width: 50%;
  color: #ffffff;
  background: #4caf50;
  border: 0;
  font-size: 12px;
  font-weight: bold;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}

.button_add:hover,
.button_add:active,
.button_add:focus {
  background: #328136;
}
</style>
