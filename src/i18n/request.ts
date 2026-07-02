import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

type AppLocale = (typeof routing.locales)[number];

function normalizeSimpleLineBreaks(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(normalizeSimpleLineBreaks);
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, normalizeSimpleLineBreaks(entry)])
    );
  }

  if (typeof value === 'string' && /<br\s*\/?>/i.test(value)) {
    const hasOtherHtmlTags = /<(?!br\s*\/?)[a-z][^>]*>/i.test(value);

    if (!hasOtherHtmlTags) {
      return value.replace(/<br\s*\/?>/gi, '\n');
    }
  }

  return value;
}

export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as AppLocale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: normalizeSimpleLineBreaks((await import(`../messages/${locale}.json`)).default)
  };
});
