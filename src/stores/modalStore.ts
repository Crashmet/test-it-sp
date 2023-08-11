import { ref, computed, reactive} from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid';

interface NewUser {
  userId: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: string;
  avatar: string; 
}


export const useModalStore = defineStore('modalStore', () => {

  // data 
  const isModalActive = ref<boolean>(false);
  const isChangeModal = ref<boolean>(false);

  const isSortName =  ref<boolean>(true);


  const userId = ref<string>(uuidv4());
  const firstName = ref<string>('');
  const lastName = ref<string>('');
  const phone = ref<string>('');
  const role = ref<string>('');
  const avatar = ref<string>('');

  const allUsers = reactive<NewUser[]>([]);
  

  // actions  
  const resetDataModal = (): void => {
    userId.value = uuidv4();
    firstName.value = '';
    lastName.value = '';
    phone.value = '';
    role.value = '';
    avatar.value = '';
  };

  const toggleStatusActiveModal = (flag: boolean): void => {
    resetDataModal();

    isModalActive.value = flag;
    isChangeModal.value = false;
  };

  const toggleStatusModal = (flag: boolean): void => {
    isModalActive.value = flag;
    isChangeModal.value = flag;
  };

  const addNewUser = (): void => {
    const newUser: NewUser = {
      userId: userId.value,
      firstName: firstName.value,
      lastName: lastName.value,
      phone: phone.value,
      role: role.value,
      avatar: avatar.value,
    };

    allUsers.push(newUser);

    resetDataModal();
    

    toggleStatusModal(false);
  };


  const viewUserData = (id: string): void => {
    allUsers.forEach((el) => {
      if (el.userId === id) {
        userId.value = el.userId;
        firstName.value = el.firstName;
        lastName.value = el.lastName;
        phone.value = el.phone;
        role.value = el.role;
        avatar.value = el.avatar;

        toggleStatusModal(true);
      };
    });
  };

  const changeUserData = (): void => {
    allUsers.forEach((el, idx) => {
      if (el.userId === userId.value) {
        el.firstName = firstName.value;
        el.lastName = lastName.value;
        el.phone = phone.value;
        el.avatar = avatar.value;
        
        resetDataModal();

        toggleStatusModal(false);
      };
    });
  };


  const deleteUser = (id: string): void => {
    allUsers.forEach((el, idx) => {
      if (el.userId === id) {
        allUsers.splice(idx, 1);
      };
    });
  };

  const saveDataUser = (): void => {
    if (isChangeModal.value) {
      changeUserData();
    } else {
      addNewUser();
    }
  };

  return {isModalActive, isChangeModal, isSortName,firstName, lastName, phone, role, avatar, allUsers, toggleStatusActiveModal, addNewUser, viewUserData, deleteUser, changeUserData, saveDataUser }
})
