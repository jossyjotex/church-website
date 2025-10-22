import React from "react";
import "../pages/Styles/Give.css";

const Give = () => {
  return (
    <div>
      <div className="give mb-5">
        <h1 className="gv">Give</h1>
        <h6 className="gt">
           "Bring the whole tithe into the storehouse, that there may be food in
          my house. Test me in this,” says the LORD Almighty, “and see if I will
          not throw open the floodgates of heaven and pour out so much"
        </h6>
        <h6 className="bb"> Malachi 3:10</h6>
      </div>
      <div className="grp-img d-flex  flex-column gap-5 mb-5 mt-5 align-items-center w-50 m-auto">
        <div className="grp-img-1  ">
          <h1 className="text-white">Tithes</h1>
          <button className="btn btn-primary" style={{marginTop: "1%",width: "100px",backgroundColor: "#0F2F76", border: "none" }}>Give</button>
        </div>
        {/* div-2 */}
        <div className="grp-img-2 text-center d-flex justify-content-center align-items-center">
          <div className="grp-img-2-content">
            <h1 className="text-white">Love Offering</h1>
            <div className="">
              <button className="btn btn-primary" style={{marginTop: "1%",width: "100px",backgroundColor: "#0F2F76", border: "none" }}>Give</button>
            </div>
          </div>
        </div>
        {/* div-3 */}
        <div className="grp-img-3 text-center text-white  pb-5">
          <div className="">
            <h1>Covenant Partners</h1>
            <div className="">
              <button className="btn btn-primary" style={{marginTop: "1%",width: "100px",backgroundColor: "#0F2F76", border: "none"}}>Join</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Give;
