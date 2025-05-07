import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'stencil-library',
  sourceMap: false,
  transformAliasedImportPaths: true,
  plugins: [sass()],
  extras: {
    enableImportInjection: true,
    experimentalSlotFixes: true,
    scopedSlotTextContentFix: true,
  },
  outputTargets: [
    reactOutputTarget({
      // Relative path to where the React components will be generated
      outDir: '../react-library/src',
      hydrateModule: 'stencil-library/hydrate',
    }),
    // dist-custom-elements output target is required for the React output target
    { type: 'dist-custom-elements', externalRuntime: false },
    {
      type: 'dist-hydrate-script',
      dir: './hydrate',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    }
  ],
};
