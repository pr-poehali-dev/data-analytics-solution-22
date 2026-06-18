export interface MenuItem {
  name: string;
  price: string;
  desc: string;
  img: string;
  tag: string;
  tagColor?: string;
  tagTextColor?: string;
}

const CDN = "https://cdn.poehali.dev/projects/991b9050-0246-4b60-b48c-d9e0f9d0203e/files";

export const menuItems: MenuItem[] = [
  {
    name: "Капучино",
    price: "250 ₽",
    desc: "Бархатная молочная пенка, насыщенный эспрессо и фирменный латте-арт от баристы.",
    img: `${CDN}/54562168-788c-4638-b59d-20d88ec827bf.jpg`,
    tag: "Хит продаж",
  },
  {
    name: "Ванильный раф",
    price: "290 ₽",
    desc: "Сливочный кофе с ванилью, нежная текстура и мягкий вкус.",
    img: `${CDN}/5e9a23fe-3776-4451-91a0-05172038c17b.jpg`,
    tag: "Авторское",
    tagColor: "var(--secondary)",
  },
  {
    name: "Айс латте",
    price: "270 ₽",
    desc: "Освежающий холодный латте со льдом, эспрессо и нежным молоком.",
    img: `${CDN}/a0501046-c481-4f3d-bf01-3f6efe3c6d8d.jpg`,
    tag: "Популярное",
    tagColor: "var(--accent)",
    tagTextColor: "var(--dark)",
  },
  {
    name: "Эспрессо",
    price: "150 ₽",
    desc: "Классический крепкий эспрессо из свежеобжаренных зёрен.",
    img: `${CDN}/54562168-788c-4638-b59d-20d88ec827bf.jpg`,
    tag: "Классика",
    tagColor: "var(--dark)",
    tagTextColor: "white",
  },
  {
    name: "Флэт уайт",
    price: "260 ₽",
    desc: "Двойной эспрессо с тонким слоем молочной микропены.",
    img: `${CDN}/5e9a23fe-3776-4451-91a0-05172038c17b.jpg`,
    tag: "Для гурманов",
    tagColor: "var(--secondary)",
  },
  {
    name: "Какао",
    price: "220 ₽",
    desc: "Горячий шоколадный напиток с нежной молочной пенкой.",
    img: `${CDN}/a0501046-c481-4f3d-bf01-3f6efe3c6d8d.jpg`,
    tag: "Уютное",
    tagColor: "var(--accent)",
    tagTextColor: "var(--dark)",
  },
];
