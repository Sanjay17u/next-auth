"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Home() {
  const router = useRouter();
  const logoutHandler = async () => {
    try {
      const res = await axios.get("/api/users/logout");
      router.push("/login");
      toast.success(res.data.message);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <main className="flex bg-[#E2DFD2] min-h-screen items-center justify-center">
        <div className="bg-white text-black p-10 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
          <h1>Hello There..!</h1>
          <button
            onClick={logoutHandler}
            className="bg-[#28282B] hover:bg-[#343434] font-bold text-white px-4 py-1 rounded-lg"
          >
            Logout
          </button>
        </div>
      </main>
    </>
  );
}
