import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";

const CDN = "https://cdn.poehali.dev/projects/991b9050-0246-4b60-b48c-d9e0f9d0203e/files";

export default function About() {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            НАША <span>ИСТОРИЯ</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
            Coffee Point начался с любви к настоящему кофе и эстетике 70-х. Мы создаём место, где каждая чашка — это
            ритуал, а каждый гость — часть нашей семьи.
          </p>
          <button
            className="btn-cta"
            style={{ background: "var(--primary)", color: "white" }}
            onClick={() => navigate("/menu")}
          >
            Смотреть меню
          </button>
        </div>
        <div
          className="hero-img"
          style={{ background: `url('${CDN}/7787eab8-82f2-4e40-a62a-3a1da2f8482f.jpg') center center / cover` }}
        >
          <div className="sticker">
            С 2024
            <br />
            С ЛЮБОВЬЮ
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-content">
          &nbsp; * АТМОСФЕРА ТЕПЛА * РЕТРО ВАЙБ * СВЕЖАЯ ОБЖАРКА * УЮТ И КОФЕ * АТМОСФЕРА ТЕПЛА * РЕТРО ВАЙБ * СВЕЖАЯ
          ОБЖАРКА * УЮТ И КОФЕ
        </div>
      </div>

      <section className="section-padding">
        <div className="menu-grid">
          <div className="menu-card">
            <div className="menu-card-body">
              <h3 style={{ marginBottom: "10px" }}>Свежая обжарка</h3>
              <p style={{ fontSize: "14px", color: "#666" }}>
                Мы обжариваем зёрна небольшими партиями, чтобы каждая чашка раскрывала максимум вкуса и аромата.
              </p>
            </div>
          </div>
          <div className="menu-card">
            <div className="menu-card-body">
              <h3 style={{ marginBottom: "10px" }}>Авторские рецепты</h3>
              <p style={{ fontSize: "14px", color: "#666" }}>
                Наши баристы создают уникальные напитки, которые вы не найдёте больше нигде в городе.
              </p>
            </div>
          </div>
          <div className="menu-card">
            <div className="menu-card-body">
              <h3 style={{ marginBottom: "10px" }}>Уютная атмосфера</h3>
              <p style={{ fontSize: "14px", color: "#666" }}>
                Винтажный интерьер, тёплый свет и любимая музыка — здесь хочется остаться подольше.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="retro-vibe">
        <div>
          <h2 className="vibe-title">ПРИХОДИ НА ЧАШКУ.</h2>
          <p className="vibe-text">
            Мы ждём тебя каждый день. Загляни за идеальным кофе и тёплой атмосферой — оставайся на сколько захочешь.
          </p>
          <button
            className="btn-cta"
            style={{ background: "var(--dark)", color: "white", borderColor: "white" }}
            onClick={() => navigate("/contacts")}
          >
            Контакты
          </button>
        </div>
        <div
          className="vibe-img"
          style={{
            backgroundImage: `url('${CDN}/54562168-788c-4638-b59d-20d88ec827bf.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </section>
    </Layout>
  );
}
