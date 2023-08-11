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
  background: hsla(160, 100%, 37%, 1);
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
  background: rgba(0, 189, 126, 0.7);
}
</style>
