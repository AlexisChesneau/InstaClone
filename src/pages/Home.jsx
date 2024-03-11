import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <div className="flex h-12 w-full items-center justify-between px-4 fixed top-0 z-100 border-b border-slate-600">
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

      <Navbar />
    </>
  );
}
