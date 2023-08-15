import CategoryItem from "./CategoryItem";

const categories = [
  { name: "Games Top Up", color: "bg-[#6fb935]" },
  { name: "Gift Cards", color: "bg-[#2ebdb5]" },
  { name: "Video Games", color: "bg-[#39bbd8]" },
  { name: "Software", color: "bg-[#f68500]" },
  { name: "Game Coins", color: "bg-[#f05f81]" },
  { name: "Items", color: "bg-[#7774ff]" },
  { name: "Accounts", color: "bg-[#3092eb]" },
  { name: "Coaching", color: "bg-[#ffc600]" },
];

export default function CategoryList() {
  return (
    <div className="mx-auto bg-gradient-to-b from-navy-blue to-[#242633e3]">
      <div className=" max-w-7xl grid mx-auto gap-10 grid-cols-4 md:grid-cols-8 md:gap-5 lg:gap-2 xl:gap-0 justify-items-center p-5 pb-10 xl:pb-7">
        {categories.map((categoryItem, i) => (
          <CategoryItem key={i} index={i} category={categoryItem} />
        ))}
      </div>
    </div>
  );
}
