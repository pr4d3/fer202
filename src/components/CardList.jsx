import Card from "./Card.jsx";

// Presentation Component: Nhận mảng orchids và lặp qua bằng map()
export default function CardList({ orchids = [], onSelectOrchid }) {
  if (!orchids || orchids.length === 0) {
    return (
      <div className="text-center py-5 text-muted">
        <p>Không có hoa lan nào trong danh sách.</p>
      </div>
    );
  }

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {orchids.map((orchid) => (
        <div className="col" key={orchid.id}>
          <Card orchid={orchid} onSelectOrchid={onSelectOrchid} />
        </div>
      ))}
    </div>
  );
}
