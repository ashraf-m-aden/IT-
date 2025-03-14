import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { UserType } from "../types/user";
import firebase from "firebase/compat/app";
import AuthService from "../services/auth.service";
import type { DocumentData } from "firebase/firestore";

export const useAuthStore = defineStore("auth", () => {
  // State (using ref)
  const userData = ref<UserType | undefined>(undefined);
  const isLoggedIn = ref(false);

  // Getters (computed properties)
  const getUserData = computed(() => userData.value);
  const getAuthentication = computed(() => isLoggedIn.value);

  // Actions (replacing mutations & actions)
  const checkAuth = async () => {

    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const res = await AuthService.getUserData(user.uid);
          setAuth(true);
          setUser(res.data());
          console.log(res.data());

        } catch {
          setAuth(false);
          setUser(undefined);
          AuthService.Logout();
        }
      } else {
        setAuth(false);
        setUser(undefined);
        AuthService.Logout();
      }
    });
  }

  const login = async (email: string, password: string) => {
    try {

      const user = await AuthService.login(email, password)
      console.log(user);

      // localStorage.setItem("idUser", user.uid);
      // const res = await auth.getUserData(id);
      // setAuth(true);
      // setUser(res.data());
    } catch (error) {
      console.log(error);

    }

  }

  const logout = async () => {
    await AuthService.Logout();
    afterLogout();
  }

  const afterLogout = async () => {
    setAuth(false);
    setUser(undefined);
    localStorage.setItem("isLoggedIn", false.toString());
    localStorage.removeItem("idUser");
  }

  // Private functions (replacing mutations)
  const setAuth = async (value: boolean) => {
    localStorage.setItem("isLoggedIn", value.toString());
    isLoggedIn.value = value;
  }

  const setUser = async (data: DocumentData | undefined) => {
    userData.value = data as UserType;
  }

  return {
    userData,
    isLoggedIn,
    getUserData,
    getAuthentication,
    checkAuth,
    login,
    logout,
    afterLogout,
  };
});
