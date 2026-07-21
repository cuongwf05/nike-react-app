import MenuColumn from "./MenuColumn";

const menu = [
  {
    title: "Men",
    items: ["New & Featured", "Shoes", "Clothing", "Accessories"],
  },
  {
    title: "Women",
    items: ["New & Featured", "Shoes", "Clothing", "Accessories"],
  },
  {
    title: "Kid",
    items: ["New & Featured", "Shoes", "Clothing", "Accessories"],
  },
];

export default function MegaMenu() {
  return (
    <div className="absolute left-0 top-full z-50 w-full bg-[#171717]">
      <div className="mx-auto flex max-w-6xl justify-center gap-24 py-10">
        {menu.map((column) => (
          <MenuColumn
            key={column.title}
            title={column.title}
            items={column.items}
          />
        ))}
      </div>
    </div>
  );
}