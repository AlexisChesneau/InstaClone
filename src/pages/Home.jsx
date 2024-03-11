import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <div className="bg-black flex h-12 w-full items-center justify-between px-4 fixed top-0 z-100 border-b border-[#363636]">
        <div className="flex">
          <h2 className="font-roboto-bold text-[1.5rem]">Pour vous</h2>
          <img
            className="px-2"
            src="images/icons/arrow-down.svg"
            alt="arrow-down"
          />
        </div>
        <div className="flex">
          <img src="images/icons/new-post.svg" alt="new-post" />
          <img className="pl-5" src="images/icons/like.svg" alt="like.svg" />
        </div>
      </div>
      <div className="h-28 mt-12 bg-[#121212] flex items-center border-b border-[#363636]">
        <div className="px-3 h-full flex flex-col justify-evenly">
          <img className="h-14 rounded-full" src="images/profil.png" alt="" />
          <p className="font-roboto-light text-[0.75rem]">Votre Story</p>
        </div>
      </div>
      <Card />
      <Navbar />
    </>
  );
}
