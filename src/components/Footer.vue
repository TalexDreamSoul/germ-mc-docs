<template>
  <div class="Footer-Container">
    <p class="copyright">Copyright © 2020 - 2022 GermMC</p>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>

.copyright {
  position: relative;

  opacity: .7;
  font-size: 13px;

}

.Footer-Container {
  position: sticky;

  bottom: 0;
  left: 0;

  width: 100%;
  height: 0;

  background-color: var(--bgColor);
  filter: invert(.5%);
  //box-shadow: 0 -1px 16px 1px rgba(0, 0, 0, .25);

}

</style>
