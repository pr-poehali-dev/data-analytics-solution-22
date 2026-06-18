import { useState } from "react";
import Layout from "@/components/Layout";
import { toast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

export default function Contacts() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast({ title: "Заполните имя и телефон" });
      return;
    }
    toast({ title: "Спасибо!", description: "Мы свяжемся с вами в ближайшее время." });
    setName("");
    setPhone("");
  };

  return (
    <Layout>
      <div className="marquee">
        <div className="marquee-content">
          &nbsp; * ПРИХОДИ В ГОСТИ * РАБОТАЕМ КАЖДЫЙ ДЕНЬ * КОФЕ С СОБОЙ * ПРИХОДИ В ГОСТИ * РАБОТАЕМ КАЖДЫЙ ДЕНЬ * КОФЕ
          С СОБОЙ
        </div>
      </div>

      <section className="section-padding">
        <div className="section-header">
          <h2 className="section-title">КОНТАКТЫ</h2>
        </div>

        <div className="menu-grid">
          <div className="menu-card">
            <div className="menu-card-body" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Icon name="MapPin" size={24} />
                <span>г. Москва, ул. Кофейная, 7</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Icon name="Phone" size={24} />
                <a href="tel:+74951234567" style={{ color: "inherit", textDecoration: "none" }}>
                  +7 (495) 123-45-67
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Icon name="Mail" size={24} />
                <a href="mailto:hello@coffeep.ru" style={{ color: "inherit", textDecoration: "none" }}>
                  hello@coffeep.ru
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Icon name="Clock" size={24} />
                <span>Пн-Пт 08:00-22:00, Сб-Вс 09:00-23:00</span>
              </div>
            </div>
          </div>

          <div className="menu-card" style={{ gridColumn: "span 2" }}>
            <div className="menu-card-body">
              <h3 style={{ marginBottom: "16px" }}>Оставить заявку</h3>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  style={{ padding: "12px", border: "var(--border)", fontFamily: "inherit", fontSize: "16px" }}
                />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Телефон"
                  style={{ padding: "12px", border: "var(--border)", fontFamily: "inherit", fontSize: "16px" }}
                />
                <button className="btn-cta" type="submit" style={{ background: "var(--primary)", color: "white" }}>
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
