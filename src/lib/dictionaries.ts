import * as es from "./content/es";
import * as en from "./content/en";
import { ui } from "./ui";
import type { Locale } from "./i18n";

const content = { es, en };

export function getDictionary(locale: Locale) {
  return { ...content[locale], ui: ui[locale] };
}

export type Dictionary = ReturnType<typeof getDictionary>;
