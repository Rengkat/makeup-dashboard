import Nav from "@/components/Nav";
import SideBar from "@/components/SideBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="relative bg-white">
      <nav className=" bg-lighter-gold w-full fixed z-20 top-0 left-0 right-0 shadow-md">
        <Nav />
      </nav>
      <div>
        <aside className="bg-lighter-gold h-screen w-[20rem] hidden lg:block fixed left-0 bottom-0 shadow-md">
          <SideBar />
        </aside>
        <main className="ml-0 lg:ml-[20rem] mt-[6rem] p-5">{children}</main>
      </div>
    </div>
  );
}
