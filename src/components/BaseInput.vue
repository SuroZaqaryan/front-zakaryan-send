<script>

const TYPES = [
  "text",
  "password",
  "email",
  "number",
  "url",
  "tel",
  "search",
  "color"
];

const includes = types => type => types.includes(type);

export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text",
      validator(value) {
        const isValid = includes(TYPES)(value);
        if (!isValid) {
          // eslint-disable-next-line
          console.warn(`allowed types are ${TYPES}`);
        }
        return isValid;
      }
    },
    placeholder: {
      type: String,
      default: "",
    }
  },
  model: {
    prop: "value",
    event: "update"
  }
};
</script>

<template>
  <div class="sm:mt-5">
    <label for="exampleText0" class="form-label font-medium text-gray-700">{{label}}</label>
    <input
        :type="type"
        v-on="$listeners"
        :value="value"
        @input="$emit('update', $event.target.value)"
        :placeholder="placeholder"
        class="mt-1 px-3 py-2 font-normal bg-white border border-gray-300 max-w-full rounded-md p-1 sm:block sm:w-full"
    >
  </div>
</template>