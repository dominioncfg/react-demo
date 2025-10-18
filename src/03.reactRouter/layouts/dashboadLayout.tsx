import { NavLink, Outlet } from "react-router";

export const MyDashboardLayout = () => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{ padding: "20px", paddingLeft: "0px", backgroundColor: "#140707ff", borderRight: "solid 2px black", borderRadius: "10px 0px 0px 10px" }}>
                    <nav>
                        <ul style={{ listStyleType: "none" }}>
                            <li>
                                {/* Use "end" to apply active class only for exact match */}
                                <NavLink to="/dashboard" end>Dashboard Overview</NavLink >
                            </li>
                            <li>
                                <NavLink to="/dashboard/products/1">Product</NavLink >
                            </li>
                            <li>
                                <NavLink to="/dashboard/reports/">Reports</NavLink >
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