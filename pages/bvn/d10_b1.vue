<template>
  <div class="toggle-icon">
    <input type="checkbox" id="toggle" class="toggle-checkbox">
    <label for="toggle" class="toggle-label">
      <i class="fa-solid fa-bars"></i>
      <i class="fa-solid fa-arrow-right"></i>
    </label>
  </div>
</template>

<script>
export default {
  name: 'D10B1'
}
</script>

<style lang="scss" scoped>
.toggle-checkbox {
  display: none;
}

.toggle-label {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  position: relative;
}

.toggle-label .fa-solid {
  position: absolute;
  transition: all 0.3s ease-in-out;
}

.toggle-label .fa-bars {
  transform: rotate(0deg);
}

.toggle-label .fa-arrow-right {
  transform: rotate(-180deg);
  opacity: 0;
}

.toggle-checkbox:checked + .toggle-label .fa-bars {
  transform: rotate(180deg);
  opacity: 0;
}

.toggle-checkbox:checked + .toggle-label .fa-arrow-right {
  transform: rotate(0deg);
  opacity: 1;
}

</style>
