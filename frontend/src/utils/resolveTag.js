import { TAGS } from "../data/constants";

export function resolveTag(tagName) {
  return TAGS.find(
    (t) => t.name.toLowerCase() === tagName.toLowerCase()
  );
}