<template>
  <div :class="$style.footer">
    <span>© Nix Mangas</span>
  </div>
</template>

<style module lang="scss">
.footer {
  position: absolute;
  bottom: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: $bg-primary;
  height: 6vh;


  span {
    width: 100%;
    text-align: center;
    color: $fg-primary;
  }
}
</style>