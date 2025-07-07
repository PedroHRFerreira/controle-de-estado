<script lang="ts">
export default defineComponent({
  name: "MoleculesCard",
});
</script>

<template>
  <aside>
    <img src="/images/placeholder.png" alt="placeholder" />
    <div>
      <AtomsText
        size="large"
        types="primary"
        text="Card Title"
        @onclick="() => console.log('Card title clicked')"
      />
    </div>
  </aside>
</template>

<style scoped lang="scss">
@import "styles.module.scss";
</style>
