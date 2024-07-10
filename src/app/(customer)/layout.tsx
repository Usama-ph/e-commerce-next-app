"use client"
import { useUser } from "@auth0/nextjs-auth0/client";
import { Nav, NavLink } from "../../components/Nav";

export const dynamic = "force-dynamic"
export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { user, error, isLoading } = useUser();
    //if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return user ? (
        <>
            <Nav>
                <NavLink href="/">Dashboard</NavLink>
                <NavLink href="/products">Products</NavLink>
                <NavLink href="/orders">My Orders</NavLink>
                <NavLink href="/api/auth/logout">Logout</NavLink>
                <NavLink href="/api/auth/me">Profile</NavLink>
            </Nav>
            <div className="container my-6">{children}</div>
        </>
    ) :
        (
            <>
                <Nav>
                    <NavLink href="/">Dashboard</NavLink>
                    <NavLink href="/products">Products</NavLink>
                    <NavLink href="/orders">My Orders</NavLink>
                    <NavLink href="/api/auth/login">Login</NavLink>
                </Nav>
                <div className="container my-6">{children}</div>
            </>
        )

}
