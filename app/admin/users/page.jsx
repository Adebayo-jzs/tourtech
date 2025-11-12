
export const revalidate = 0
// app/admin/users/page.jsx
// import { createClient } from "@/lib/supabaseServer";
// import { createClient } from "@supabase/supabase-js";
// import { supabase } from "@/lib/supabaseClient";
import { supabase } from "@/lib/supabase";
import MakeAdmin from "./Makeadmin";
import "../style.css"
export default async function UsersTable() {
  // const supabase = createClient();

  // Fetch all users, sorted newest first
  const { data: users, error } = await supabase
    .from("users")
    .select("*")
    // .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching users:", error.message);
    return <>
    <p className="text-red-500">Failed to load users.</p>
    <button className="text-white bg-[#1cca5b] px-3 py-2 mt-3 rounded">Refresh</button>
    </>;
  }
   



  return (
    <div className="min-h-screen bg-black p-1">
      <h1 className="text-3xl font-bold mb-6 text-white">Registered Users</h1>

      {users.length === 0 ? (
        <p className="text-center text-white">No users yet.</p>
      ) : (
           
        <div className="table-container">
          <table border="1" cellPadding="8">
          <thead>
            <tr>
               <th>ID</th>
               <th>Name</th>
               <th>Email</th>
               <th>Role</th> 
               {/* <th>Role ID</th>  */}
               <th className="p-3 text-center">Action</th>
            </tr>
          </thead> 
          <tbody>
            {users.map((req) => {
              return (
                <tr key={req.user_id} className="border-t hover:bg-gray-50">
                <td>{req.user_id}</td>
                <td>{req.name}</td>
                <td>{req.email}</td>
                <td>{req.role_id === 1 ? "Admin" : "User"}</td>
                 
                {/* <td className="p-3 font-semibold">
                  {req.role_id}
                </td> */}

                <td className="p-3"> 
                  {(req.role_id === 3)?(
                    // <button className="bg-[#1cca5b] text-white px-3 mt-2 py-1 rounded" onClick={handleMakeAdmin}>Make Admin</button>
                    <MakeAdmin req={req}/>
                  ):(
                    <button className="bg-black text-white px-3 mt-2 py-1 rounded" style={{cursor:"not-allowed"}}>
                    Done
                    </button>
                  )}
                </td>
              </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      )}
      </div>
    
  );
}