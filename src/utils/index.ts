export function isValidEmbed(mapEmbed: string) {
  return mapEmbed.startsWith('<iframe src="https://www.google.com/maps/embed?pb') && mapEmbed.endsWith('</iframe>')
}

export function parseSrcFromEmbed(mapEmbed: string) {
  const srcRegex = /src="([^"]+)"/;
  const src = mapEmbed.match(srcRegex);
  return (isValidEmbed(mapEmbed) && src) ? src[1] : '';
}
