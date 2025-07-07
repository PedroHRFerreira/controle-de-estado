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
      <AtomsText
        text="Card Title"
        @onclick="() => console.log('Card title clicked')"
      />
    </div>
  </aside>
</template>

<style scoped lang="scss">
@use "styles.module.scss" as *;
</style>
