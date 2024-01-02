import DashboardLayoutContainer from "@/container/Dashboard/DashboardLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xpress Portal",
  description: "Xpress Portal",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayoutContainer>{children}</DashboardLayoutContainer>
  );
}
