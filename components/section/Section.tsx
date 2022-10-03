import React, { useEffect } from "react";
import SelectField from "../select/SelectField";

const Section = () => {
  return (
    <div className="section_wrapper">
      <h1 className="heading">Stunning free images & royalty free stock</h1>
      <p className="context para">
        Over 2.6 million+ high quality stock images, videos and music shared by
        our talented community.
      </p>
      <div className="select_field">
        <SelectField />
      </div>
      <p className="contextOne para">
        Popular Images: nature, wallpaper, background, sky, sky cloud, cat,
        food, halloween, money, dog, flowers, car, iphone wallpaper
      </p>
      <p className="bottom_context para">Free image by Kanenori</p>
    </div>
  );
};

export default Section;
