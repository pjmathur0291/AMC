/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import BhmLanding from './bhm/App';
import EngineeringLanding from './engineering/App';

function normalizePathname(pathname: string) {
  if (!pathname) return '/';
  let p = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (!p.endsWith('/')) p = `${p}/`;
  return p;
}

export default function App() {
  const pathname = normalizePathname(window.location.pathname);

  if (pathname === '/') {
    window.history.replaceState({}, '', '/bachelor-of-hotel-management/');
    return <BhmLanding />;
  }

  if (pathname.startsWith('/admission-open-btech-mtech/')) {
    return <EngineeringLanding />;
  }

  if (pathname.startsWith('/bachelor-of-hotel-management/')) {
    return <BhmLanding />;
  }

  return <BhmLanding />;
}
