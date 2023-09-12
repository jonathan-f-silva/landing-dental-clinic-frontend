/**
 * Checks if a string is a valid google maps embed
 * @param mapEmbed The google maps embed (iframe code)
 * @returns Whether the embed is valid or not
 */ 
export function isValidEmbed(mapEmbed: string) {
  return mapEmbed.startsWith('<iframe src="https://www.google.com/maps/embed?pb') && mapEmbed.endsWith('</iframe>')
}

/**
 * Returns the src from a valid google maps embed
 * @param mapEmbed The google maps embed (iframe code)
 * @returns The src URL of the embed
 */
export function parseSrcFromEmbed(mapEmbed: string) {
  const srcRegex = /src="([^"]+)"/;
  const src = mapEmbed.match(srcRegex);
  return (isValidEmbed(mapEmbed) && src) ? src[1] : '';
}
