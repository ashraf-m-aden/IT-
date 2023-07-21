<template>
  <div>
    <HeaderTwo v-if="currentUrl == '/web-hosting'" />
    <HeaderThree v-else-if="currentUrl == '/machine-learning'" />
    <HeaderFour v-else-if="currentUrl == '/digital-agency'" />
    <div
      v-else-if="
        currentUrl == '/not-found' || currentUrl == '/coming-soon'
      "
    />
    <Header v-else />
    <PreLoader v-if="isLoading" />
    <router-view />
    <div
      v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"
    />
    <Footer v-else />
  </div>
</template>

<script>
import Header from './components/layout/Header'
import HeaderTwo from './components/layout/HeaderTwo'
import HeaderThree from './components/layout/HeaderThree'
import HeaderFour from './components/layout/HeaderFour'
import Footer from './components/layout/Footer'
import PreLoader from './components/layout/PreLoader'
import auth from './services/auth'
export default {
  name: 'App',
  components: {
    Header,
    HeaderTwo,
    HeaderThree,
    HeaderFour,
    Footer,
    PreLoader
  },

  data () {
    return {
      isLoading: true,
      currentUrl: '',
      emailVerified: false
    }
  },

  watch: {
    $route (pathUrl) {
      this.currentUrl = pathUrl.path
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 1500)
    }
  },
  async beforeUnmount () {
    await this.$store.dispatch('logout')
  },
  async mounted () {
    const id = localStorage.getItem('idUser')
    if (id != null || undefined) {
      await this.$store.dispatch('afterLogin', id)
      await this.$store.dispatch('setCoursesDisponibles')
      await this.$store.dispatch('setMyCourses')
    } else {
      await auth.anonymous()
      await this.$store.dispatch('setCoursesDisponibles')
    }
    this.currentUrl = window.location.pathname
    setTimeout(() => {
      this.isLoading = false
    }, 2000)
  }
}
</script>
