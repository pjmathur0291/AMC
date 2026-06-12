/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import BhmLanding from './bhm/App';
import EngineeringLanding from './engineering/App';
import ManagementLanding from './management/App';
import GeneralLanding from './general/App';
import BcaMcaLanding from './bca-mca/App';
import ThankYou from './ThankYou';

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

  if (pathname.startsWith('/admission-open-in-management-program/')) {
    return <ManagementLanding />;
  }

  if (pathname.startsWith('/admission-open-2026/')) {
    return <GeneralLanding />;
  }

  if (pathname.startsWith('/admission-open-for-bca-mca/')) {
    return <BcaMcaLanding />;
  }

  if (pathname.startsWith('/thank-you/')) {
    return <ThankYou />;
  }

  if (pathname.startsWith('/bachelor-of-hotel-management/')) {
    return <BhmLanding />;
  }

  return <BhmLanding />;
}
