<template>
  <form class="container">
    <h2>Drop Us a Line</h2>
    <p>Reach out to us from out contact form and we will get back to you shortly</p>
    <div class="w-full flex flex-col gap-5">
      <div class="grid grid-cols-2 gap-y-5 gap-x-10">
        <div class="input-template">
          <label class="input-template__label">
            <input type="text" class="text-field" required>
            <span class="placeholder">First Name *</span>
          </label>
        </div>
        <div class="input-template">
          <label class="input-template__label">
            <input type="text" class="text-field" required>
            <span class="placeholder">Last Name *</span>
          </label>
        </div>
        <div class="input-template">
          <label class="input-template__label">
            <input type="text" class="text-field" required>
            <span class="placeholder">Email *</span>
          </label>
        </div>
          <select class="select-template">
            <option value="" disabled selected hidden>Sales</option>
            <option value="js">JS</option>
            <option value="vue">Vue</option>
            <option value="react">React</option>
            <option value="angular">Angular</option>
          </select>
      </div>
      <div class="grid grid-cols-1">
        <div class="input-template">
          <label class="input-template__label">
            <textarea type="text" class="text-field text-area-field" rows="5" required />
            <span class="placeholder">Message *</span>
          </label>
        </div>
      </div>
      <button class="btn-submit">Send message</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'D8BN'
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 920px;
  @apply w-full flex flex-col items-center justify-center gap-10 m-auto min-h-[100dvh];
}
.input-template {
  @apply relative w-full;
  .text-field {
    border:1px solid #e3f2fd;
    outline: none;
    @apply relative shadow-none rounded-[5px] px-[15px] pt-[13px] pb-[13px] w-[inherit] leading-[100%];
    @extend .animation-input-template;
    &:hover {
      border:1px solid #0d47a1;
    }
    &:focus, &:valid {
      border:1px solid #0d47a1;
      @apply pt-[20px] pb-[5px];
    }
    &:focus ~ .placeholder, &:not(:focus):valid ~ .placeholder {
     @apply text-[12px] leading-[100%] top-[7px];
    }
    &.text-area-field:focus {
      @apply pt-[20px] pb-[6px];
    }
    &.text-area-field:focus ~ .placeholder {
      &:after {
        @apply absolute content-[''] w-full h-[7px] left-0 -top-1.5;
        background: white;
      }
    }
  }
  .placeholder {
    @apply absolute z-[1] bg-white text-[#A9A9A9] text-sm px-[5px] py-0 left-2.5 top-[13px];
    @extend .animation-input-template;
  }
  &__label {
    @apply w-full;
  }
}
.select-template {
  border:1px solid #e3f2fd;
  outline: none;
  @apply relative w-full shadow-none rounded-[5px] leading-[100%] text-[14px] text-[#a9a9a9];
  @extend .animation-input-template;
    @apply h-full w-full px-[10px] pt-[13px] pb-[13px];
    appearance: none;
    background-image: url('@/assets/icons/arrow-down.svg');
    background-repeat: no-repeat;
    background-position: right 0.7rem top 50%;
    background-size: 0.65rem auto;
    &:focus, &:hover {
      border:1px solid #0d47a1 !important;

  }
}
.animation-input-template {
  transition: ease-in-out 0.2s all;
  -webkit-transition: ease-in-out 0.2s all;
  -moz-transition: ease-in-out 0.2s all;
  -o-transition: ease-in-out 0.2s all;
}
.btn-submit {
  @apply px-8 py-4 rounded-[40px] bg-[#0d47a1] w-fit m-auto;
  @apply font-bold text-white text-[16px];
  &:hover, &:focus {
    @apply opacity-[0.8];
  }
}
</style>
