<script lang="ts">
export default defineComponent({
  name: "MoleculesCard",
});
</script>

<template>
  <aside class="card">
    <img src="/images/sales.jpeg" alt="placeholder" />
    <hr class="card--divider" />
    <div class="card__content">
      <AtomsText size="medium" text="Card Title" />
      <AtomsText
        size="extra-small"
        text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
      <button class="card--button" @click="$emit('on-click')">
        <AtomsText size="extra-small" text="Card Title" />
      </button>
    </div>
  </aside>
</template>

<style scoped lang="scss">
@use "styles.module.scss" as *;
</style>
