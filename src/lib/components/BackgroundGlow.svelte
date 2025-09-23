<script lang="ts">
const {
  top = -240,
  bottom = -320,
  intensity = 1,
} = $props<{ top?: number; bottom?: number; intensity?: number }>();

const lightOpacity = $derived(Math.min(Math.max(intensity, 0.55), 0.85));
const darkOpacity = $derived(Math.min(Math.max(intensity, 0.45), 0.8));
const glowHeight = $derived(`calc(100vh + ${Math.round(intensity * 600)}px)`);
const glowStyle = $derived(
  `--glow-top:${top}px; --glow-bottom:${bottom}px; --glow-height:${glowHeight}; --glow-opacity:${lightOpacity}; --glow-opacity-dark:${darkOpacity};`
);
</script>

<div class="glow" style={glowStyle} aria-hidden="true"></div>
<div class="veil" aria-hidden="true"></div>

<style>
  :global(body) {
    position: relative;
  }

  .glow,
  .veil {
    pointer-events: none;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    width: max(1200px, 110vw);
    z-index: -2;
    backdrop-filter: blur(0);
  }

  .glow {
    top: var(--glow-top);
    bottom: var(--glow-bottom);
    inset-inline: auto;
    height: var(--glow-height);
    background:
      radial-gradient(circle at 25% -10%, rgba(78, 70, 255, 0.3) 0%, rgba(78, 70, 255, 0) 55%),
      radial-gradient(circle at 80% -15%, rgba(244, 91, 178, 0.3) 0%, rgba(244, 91, 178, 0) 52%),
      radial-gradient(circle at 90% 120%, rgba(244, 91, 178, 0.22) 0%, rgba(244, 91, 178, 0) 70%),
      radial-gradient(circle at 15% 110%, rgba(78, 70, 255, 0.28) 0%, rgba(78, 70, 255, 0) 72%);
    opacity: var(--glow-opacity);
  }

  :global(:root[data-theme='dark']) .glow {
    background:
      radial-gradient(circle at 25% -10%, rgba(255, 58, 88, 0.28) 0%, rgba(255, 58, 88, 0) 50%),
      radial-gradient(circle at 80% -15%, rgba(153, 40, 60, 0.32) 0%, rgba(153, 40, 60, 0) 52%),
      radial-gradient(circle at 90% 120%, rgba(153, 40, 60, 0.24) 0%, rgba(153, 40, 60, 0) 70%),
      radial-gradient(circle at 15% 110%, rgba(255, 58, 88, 0.25) 0%, rgba(255, 58, 88, 0) 72%);
    opacity: var(--glow-opacity-dark);
  }

  .veil {
    inset: 0;
    background: linear-gradient(180deg, rgba(239, 241, 251, 0.65) 0%, rgba(239, 241, 251, 0) 32%),
      linear-gradient(180deg, rgba(239, 241, 251, 0) 62%, rgba(228, 233, 252, 0.75) 100%);
    opacity: 0.65;
  }

  :global(:root[data-theme='dark']) .veil {
    background: linear-gradient(180deg, rgba(7, 6, 12, 0.65) 0%, rgba(7, 6, 12, 0) 35%),
      linear-gradient(180deg, rgba(7, 6, 12, 0) 60%, rgba(12, 8, 11, 0.78) 100%);
    opacity: 0.72;
  }
</style>
