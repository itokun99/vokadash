import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootView } from "./views/root";
import { AuthLayout } from "@/features/auth";
import { Button, DashboardPageLayout, Input, Vokadash } from "@/index";
// import { useToast } from "@/features/_global/libs/shadcn/hooks/use-toast";

const Dashboard = () => {
  // const toaster = useToast();

  // useEffect(() => {
  //   setInterval(() => {
  //     toaster.toast({
  //       title: "Test",
  //       description: "ini toast dari toaster",
  //     });
  //   }, 2000);
  // });
  return (
    <DashboardPageLayout
      title="test"
      breadcrumbs={[
        { label: "Manajemen Absensi", url: "/" },
        { label: "Test", url: "/test" },
      ]}
    >
      <Button variant="outline-dark">Test</Button>
      <Button variant="outline">Test</Button>
      <Input type="test" />
      <div className="h-[2000px]" />
    </DashboardPageLayout>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "setting",
        element: <div>Setting</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <AuthLayout logo="test" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Vokadash
    appName="Vokadash 0.0.1"
    menus={[
      {
        title: "Dashboard",
        url: "/",
        icon: "LayoutDashboard",
      },
      {
        title: "Manajement Absensi",
        url: "",
        icon: "Sheet",
        items: [
          {
            title: "Kalender",
            url: "",
            icon: "Calendar",
          },
          {
            title: "Kehadiran",
            url: "/attendance",
            icon: "UserPen",
          },
          {
            title: "Cuti",
            url: "/leave",
            icon: "LogOut",
          },
          {
            title: "Lembur",
            url: "/overtime",
            icon: "Clock3",
          },
        ],
      },
      {
        title: "Penilaian",
        url: "#",
        icon: "Pencil",
      },
      {
        title: "Surat Menyurat",
        url: "#",
        icon: "Paperclip",
      },
    ]}
    usermenus={[
      {
        title: "My Account",
        label: true,
      },
      {
        separator: true,
      },
      {
        title: "Account Setting",
        url: "/account/setting",
      },
      {
        title: "Log Out",
        url: "/account/logout",
      },
    ]}
  >
    <RouterProvider router={router} />
  </Vokadash>,
);
