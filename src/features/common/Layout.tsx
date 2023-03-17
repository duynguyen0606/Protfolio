import { PropsWithChildren } from "react";
import Header from "./Header";

export type LayoutProps = {
}

function Layout(props: PropsWithChildren<LayoutProps>) {
    const { children } = props
    return (
        <div id="layout">
            <Header />
            {children}
        </div>
    );
}

export default Layout;