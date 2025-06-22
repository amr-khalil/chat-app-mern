import React from "react";
import { useAuthStore } from "../store/useAuthStore";

function HomePage() {
  const { authUser } = useAuthStore();
  console.log("App.jsx - authUser:", authUser);
  return <div>HomePage</div>;
}

export default HomePage;
