<template>
  <div class="Logo-Container">
    <img alt="" src="./../assets/logo.ico" />
    <span class="text-wrapper">
      <span class="logo germ">Germ</span>
      <span class="logo mc">MC</span>
    </span>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.Logo-Container {

  user-select: none;

  img {

    transition: all .25s;

  }

  .text-wrapper {

    position: relative;

    left: 5px;
    top: -10px;

    font-weight: bold;
    transition: all .25s;

  }

  .mc {

    color: #fff;

    background-color: #0288d1;

  }

  .logo {

    position: relative;

    padding: 2px 4px;

    border-radius: 4px;

  }

}

</style>

<style>

@media only screen and (max-width: 600px) {

 .text-wrapper {

   position: absolute;
   opacity: 0;

 }

  .Logo-Container {

    position: absolute;

    //width: 100%;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

  }

  .Logo-Container img {
    position: absolute;

    left: 50%;

    transform: translateX(-50%);

  }

}

@media (prefers-color-scheme: dark) {

  .Logo-Container {

    filter: brightness(120%);

  }

}

</style>
