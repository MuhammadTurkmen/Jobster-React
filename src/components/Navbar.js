import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <h2>Navbar</h2>
    </Wrapper>
  );
};

export default Navbar;
