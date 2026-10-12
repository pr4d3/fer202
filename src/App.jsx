import "bootstrap/dist/css/bootstrap.min.css";
import useTheme from "./hooks/useTheme.js";
import Container from "./components/Container.jsx";

export default function App() {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <div className="container py-4">
      {/* Header & Nút Toggle Theme */}
      <header className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
        <div>
          <span className="muji-label d-block mb-1">BOTANICAL COLLECTION</span>
          <h1 className="mb-1">Orchids Collection</h1>
          <p className="text-muted mb-0 small">
            Khám phá 16 giống hoa lan quý hiếm và lai tạo tự nhiên
          </p>
        </div>

        {/* Nút bấm chuyển đổi Dark / Light Theme theo Muji single-action Tertiary accent */}
        <button
          onClick={toggleTheme}
          className="btn btn-muji-primary d-flex align-items-center gap-2"
          title={`Chuyển sang chế độ ${isDarkMode ? "Light" : "Dark"}`}
        >
          <span>{isDarkMode ? "Light Paper" : "Dark Ink"}</span>
        </button>
      </header>

      {/* Danh sách hoa lan (Container Component) */}
      <main>
        <Container />
      </main>
    </div>
  );
}
