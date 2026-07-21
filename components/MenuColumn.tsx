type MenuColumnProps = {
  title: string;
  items: string[];
};

export default function MenuColumn({ title, items }: MenuColumnProps) {
  return (
    <div className="min-w-[180px]">
      <h3 className="mb-4 font-semibold text-white">{title}</h3>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="text-gray-400 transition hover:text-white">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}