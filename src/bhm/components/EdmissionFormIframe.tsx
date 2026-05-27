/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo } from 'react';

const UTM_KEYS = ['utm_channel', 'utm_source', 'utm_medium', 'utm_campaign'];

export default function EdmissionFormIframe() {
  const iframeSrc = useMemo(() => {
    const baseUrl =
      'https://form.edmissioncrm.com/form-preview/a29335a3-7c67-4600-b62d-397165e9580e';

    const pageParams = new URLSearchParams(window.location.search);
    const url = new URL(baseUrl);

    UTM_KEYS.forEach((key) => {
      const value = pageParams.get(key);
      if (value) {
        url.searchParams.set(key, value);
      }
    });

    return url.toString();
  }, []);

  return (
    <iframe
      src={iframeSrc}
      width="100%"
      height="500"
      style={{ border: 0 }}
      title="Edmission Form"
    />
  );
}
