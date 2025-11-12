
// export const revalidate = 0
// // app/admin/requests/page.jsx
// // import { createClient } from "@/lib/supabaseServer";
// // import { createClient } from "@supabase/supabase-js";
// // import { supabase } from "@/lib/supabaseClient";
// import { supabase } from "@/lib/supabase";
// import "../style.css"
// import ActionButtons from "./ActionButtons";
// export default async function RequestsTable() {
//   // const supabase = createClient();

//   // Fetch all requests, sorted newest first
//   const { data: requests, error } = await supabase
//     .from("requests")
//     .select("*")
//     .order("created_at", { ascending: false });

//   if (error) {
//     console.error("Error fetching requests:", error.message);
//     return <>
//     <p className="text-red-500">Failed to load requests.</p>
//     <button className="text-white bg-[#1cca5b] px-3 py-2 mt-3 rounded" onClick={window.location.reload()}>Refresh</button>
//     </>;
//   }

//   return (
//     <div className="min-h-screen bg-black p-1">
//       <h1 className="text-3xl font-bold mb-6 text-white">Visit Requests</h1>

//       {requests.length === 0 ? (
//         <p className="text-center text-white">No requests yet.</p>
//       ) : (
//           <div>
//             <div className="cards">
//           <div className="card">
//             <h1 className="card-title">Visits Booked</h1>
//             <p className="card-desc">Total number of requests</p>
//             <p className="card-info">{requests.length}</p>
//           </div>
//           <div className="card">
//             <h1 className="card-title">Accepted</h1>
//             <p className="card-desc">Total number of accepted visits</p>
//             <p className="card-info">
//               {requests.filter((req) => req.status === "Accepted").length}
//             </p>
//           </div>
//           <div className="card">
//             <h1 className="card-title">Rejected</h1>
//             <p className="card-desc">Total number of rejected visits</p>
//             <p className="card-info" style={{color:"red"}}>
//               {requests.filter((req) => req.status === "Declined").length}
//             </p>
//           </div>
//           <div className="card">
//             <h1 className="card-title">Pending requests</h1>
//             <p className="card-desc">Total number of pending requests</p>
//             <p className="card-info ">
//               {requests.filter((req) => req.status === "Pending").length}
//             </p>
//           </div>
//         </div>
//         <div className="table-container">
//           <table border="1" cellPadding="8">
//           <thead>
//             <tr>
//                <th>Name</th>
//                <th>Email</th>
//                <th>Visit Title</th>
//                <th>Date</th>
//                <th>Time</th>
//                <th>Location</th>
//                <th>Status</th>
//                <th className="p-3 text-center">Action</th>
//             </tr>
//           </thead> 
//           <tbody>
//             {requests.map((req) => {
//               return (
//                 <tr key={req.id} className="border-t hover:bg-gray-50">
//                 <td>{req.name}</td>
//                 <td>{req.email}</td>
//                 <td>{req.title}</td>
//                 <td>{req.date}</td>
//                 <td>{req.time}</td>
//                 <td>{req.location}</td>
//                 {/* <td className="p-3 font-semibold text-blue-600">
//                   {req.status || "Pending"}
//                 </td> */}
//                 <td className="p-3 font-semibold"
//                     style={{
//                         color: req.status === "Accepted" ? "green" : req.status === "Declined"? "red"
//                       : "#3b82f6", // default pending blue
//                     }}>
//                   {req.status || "Pending"}
//                 </td>

//                 <td className="p-3">
//                   {/* <form>
//                     <button
//                       type="submit"
//                       id="accept"
//                     >
//                       Accept
//                     </button>
//                   </form>
//                   <form>
//                     <button
//                       type="submit"
//                       id="decline"
//                     >
//                       Decline
//                     </button>
//                   </form> */}
//                   {(req.status === "Pending")?(
//                     <ActionButtons req={req}/>
//                   ):(
//                     <button className="bg-black text-white px-3 mt-2 py-1 rounded" style={{cursor:"not-allowed"}}>
//                     Done
//                     </button>
//                   )}
//                 </td>
//               </tr>
//               );
//             })}
//           </tbody>
//         </table>
//         </div>
//          </div>
//       )}
//     </div>
//   );
// }




import { supabase } from "@/lib/supabase";
import "../style.css";
import RequestsClient from "./RequestsClient";

export const revalidate = 0;

export default async function RequestsTable() {
  const { data: requests, error } = await supabase
    .from("requests")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching requests:", error.message);
    return (
      <>
        <p className="text-red-500">Failed to load requests.</p>
        <button
          className="text-white bg-[#1cca5b] px-3 py-2 mt-3 rounded"
          onClick={() => window.location.reload()}
        >
          Refresh
        </button>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-black p-1">
      <h1 className="text-3xl font-bold mb-6 text-white">Visit Requests</h1>

      {requests.length === 0 ? (
        <p className="text-center text-white">No requests yet.</p>
      ) : (
        <>
          {/* Stats Cards */}
          <div className="cards">
            <div className="card">
              <h1 className="card-title">Visits Booked</h1>
              <p className="card-desc">Total number of requests</p>
              <p className="card-info">{requests.length}</p>
            </div>
            <div className="card">
              <h1 className="card-title">Accepted</h1>
              <p className="card-desc">Total number of accepted visits</p>
              <p className="card-info">
                {requests.filter((req) => req.status === "Accepted").length}
              </p>
            </div>
            <div className="card">
              <h1 className="card-title">Rejected</h1>
              <p className="card-desc">Total number of rejected visits</p>
              <p className="card-info" style={{ color: "red" }}>
                {requests.filter((req) => req.status === "Declined").length}
              </p>
            </div>
            <div className="card">
              <h1 className="card-title">Pending requests</h1>
              <p className="card-desc">Total number of pending requests</p>
              <p className="card-info ">
                {requests.filter((req) => req.status === "Pending").length}
              </p>
            </div>
          </div>

          {/* ✅ Client-side filter + table */}
          <RequestsClient requests={requests} />
        </>
      )}
    </div>
  );
}
