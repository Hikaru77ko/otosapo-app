<template>
  <transition name="modal" appear="">
    <div class="modal-overlay">
      <slot />
    </div>
  </transition>
</template>

<style scoped>
.modal-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>
