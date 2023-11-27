import profile from "../assets/profile-icon.svg";

function ProfileIcon() {
  return (
    <div className="d-flex">
      <span className="p-3 rounded-circle border-secundary profile">
        <img src={profile} />
      </span>
    </div>
  );
}

export default ProfileIcon;
