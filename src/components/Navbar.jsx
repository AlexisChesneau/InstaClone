import navbar_icons from "../data/navbar_icons.json";

export default function Navbar() {
  return (
    <div className="h-[48px] w-full flex justify-evenly items-center fixed bottom-0 z-100 border-t border-slate-600">
      {navbar_icons.map((icon, idx) => (
        <div className="p-[12px]">
          <img className="h-[24px]" key={idx} src={icon.src} alt={icon.alt} />
        </div>
      ))}
    </div>
  );
}
