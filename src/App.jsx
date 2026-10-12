import useTheme from "./hooks/useTheme.js";
import Container from "./components/Container.jsx";

export default function App() {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <div className="container py-4">
      {/* Header & Nút Chuyển Đổi Giao Diện */}
      <header className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
        <div>
          <span className="muji-label d-block mb-1">BỘ SƯU TẬP LAN</span>
          <h1 className="mb-1">LAN CHƯA ĐỘT BIẾN</h1>
          <p className="text-muted mb-0 small">
            Khám phá 16 giống hoa lan quý hiếm và đặc hữu tự nhiên
          </p>
        </div>

        {/* Nút bấm chuyển đổi Giao diện Sáng / Tối */}
        <button
          onClick={toggleTheme}
          className="btn btn-muji-primary d-flex align-items-center gap-2"
          title={`Chuyển sang giao diện ${isDarkMode ? "Sáng" : "Tối"}`}
        >
          <span>{isDarkMode ? "Chế độ Sáng" : "Chế độ Tối"}</span>
        </button>
      </header>

      {/* Danh sách hoa lan (Container Component) */}
      <main>
        <Container />
      </main>
    </div>
  );
}
