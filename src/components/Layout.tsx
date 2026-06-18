import { Link, useNavigate } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <Link to="/" className="logo" style={{ textDecoration: "none", color: "inherit" }}>
          COFFEE*POINT
        </Link>
        <nav>
          <Link to="/menu">Меню</Link>
          <Link to="/about">О нас</Link>
          <Link to="/about">Атмосфера</Link>
          <Link to="/contacts">Контакты</Link>
        </nav>
        <button className="btn-cta" onClick={() => navigate("/contacts")}>
          Заказать кофе
        </button>
      </header>

      <main>{children}</main>

      <footer>
        <div>
          <div className="footer-logo">COFFEE*POINT</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Твоё место для отличного кофе и тёплой лоу-фай атмосферы. С 2024, но ощущается как 1974.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <Link to="/menu" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </Link>
            </li>
            <li>
              <Link to="/about" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </Link>
            </li>
            <li>
              <Link to="/contacts" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн-Пт: 08:00 - 22:00</li>
            <li>Сб: 09:00 - 23:00</li>
            <li>Вс: 09:00 - 21:00</li>
            <li>Кофе с собой весь день</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2025 COFFEE POINT</span>
          <span>ВКУС КЛАССИКИ</span>
          <span>IG / TG / VK</span>
        </div>
      </footer>
    </>
  );
}
