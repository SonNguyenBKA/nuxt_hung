<template>
  <div>
    <select v-model="selectedType" name="">
      <option value="type1">type1</option>
      <option value="type2">type2</option>
      <option value="type3">type3</option>
    </select>
    <button class="btn-common" :class="selectedType">
      btn d8 b2
    </button>
  </div>

</template>

<script>
export default {
  name: 'AbcDef',
  data() {
    return {
      selectedType: 'type1'
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.btn-common {
  @apply px-6 py-3 rounded-[4px] min-w-[111px];
  background: gray;
  &.type1 {
    background: red;
    &:hover {
      background: rgba(255, 165, 0, 0.58);
    }
  }
  &.type2 {
    background: orange;
  }
  &.type3 {
    background: yellow;
  }
}
</style>
