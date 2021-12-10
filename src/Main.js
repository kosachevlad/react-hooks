import React from "react";
import { useAlert } from "./alert/AlertContext";

export default function Main() {
  const {show} = useAlert()
  return (
    <>
      <h1>Hello world</h1>
      <button  onClick={() => show('Main js text here')} className="btn btn-success">alert</button>
    </>
  )
}