import { h, nextTick, watch } from 'vue'
import type { Theme } from 'vitepress'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { createMermaidRenderer } from "vitepress-mermaid-renderer";

import ImageViewerP from '@miletorix/vitepress-image-viewer'
import '@miletorix/vitepress-image-viewer/style.css'

import BackToTopButton from '@miletorix/vitepress-back-to-top-button'
import '@miletorix/vitepress-back-to-top-button/style.css'


export default {
  extends: DefaultTheme,
  Layout: () => {
    const { isDark } = useData();

    const initMermaid = () => {
      const mermaidRenderer = createMermaidRenderer({
        theme: isDark.value ? "dark" : "forest",
      });
      mermaidRenderer.setToolbar({
        showLanguageLabel: false,
        desktop: {
          copyCode: "enabled",
          toggleFullscreen: "enabled",
          resetView: "enabled",
          zoomOut: "enabled",
          zoomIn: "enabled",
          zoomLevel: "enabled",
        },
        fullscreen: {
          copyCode: "disabled",
          toggleFullscreen: "enabled",
          resetView: "disabled",
          zoomLevel: "disabled",
        },
      });
    };

    // initial mermaid setup
    nextTick(() => initMermaid());

    // on theme change, re-render mermaid charts
    watch(
      () => isDark.value,
      () => {
        initMermaid();
      },
    );

    return h(DefaultTheme.Layout);
  },
  enhanceApp(ctx) {
    ImageViewerP(ctx.app)
    BackToTopButton(ctx.app)
  },
} satisfies Theme;
