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
    <main className="min-h-screen bg-[#F5F5F5] flex items-center justify-center">
      <div className="bg-white p-8 shadow-lg rounded-xl w-[350px] max-w-full hover:scale-105 transition-transform duration-300">
        <h1 className="text-2xl font-semibold text-[#333] mb-3 text-center">Welcome!</h1>
        <p className="text-[#555] text-center mb-3 text-sm font-semibold">I am <a className="text-gray-700 hover:text-blue-500 transition-colors duration-300" target="_blank" rel="noopener noreferrer" href="https://github.com/Sanjay17u">Sanjay Solanki</a></p>
        <p className="text-[#555] text-center mb-6 text-sm">In this app, I used the following:</p>
        <ul className="space-y-2 text-sm text-[#555] mb-6">
          <li>🔹 Next.js</li>
          <li>🔹 Tailwind CSS</li>
          <li>🔹 MongoDB Database Connectivity</li>
          <li>🔹 bcrypt.js</li>
          <li>🔹 JWT Token</li>
          <li>🔹 Middleware for Route Protection</li>
          <li>🔹 Axios for GET and POST methods</li>
          <li>🔹 <a className="text-gray-700 hover:text-blue-500 transition-colors duration-300" target="_blank" rel="noopener noreferrer" href="">Vercel Deployment</a> & <a className="text-gray-700 hover:text-blue-500 transition-colors duration-300" target="_blank" rel="noopener noreferrer" href="https://github.com/Sanjay17u/next-auth">Git Hub</a></li>
        </ul>
        <button
          onClick={logoutHandler}
          className="w-full bg-[#28282B] hover:bg-[#343434] text-white font-bold py-2 rounded-lg transition-colors duration-300 transform hover:scale-105"
        >
          Logout
        </button>
      </div>
    </main>
  );

}
