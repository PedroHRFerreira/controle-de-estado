<script lang="ts">
export default defineComponent({
  name: "MoleculesCard",
});
</script>

<template>
  <aside class="card">
    <img src="/images/sales.jpeg" alt="placeholder" />
    <hr class="card--divider" />
    <div>
      <AtomsText size="medium" text="Card Title" />
      <AtomsText size="extra-small" text="Card Title" />
    </div>
  </aside>
</template>

<style scoped lang="scss">
@use "styles.module.scss" as *;
</style>
