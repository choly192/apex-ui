import { sortPackages } from '@pnpm/sort-packages';
import { createPkgGraph } from '@pnpm/workspace.pkgs-graph';
import { findPackages } from 'find-packages';
import { resolve } from 'path/posix';
import { buildProject } from './build';

async function run() {
  const flags = process.argv.slice(2);

  const watch = flags.includes('--watch');
  const clean = flags.includes('--clean');
  const dts = flags.includes('--dts');
  const prod = flags.includes('--prod');

  const packages = await findPackages('packages', {
    ignore: ['**/test-utils', '**/props-docs', '**/node_modules']
  });

  const { graph } = createPkgGraph(packages, {
    ignoreDevDeps: true,
    linkWorkspacePackages: true
  });

  const sortedDirs = sortPackages(graph as any)
    .flat()
    .filter(t => !t.includes('node_modules'));

  packages.sort((a, b) => {
    const aIndex = sortedDirs.indexOf(a.dir);
    const bIndex = sortedDirs.indexOf(b.dir);
    return aIndex - bIndex;
  });

  const aliases = packages.map(pkg => ({
    find: new RegExp(`^${pkg.manifest.name}`),
    replacement: resolve(pkg.dir, 'src')
  }));

  for (const pkg of packages) {
    await buildProject(pkg, { watch, clean, dts, aliases, prod });
  }
}

run().catch(err => {
  console.log(err);
  process.exit(1);
});
