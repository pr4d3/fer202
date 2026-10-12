import BSModal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Rating } from "./Card.jsx";
import "../style/modal.css";

const FALLBACK_IMG = "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=800";

export default function Modal({ show, onHide, orchid }) {
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
    <BSModal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      className="orchid-modal"
    >
      <BSModal.Header closeButton>
        <BSModal.Title className="d-flex align-items-center gap-2">
          <span>{name}</span>
          {isSpecial && (
            <span className="badge badge-special fs-6 py-1 px-2">
              Special
            </span>
          )}
        </BSModal.Title>
      </BSModal.Header>

      <BSModal.Body>
        <div className="row g-4 align-items-center">
          {/* Image */}
          <div className="col-md-6">
            <img
              src={img}
              alt={name}
              className="orchid-modal-img shadow-sm"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = FALLBACK_IMG;
              }}
            />
          </div>

          {/* Details */}
          <div className="col-md-6">
            <div className="d-flex align-items-center mb-3">
              <span className="me-2 text-muted">Đánh giá:</span>
              <Rating value={rating} />
            </div>

            <div className="p-3 bg-light rounded-3 orchid-modal-info">
              <div className="row g-2">
                <div className="col-6">
                  <small className="text-muted d-block">Phân loại chi:</small>
                  <strong>{type}</strong>
                </div>
                <div className="col-6">
                  <small className="text-muted d-block">Xuất xứ:</small>
                  <strong>{from}</strong>
                </div>
                <div className="col-6">
                  <small className="text-muted d-block">Màu sắc:</small>
                  <strong>{color}</strong>
                </div>
                <div className="col-6">
                  <small className="text-muted d-block">Tình trạng giống:</small>
                  <span className={`badge ${isNatural ? "bg-success" : "bg-info"}`}>
                    {isNatural ? "Loài tự nhiên" : "Giống lai tạo"}
                  </span>
                </div>
                <div className="col-12 mt-2 pt-2 border-top">
                  <small className="text-muted d-block">Lượt yêu thích:</small>
                  <span className="text-danger fw-bold">
                    ❤️ {like} người thích
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BSModal.Body>

      <BSModal.Footer>
        <button onClick={onHide} className="btn btn-muji-secondary">
          Đóng
        </button>
      </BSModal.Footer>
    </BSModal>
  );
}
