<script setup lang="ts">
import { useModalStore } from '@/stores/modalStore';

const modalStore = useModalStore();
</script>

<template>
  <div class="users-table">
    <table>
      <tr>
        <th>
          <span class="table-title">Данные пользователя</span>
        </th>
        <th>
          <span class="table-title">Опции</span>
        </th>
      </tr>

      <tbody>
        <tr v-for="item in modalStore.allUsers" :key="item.userId">
          <td>
            <div class="table-name">
              <span class="table-name_first-name">{{ item.firstName }}</span>
              <span v-if="modalStore.isSortName">{{ item.lastName }}</span>
            </div>
          </td>
          <td>
            <button
              class="table-btn edit-btn"
              @click.prevent="modalStore.viewUserData(item.userId)"
            >
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </button>
            <button
              class="table-btn delete-btn"
              @click.prevent="modalStore.deleteUser(item.userId)"
            >
              <i class="fa fa-ban" aria-hidden="true"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.users-table {
  width: 100%;
}

table {
  margin-bottom: 20px;
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

th {
  position: relative;
  padding-left: 45px;
  background-color: #4caf50;
  color: white;
  font-weight: bold;
}

tr:hover,
tr:active,
tr:focus {
  background: #32813634;
}

th,
td {
  width: 60%;
  border: 1px solid #ccc;
  padding: 8px 15px;
  text-align: left;
}

.table-name {
  position: relative;

  padding: 10px;
  padding-left: 30px;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.table-name_first-name {
  margin-right: 10px;
}

.table-btn {
  background-color: transparent;
  padding: 6px 12px;
  border: none;
  border-radius: 50%;
}

.edit-btn {
  margin-right: 10px;
}

.edit-btn:hover {
  background-color: #4caf50;
}

.delete-btn:hover {
  background-color: red;
}
</style>
