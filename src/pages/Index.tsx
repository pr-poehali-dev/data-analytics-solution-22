export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">COFFEE*POINT</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Атмосфера</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Заказать кофе</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              КОФЕ КОТОРЫЙ
              <br />
              БУДИТ <span>ДУШУ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Эстетика 70-х в каждой чашке. Свежеобжаренные зёрна, авторские напитки и атмосфера для настоящих ценителей кофе.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Заказать кофе
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть меню
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              СВЕЖАЯ
              <br />
              ОБЖАРКА
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #АРОМАТ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              БОДРОСТЬ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * СВЕЖЕОБЖАРЕННЫЕ ЗЁРНА * АВТОРСКИЕ НАПИТКИ * ТОЛЬКО РЕТРО ВАЙБ * РАБОТАЕМ С УТРА * ЛУЧШИЙ КОФЕ В ГОРОДЕ *
            СВЕЖЕОБЖАРЕННЫЕ ЗЁРНА * АВТОРСКИЕ НАПИТКИ * ТОЛЬКО РЕТРО ВАЙБ * РАБОТАЕМ С УТРА * ЛУЧШИЙ КОФЕ В ГОРОДЕ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ВЫБОР БАРИСТА</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://cdn.poehali.dev/projects/991b9050-0246-4b60-b48c-d9e0f9d0203e/files/54562168-788c-4638-b59d-20d88ec827bf.jpg"
                alt="Капучино"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Капучино</h3>
                  <span className="price">250 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Бархатная молочная пенка, насыщенный эспрессо и фирменный латте-арт от баристы.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Авторское
              </span>
              <img
                src="https://cdn.poehali.dev/projects/991b9050-0246-4b60-b48c-d9e0f9d0203e/files/5e9a23fe-3776-4451-91a0-05172038c17b.jpg"
                alt="Раф"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Ванильный раф</h3>
                  <span className="price">290 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Сливочный кофе с ванилью, нежная текстура и мягкий вкус.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://cdn.poehali.dev/projects/991b9050-0246-4b60-b48c-d9e0f9d0203e/files/a0501046-c481-4f3d-bf01-3f6efe3c6d8d.jpg"
                alt="Айс латте"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Айс латте</h3>
                  <span className="price">270 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Освежающий холодный латте со льдом, эспрессо и нежным молоком.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">АТМОСФЕРА ТЕПЛА.</h2>
            <p className="vibe-text">
              Мы не просто варим кофе. Мы создаём моменты. От винтажного плейлиста до уютных диванов в стиле 70-х — каждый
              уголок продуман для твоего идеального утра. Просто заходи на чашку и оставайся подольше.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div
            className="vibe-img"
            style={{
              backgroundImage:
                "url('https://cdn.poehali.dev/projects/991b9050-0246-4b60-b48c-d9e0f9d0203e/files/7787eab8-82f2-4e40-a62a-3a1da2f8482f.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @COFFEE.POINT
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/991b9050-0246-4b60-b48c-d9e0f9d0203e/files/54562168-788c-4638-b59d-20d88ec827bf.jpg"
                alt="Капучино"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/991b9050-0246-4b60-b48c-d9e0f9d0203e/files/7787eab8-82f2-4e40-a62a-3a1da2f8482f.jpg"
                alt="Интерьер кофейни"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/991b9050-0246-4b60-b48c-d9e0f9d0203e/files/5e9a23fe-3776-4451-91a0-05172038c17b.jpg"
                alt="Раф"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/991b9050-0246-4b60-b48c-d9e0f9d0203e/files/a0501046-c481-4f3d-bf01-3f6efe3c6d8d.jpg"
                alt="Айс латте"
              />
            </div>
          </div>
        </section>
      </main>

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
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Условия
              </a>
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