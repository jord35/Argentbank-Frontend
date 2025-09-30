import "./style.scss";


export default function FeatureItem({ iconSrc, iconAlt, title, children }) {
  return (
    <div className="feature">
      <img src={iconSrc} alt={iconAlt} className="feature-icon" />
      <h3 className="feature-title">{title}</h3>
      <div className="feature-content">{children}</div>
    </div>
  );
}