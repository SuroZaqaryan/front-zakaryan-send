<template>
  <div>
    <label class="form-label font-medium text-gray-700">{{label}}</label>
    <select
        @change="$emit('update', $event.target.value)"
        class="form-select appearance-none block w-full mt-1 px-3 py-2 text-base font-normal text-Neutral-900 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 "
    >
      <option
          v-for="opt in options"
          :key="opt.id"
          :value="opt.id"
          :selected="value === opt.id"
      >
        {{ opt.name || 'Нету опций' }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      required: true
    },
  },
  model: {
    prop: "value",
    event: "update"
  },
}
</script>