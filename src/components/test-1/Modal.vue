<script setup lang="ts">
import { useModalStore } from '@/stores/modalStore';

const modalStore = useModalStore();

function previewThumbnail(event: Event) {
  handleFiles((event.target as HTMLInputElement).files);
}

function handleFiles(files: any) {
  if (!FileReader) {
    alert('FileReader не поддерживается — облом');
    return;
  }

  if (!files || !files[0]) {
    alert('Ничего не загружено');
    return;
  }

  if (!/^image\//.test(files[0].type)) {
    return;
  }

  selectImage(files[0]);
}

function selectImage(file: File) {
  let reader = new FileReader();

  reader.readAsDataURL(file);

  // Set new image load handler

  reader.onload = () => {
    if (typeof reader.result === 'string') {
      modalStore.avatar = reader.result;
    }
  };
}
</script>

<template>
  <div class="modal" role="dialog">
    <form @submit.prevent="modalStore.saveDataUser()">
      <div class="modal__header">
        <h2 class="modal-header__title">Добавление пользователя</h2>
        <button
          class="modal-header__button"
          type="button"
          @click.prevent="modalStore.toggleStatusActiveModal(false)"
        >
          <i class="fa fa-window-close-o" aria-hidden="true"></i>
        </button>
      </div>

      <div>
        <div class="modal__row modal__row_avatar">
          <img
            v-if="modalStore.avatar.length > 0"
            :src="modalStore.avatar"
            alt="avatar"
            class="modal__avatar"
          />
          <div v-else class="modal__avatar modal__row_avatar"></div>
        </div>

        <div class="modal__row">
          <label for="modal-file-upload" class="modal__input_label"
            >Аватар</label
          >
          <input
            id="modal-file-upload"
            name="file-upload"
            type="file"
            @input="previewThumbnail"
          />
        </div>

        <div class="modal__row">
          <label for="modal-input-firstName" class="modal__input_label"
            >Имя</label
          >
          <input
            class="modal__input"
            required
            id="modal-input-firstName"
            type="text"
            v-model="modalStore.firstName"
            placeholder="Введите имя"
          />
        </div>

        <div class="modal__row">
          <label for="modal-input-lastName" class="modal__input_label"
            >Фамилия</label
          >
          <input
            class="modal__input"
            required
            id="modal-input-lastName"
            type="text"
            v-model="modalStore.lastName"
            placeholder="Введите имя"
          />
        </div>

        <div class="modal__row">
          <p class="modal__input_label">Роль</p>
          <input
            type="radio"
            name="role"
            id="modal-input-role"
            value="worker"
            required
            v-model="modalStore.role"
            :disabled="modalStore.isChangeModal"
          />
          <label class="modal__input_label" for="modal-input-role"
            >Работник</label
          >

          <input
            type="radio"
            name="role"
            id="modal-input-role"
            value="cheif"
            required
            v-model="modalStore.role"
            :disabled="modalStore.isChangeModal"
          />
          <label class="modal__input_label" for="modal-input-role"
            >Начальник</label
          >
        </div>

        <div v-if="modalStore.role === 'cheif'" class="modal__row">
          <label class="modal__input_label">Телефон</label>
          <input
            class="modal__input"
            placeholder="+7 999 123-45-67"
            id="phone"
            type="text"
            required
            v-model="modalStore.phone"
          />
        </div>
      </div>

      <button class="modal__button_add" type="submit">Сохранить</button>
    </form>
  </div>
</template>

<style scoped>
.modal {
  z-index: 100;
  min-width: 200px;
  position: absolute;
  inset: unset;
  top: 18vh;
  right: 50vw;
  margin: 0 auto 100px;
  padding: 35px;
  max-width: 360px;
  text-align: center;
  background: #ffffff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  transform: translateX(50%);
}

.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.modal-header__title {
  margin-right: 10px;
  font-size: 22px;
}

.modal-header__button {
  border-radius: 50%;
  outline: 0;
  background: #e13d3d;
  padding: 10px 15px;
  border: 0;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}

.modal-header__button:hover,
.modal-header__button:active,
.modal-header__button:focus {
  background: #a72323;
}

.modal__row {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}

.modal__input_label {
  padding: 8px;
}

.modal__input {
  box-sizing: border-box;
  padding: 8px;
  width: 100%;
  font-size: 14px;
  border: 0;
  outline: 0;
  background: #f2f2f2;
}

.modal__button_add {
  outline: 0;
  background: #4caf50;
  width: 100%;
  border: 0;
  padding: 10px;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}

.modal__button_add:hover,
.modal__button_add:active,
.modal__button_add:focus {
  background: #328136;
}

.modal .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}

.modal .message a {
  color: #4caf50;
  text-decoration: none;
}

.modal .register-modal {
  display: none;
}

.modal__row_avatar {
  justify-content: center;
}

.modal__avatar {
  background-color: #4caf4f4f;
  min-width: 150px;
  min-height: 150px;
  height: 100%;
  border-radius: 50%;
  max-width: 150px;
  max-height: 150px;
}
</style>
