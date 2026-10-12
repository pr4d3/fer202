import { useState } from "react";
import ListOfOrchids from "../ListOfOrchids.js";
import CardList from "./CardList.jsx";
import Modal from "./Modal.jsx";

// Container Component: Quản lý dữ liệu và state modal chi tiết
export default function Container() {
  const orchids = ListOfOrchids;

  // State quản lý hoa lan đang được chọn để xem chi tiết trong Modal (Lab 2)
  const [selectedOrchid, setSelectedOrchid] = useState(null);

  const handleCloseModal = () => {
    setSelectedOrchid(null);
  };

  return (
    <div className="orchids-container">
      {/* Danh sách các card */}
      <CardList
        orchids={orchids}
        onSelectOrchid={setSelectedOrchid}
      />

      {/* Modal hiển thị chi tiết khi bấm nút Detail */}
      <Modal
        show={Boolean(selectedOrchid)}
        onHide={handleCloseModal}
        orchid={selectedOrchid}
      />
    </div>
  );
}
