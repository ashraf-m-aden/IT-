import { defineStore } from "pinia";
import { ref } from "vue";

export const useNotificationStore = defineStore("notification", () => {
  const message = ref("");
  const success = ref(false);
  const notif = ref(false);

  const successNotif = (msg:string) =>{
    message.value = msg;
    success.value = true;
    notif.value = true;
    setTimeout(() => (notif.value = false), 3000);
  }

  const warningNotif= (msg:string) =>{
    message.value = msg;
    success.value = false;
    notif.value = true;
    setTimeout(() => (notif.value = false), 3000);
  }

  return { message, success, notif, successNotif, warningNotif };
});
