import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { UserType } from "../types/user";
import firebase from "firebase/compat/app";
import auth from "../services/auth";
import type { DocumentData } from "firebase/firestore";

export const useAuthStore = defineStore("auth", () => {
  // State (using ref)
  const userData = ref<UserType|undefined>(undefined);
  const isLoggedIn = ref(false);

  // Getters (computed properties)
  const getUserData = computed(() => userData.value);
  const getAuthentication = computed(() => isLoggedIn.value);

  // Actions (replacing mutations & actions)
  async function checkAuth() {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const res = await auth.getUserData(user.uid);
          setAuth(true);
          setUser(res.data());
        } catch {
          setAuth(false);
          setUser(undefined);
          auth.Logout();
        }
      } else {
        setAuth(false);
        setUser(undefined);
        auth.Logout();
      }
    });
  }

  async function afterLogin(id:string) {
    localStorage.setItem("idUser", id);
    const res = await auth.getUserData(id);
    setAuth(true);
    setUser(res.data());
  }

  async function logout() {
    await auth.Logout();
    afterLogout();
  }

  function afterLogout() {
    setAuth(false);
    setUser(undefined);
    localStorage.setItem("isLoggedIn", false.toString());
    localStorage.removeItem("idUser");
  }

  // Private functions (replacing mutations)
  function setAuth(value:boolean) {
    localStorage.setItem("isLoggedIn", value.toString());
    isLoggedIn.value = value;
  }

  function setUser(data:DocumentData|undefined) {
    userData.value = data as UserType;
  }

  return {
    userData,
    isLoggedIn,
    getUserData,
    getAuthentication,
    checkAuth,
    afterLogin,
    logout,
    afterLogout,
  };
});
