import users from "../data/users.json";

export default function Card() {
  return (
    <>
      {users.map((user, idx) => (
        <div className="flex flex-col">
          <div className="flex items-center h-14 justify-between p-3">
            <div className="flex items-center">
              <img
                className="h-8 rounded-full mr-[10px]"
                src={user.picture}
                alt=""
              />
              <h3 className="font-roboto-regular" key={idx}>
                {user.name}
              </h3>
              <img className="pl-1" src={user.certified} alt="" />
              <span className="p-1 dot">&bull;</span>
              <p className="text-[#0095F6] font-roboto-medium text-[0.875rem]">
                Suivre
              </p>
            </div>
            <img src="./images/icons/more-option.svg" alt="more-option" />
          </div>
          <video width="375" height="468" controls autoPlay>
            <source src={user.post} type="video/mp4" />
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
          <h3 className="font-roboto-regular" key={idx}>
            {user.name}
          </h3>
          <p>{user.caption}</p>
        </div>
      ))}
    </>
  );
}
