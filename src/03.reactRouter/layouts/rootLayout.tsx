import { NavLink, Outlet } from "react-router";

export const RootLayout = () => {
   return (
      <>
         <h1>My Routing Application</h1>
         <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div style={{ padding: "20px", paddingLeft: "0px", backgroundColor: "#140707ff", borderRight: "solid 2px black", borderRadius: "10px 0px 0px 10px" }}>
               <nav>
                  <ul style={{ listStyleType: "none" }}>
                     <li>
                        <NavLink to="/">Home</NavLink >
                     </li>
                     <li>
                        <NavLink to="/dashboard">Dashboard</NavLink >
                     </li>
                  </ul>
               </nav>
            </div>
            <div style={{ flexGrow: 1, backgroundColor: "#140707ff", padding: "30px", borderRadius: "0px 10px 10px 0px", }}>
               <Outlet />
            </div>
         </div>
      </>

   );
}