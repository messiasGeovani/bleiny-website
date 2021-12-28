<template>
  <section
    class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center home__container"
  >
    <div class="is-flex">
      <BImage
        src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"
        alt="A random image"
        :responsive="true"
        :lazy="true"
        custom-class="logo"
        class="is-128x128"
      />

      <div class="ml-5">
        <h1 class="title">Bleiny</h1>
        <h2 class="is-size-3-desktop mt-2 subtitle">
          Elevate your horror experience...
        </h2>
      </div>
    </div>

    <div
      class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center home__caption"
    >
      <div>
        <p class="is-size-6-desktop has-text-centered home__text">
          Fugiat exercitation qui magna officia ullamco nulla.
        </p>
      </div>

      <br />

      <span class="divider--semi-full" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeSection',
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utils.scss';

%head-text {
  text-shadow: 4px 4px 4px rgba(191, 191, 191, 0.25);
  color: white;
}

.logo {
  max-height: 200px;
  max-width: 200px;
}

.home {
  &__container {
    width: 100%;
    height: 600px;
  }

  &__caption {
    width: 100%;
    position: relative;
    top: 200px;
  }

  &__text {
    text-transform: uppercase;
  }
}

.title {
  @extend %head-text;
  font-family: 'Rochester', cursive;
  font-size: 4.5em;
}

.subtitle {
  @extend %head-text;
  font-family: 'Romanesco', cursive;
  letter-spacing: 0.1em;
}
</style>
