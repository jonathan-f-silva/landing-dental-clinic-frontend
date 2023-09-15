type MapEmbedProps = {
  src: string;
  title?: string;
};

function MapEmbed({ src, title = "Localização no mapa" }: MapEmbedProps) {
  return (
    <iframe
      title={title}
      src={src}
      loading="lazy"
      referrerPolicy="no-referrer"
      width="100%"
    ></iframe>
  );
}
export default MapEmbed;
