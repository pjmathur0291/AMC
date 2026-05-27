import { useMemo } from 'react';

const UTM_KEYS = ['utm_channel', 'utm_source', 'utm_medium', 'utm_campaign'];

export default function EdmissionFormIframe() {
  const iframeSrc = useMemo(() => {
    const baseUrl =
      'https://form.edmissioncrm.com/form-preview/7bf1fd79-a833-47f1-a9e8-b2a58e638d57';

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
      height="600"
      style={{ border: 0 }}
      title="Edmission Form"
    />
  );
}
