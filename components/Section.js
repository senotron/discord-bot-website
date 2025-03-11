export default function Section({ image, title, description }) {
  return (
    <section className="section">
      <div className="section-image">
        <img src={image} alt={title} />
      </div>
      <div className="section-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}
