<script>
import {mapMutations} from "vuex";
import {mapFields} from "vuex-map-fields";

import BaseInput from "@/components/BaseInput.vue"
import BaseButton from "@/components/BaseButton.vue"
import BaseSelect from "@/components/BaseSelect.vue"

export default {
  components: {
    BaseButton,
    BaseInput,
    BaseSelect
  },

  computed: {
    ...mapFields([
      "form.phone",
      "form.name",
      "form.email",
      "form.country",

      "countries",
    ]),
  },

  methods: {
    ...mapMutations(["send"]),
  },
};
</script>

<template>
  <div class="modal fade fixed top-0 left-0 p-2.5 hidden w-full h-full overflow-x-hidden overflow-y-auto" id="exampleModal"
       tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
      <div class="modal-content p-6 bg-white rounded-md pointer-events-auto sm:w-full">
        <div class="modal-header">
          <h5 class="font-medium text-2xl">Заказать звонок</h5>
        </div>

        <form @submit.prevent="send">
          <div class="modal-body relative grid grid-cols-3 gap-8 gap-y-6 mt-6 sm:block">

            <base-input type="tel" v-model="phone" placeholder="+7 (___) ___-__-__" label="Телефон"/>
            <base-input type="text" v-model="name" placeholder="Иван Иванов" label="Имя*"/>
            <base-input type="email" v-model="email" placeholder="you@example.com" label="Email*"/>

            <div class="col-span-2">
              <BaseSelect v-model="country" :options="countries" label="Город*"/>
            </div>

            <div class="mt-1">
              <label class="invisible">*</label>
              <base-button type="submit" class="w-full px-0" variant="green">Отправить</base-button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
