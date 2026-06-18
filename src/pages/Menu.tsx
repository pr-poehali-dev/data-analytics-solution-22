import Layout from "@/components/Layout";
import { menuItems } from "@/data/menu";

export default function Menu() {
  return (
    <Layout>
      <div className="marquee">
        <div className="marquee-content">
          &nbsp; * НАШЕ МЕНЮ * СВЕЖЕОБЖАРЕННЫЕ ЗЁРНА * АВТОРСКИЕ НАПИТКИ * РАБОТАЕМ С УТРА * НАШЕ МЕНЮ * СВЕЖЕОБЖАРЕННЫЕ
          ЗЁРНА * АВТОРСКИЕ НАПИТКИ * РАБОТАЕМ С УТРА
        </div>
      </div>

      <section className="section-padding">
        <div className="section-header">
          <h2 className="section-title">ВСЁ МЕНЮ</h2>
        </div>

        <div className="menu-grid">
          {menuItems.map((item) => (
            <div className="menu-card" key={item.name}>
              <span className="menu-tag" style={{ background: item.tagColor, color: item.tagTextColor }}>
                {item.tag}
              </span>
              <img src={item.img} alt={item.name} />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>{item.name}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
