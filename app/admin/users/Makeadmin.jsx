"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { supabase } from "@/lib/supabase";

export default function MakeAdmin({ req }) {
  const [loading, setLoading] = useState(false);

  const handleMakeAdmin = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("users")
        .update({ role_id: 1 })
        .eq("user_id", req.user_id);

      if (error) throw error;

      toast.success("User is now an admin!");
    } catch (error) {
      toast.error("Failed to update role");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="bg-[#1cca5b] text-white px-3 mt-2 py-1 rounded disabled:opacity-50"
      onClick={handleMakeAdmin}
      disabled={loading}
    >
      {loading ? "Updating..." : "Make Admin"}
    </button>
  );
}
