import { Outlet } from "react-router-dom";

export default function App(){

  return(
    <div>
      {/* HEADER */}

      <Outlet/>

      {/* FOOTER */}
    </div>
  )
}