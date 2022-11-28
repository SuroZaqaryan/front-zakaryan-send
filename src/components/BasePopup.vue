<script>
import { mapFields } from "vuex-map-fields";

import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseSelect from "@/components/BaseSelect.vue";

export default {
  components: {
    BaseButton,
    BaseInput,
    BaseSelect,
  },

  props: {
    value: {
      required: true,
    },
  },

  computed: {
    ...mapFields([
      "form.phone",
      "form.name",
      "form.email",
      "form.city_id",
      "countries",
    ]),
  },

  methods: {
    send() {
      this.$store.dispatch("send", this.$store.state.CallInfo.form);
    },

    close() {
      this.$emit("input", !this.value);
    },
  },
};
</script>

<template>
  <transition name="fade">
    <div
      v-show="value"
      class="modal bg-gray-opacity fixed top-0 left-0 p-2.5 w-full h-full"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-6 bg-white rounded-md sm:w-full">
          <div
            class="
              modal-header
              flex
              items-center
              justify-between
              cursor-pointer
            "
          >
            <h5 class="font-medium text-2xl">Заказать звонок</h5>
            <img
              @click.prevent="close"
              src="../assets/icons/close.svg"
              width="26"
              alt="close"
            />
          </div>

          <form @submit.prevent="send">
            <div
              class="modal-body grid grid-cols-3 gap-8 gap-y-6 mt-6 sm:block"
            >
              <base-input
                type="tel"
                maxlength="12"
                v-model="phone"
                placeholder="+7 (___) ___-__-__"
                label="Телефон"
              />
              <base-input
                type="text"
                v-model="name"
                placeholder="Иван Иванов"
                label="Имя*"
              />
              <base-input
                type="email"
                v-model="email"
                placeholder="you@example.com"
                label="Email*"
              />

              <div class="col-span-2">
                <BaseSelect
                  v-model="city_id"
                  :options="countries"
                  label="Город*"
                />
              </div>

              <div class="mt-1">
                <label class="invisible">*</label>
                <base-button type="submit" class="w-full px-0" variant="green">
                  Отправить
                </base-button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>