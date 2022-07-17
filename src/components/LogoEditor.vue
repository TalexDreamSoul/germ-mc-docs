<template>
  <div class="Logo-Container">
    <img alt="" src="./../assets/logo.ico" />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.Logo-Container {

  position: relative;
  margin: 0 10px 12px 0;
  display: inline-block;

  //left: 50%;
  top: -10px;

  user-select: none;

  img {

    position: absolute;

    left: 50%;

    width: 36px;

    transition: all .25s;
    transform: translateX(-50%);

  }

  &:after {
    content: "Editor";
    position: relative;
    padding: 2px 4px;

    right: -18px;
    bottom: -18px;

    font-size: 10px;
    border-radius: 4px;
    background-color: #0288d1;
    color: #eee;

    opacity: .85;

  }

  transform: scale(.8);

}

@media only screen and (max-width: 600px) {

  .Logo-Container {

    top: 0;

  }

}

</style>
