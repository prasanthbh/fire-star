"use client";

import ResponsiveDrawerLayout from "components/external/responsive-drawer/ResponsiveDrawerLayout";
import "./globals.css";
import MainDrawerBody from "./{components}/main-drawer-body/MainDrawerBody";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="pb93-externals"></div>
        <ResponsiveDrawerLayout
          drawerContent={<MainDrawerBody />}
          drawerWidth={-1}
          isResponsive={false}
          breakpointWidth={825}
          drawerBorderWidth={0}
        >
          {children}
        </ResponsiveDrawerLayout>
      </body>
    </html>
  );
}
