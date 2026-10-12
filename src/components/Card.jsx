import "../style/card.css";

const FALLBACK_IMG = "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=800";

// Reusable Rating component (DRY: can be used in Card & Modal)
export function Rating({ value = 0, max = 5 }) {
  return (
    <div className="small" title={`${value} / ${max} stars`}>
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={i < value ? "star-filled" : "star-empty"}>
          ★
        </span>
      ))}
      <span className="ms-1 text-muted fw-semibold">({value}.0)</span>
    </div>
  );
}

export default function Card({ orchid, onSelectOrchid }) {
  if (!orchid) return null;

  const {
    name,
    rating,
    isSpecial,
    isNatural,
    img,
    color,
    like,
    from,
    type
  } = orchid;

  return (
    <div className="card h-100 shadow-sm border-0 position-relative orchid-card">
      {/* Badges on top of image */}
      <div className="orchid-badges">
        {isSpecial && (
          <span className="badge badge-special">
            Special
          </span>
        )}
        <span className={`badge ${isNatural ? "badge-natural" : "badge-natural opacity-75"}`}>
          {isNatural ? "Natural" : "Hybrid"}
        </span>
      </div>

      {/* Orchid Image */}
      <div className="orchid-img-wrapper">
        <img
          src={img}
          alt={name}
          className="orchid-img"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = FALLBACK_IMG;
          }}
        />
      </div>

      {/* Card Body */}
      <div className="card-body d-flex flex-column">
        {/* Type & Origin */}
        <div className="d-flex justify-content-between align-items-center mb-1">
          <span className="badge bg-secondary-subtle text-secondary-emphasis">
            {type}
          </span>
          <small className="text-muted">
            {from}
          </small>
        </div>

        {/* Orchid Name */}
        <h5 className="card-title fw-bold text-truncate mb-2" title={name}>
          {name}
        </h5>

        {/* Color and Rating */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <small className="text-muted">
            Color: <strong>{color}</strong>
          </small>
          <Rating value={rating} />
        </div>

        {/* Footer actions: Likes and Detail button */}
        <div className="mt-auto pt-2 border-top d-flex justify-content-between align-items-center">
          <span className="orchid-like">
            ❤️ {like} likes
          </span>
          <button
            onClick={() => onSelectOrchid?.(orchid)}
            className="btn btn-detail"
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}
