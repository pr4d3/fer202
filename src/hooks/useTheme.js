import { useState, useEffect } from "react";

// Custom Hook: Quản lý Dark / Light Theme và lưu vào localStorage
export default function useTheme(defaultTheme = "light") {
  // 1. Khởi tạo theme từ localStorage nếu có
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("app_theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
      }
    } catch {
      // Bỏ qua nếu môi trường chặn localStorage
    }
    return defaultTheme;
  });

  // 2. useEffect: Đồng bộ với Bootstrap 5 (data-bs-theme) và localStorage
  useEffect(() => {
    try {
      localStorage.setItem("app_theme", theme);
    } catch {
      // ignore
    }

    // data-bs-theme là thuộc tính chuẩn của Bootstrap 5 để kích hoạt dark mode
    document.documentElement.setAttribute("data-bs-theme", theme);

    if (theme === "dark") {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [theme]);

  // 3. Hàm chuyển đổi qua lại giữa light và dark
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return {
    theme,
    toggleTheme,
    isDarkMode: theme === "dark"
  };
}
