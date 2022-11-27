<script>
import BasePopup from "./components/BasePopup.vue"
import BaseButton from "./components/BaseButton.vue"

export default {
  name: 'App',
  components: {
    BasePopup,
    BaseButton
  },
  data() {
    return {
      modalOpen: false
    }
  },
  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen;
    }
  }
}
</script>

<template>
  <div class="font-body">
    <div class="flex gap-5 mx-8 my-5 sm:flex-wrap sm:m-2.5 sm:gap-2.5">
      <base-button data-bs-toggle="modal" data-bs-target="#exampleModal" variant="blue">Заказать в Москву
      </base-button>
      <base-button @click="openModal" variant="teal">Заказать в Санкт-Петербург</base-button>
    </div>

    <base-popup v-model="modalOpen"></base-popup>
  </div>
</template>