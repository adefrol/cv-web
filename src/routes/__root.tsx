import { Header } from "@/components/Header";
import { IMAGE_URL } from "@/constants/images";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div
        style={{
          backgroundImage: `url(${IMAGE_URL.bg})`,
        }}
        className="py-[40px] bg-cover min-h-screen"
      >
        <div className="max-w-[1100px] mx-auto">
          <Header />
          <div className="my-[80px] max-[639px]:mx-[20px]">
            <Outlet />
          </div>
        </div>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
