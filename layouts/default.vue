<template>
  <div :class="{ 'show-modal-sp': showModal }">
    <client-only>
      <HeaderCommon />
      <NotificationBlock />
      <div class="home">
        <nuxt />
      </div>
      <FooterCommon />
      <LoadingBar />
    </client-only>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import {
  SET_SHOW_MODAL_SP,
  SET_SHOW_MESSAGE_SP,
  SET_PREVIOUS_URL,
  SET_BACK_LOGIN
} from '../store/store.const'
import LoadingBar from '../components/LoadingBar'
import HeaderCommon from '../components/layout/HeaderCommon'
import FooterCommon from '../components/layout/FooterCommon'
import NotificationBlock from '@/components/NotificationBlock'

export default {
  name: 'DefaultLayout',
  components: { FooterCommon, HeaderCommon, LoadingBar, NotificationBlock },
  computed: {
    ...mapState({
      showModal: state => state.showModalSp
    })
  },
  created() {
    this.$store.commit(SET_SHOW_MODAL_SP, false)
    if (this.$route.path !== '/logout') {
      this.$store.commit(SET_PREVIOUS_URL, this.$route.path)
    }
    this.$store.commit(SET_BACK_LOGIN, [])
  },
  watch: {
    '$route.path'(value) {
      if (value !== '/logout') {
        this.$store.commit(SET_PREVIOUS_URL, value)
      }
      this.$store.commit(SET_SHOW_MESSAGE_SP, false)
    }
  }
}
</script>
