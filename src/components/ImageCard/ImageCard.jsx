export default function ImageCard({ photo }) {
  return (
    <div>
      <img src={photo.urls.small} alt={photo.alt_description} />
    </div>
  );
}
