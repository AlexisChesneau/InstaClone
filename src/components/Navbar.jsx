import navbar_icons from "../data/navbar_icons.json";

export default function Navbar() {
  return (
    <div className="bg-black h-[50px] w-full flex justify-evenly items-center fixed bottom-0 z-100 border-t border-[#363636]">
      {navbar_icons.map((icon, idx) => (
        <div key={idx} className="p-3">
          <img
            className={`h-6 w-6 ${
              icon.src.includes(".png") ? "rounded-full" : ""
            }`}
            src={icon.src}
            alt={icon.alt}
          />
        </div>
      ))}
    </div>
  );
}
