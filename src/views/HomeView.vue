<script setup lang="ts">
import Modal from '@/components/test-1/Modal.vue';
import AddBtn from '../components/test-1/AddBtn.vue';
import Table from '../components/test-1/Table.vue';
import SortBtn from '../components/test-1/SortBtn.vue';
import { useModalStore } from '@/stores/modalStore';

const modalStore = useModalStore();
</script>

<template>
  <main>
    <Modal v-if="modalStore.isModalActive" />
    <section class="sicton-test-1" :class="{ blur: modalStore.isModalActive }">
      <div class="btn-group">
        <add-btn />
        <sort-btn :class="{ none: modalStore.isModalActive }" />
      </div>
      <Table :class="{ none: modalStore.isModalActive }" />
    </section>
  </main>
</template>

<style scoped>
.sicton-test-1 {
  padding: 0 15px;
  min-width: 500px;
}
.btn-group {
  display: flex;
  justify-content: space-between;
  border-top: 10px;
  margin-bottom: 10px;
}

.blur {
  filter: blur(10px);
}

.none {
  display: none;
}
</style>
