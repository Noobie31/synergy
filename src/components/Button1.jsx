import React from "react";
import { Link } from "react-router-dom";

const Button = ({ styles }) => (
  <Link to="/courses">
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      Courses
    </button>
  </Link>
);

export default Button;
