import React from "react";

const ProfileBar = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <div className="col-2 ">
        <div className="filter-card mb-3 ">
          <h3 className="filter-title">Profile Bar</h3>
          <div>
            <ul className="ps-0 text-dark">
              <a className="text-dark" href="/my-orders">
                My Orders
              </a>

              <li onClick={() => (window.location.href = "/my-profile")}>
                Profile
              </li>

              <li onClick={handleLogout}>Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileBar;
