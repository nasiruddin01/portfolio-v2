<script setup lang="ts">
const links = [
 

] as { name: string; to: string }[];

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});

const showHeader = ref(true);
const lastScrollPosition = ref(0);

const onScroll = () => {
  const currentScrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;
  // Momentum scrolling on iOS can cause the scroll position to be negative
  if (currentScrollPosition < 0) return;

  // add 60px delay
  if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) return;

  // show if scrolling up
  showHeader.value = currentScrollPosition < lastScrollPosition.value;

  lastScrollPosition.value = currentScrollPosition;
};
</script>
<template>
  <div
    :class="[
      showHeader ? 'translate-y-0' : '-translate-y-full',
      'transform-gpu transition-transform duration-500 sticky top-0 z-50',
    ]"
  >
    <Container class="pt-4 lg:pt-10">
      <div class="flex items-center justify-between">
        <Logo />
        <div
        
        >
          <div class="flex items-center gap-4">
            <div class="hidden lg:block">
              <NavLinks :links="links" />
            </div>
            <div class="lg:hidden">
              <NavLinksMobile :links="links" />
            </div>
            <ColorModeSwitch />
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
