import React from "react";

const Copyright = () => {
  return (
    <div className="flex justify-between pt-20 text-green3 ">
      <div className="flex gap-2">
        <box-icon color="gray" name="copyright" />
        <p>2022 Vince, All rights reserved.</p>
      </div>
      <div className="flex gap-5">
        <p>Terms & Agreement</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Copyright;
