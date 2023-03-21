import { PropsWithChildren } from "react";
import Header from "./Header";
import LoginHeader from "../../components/auth/LoginForm";

export type LayoutProps = {
}

function Layout(props: PropsWithChildren<LayoutProps>) {
    const { children } = props
    return (
        <div id="layout">
            {/* <Header /> */}
            <LoginHeader />
            {children}
        </div>
    );
}

export default Layout;