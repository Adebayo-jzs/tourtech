import { supabase } from "@/lib/supabase";
import { MapPin, Calendar, Clock } from "lucide-react";
// import { useEffect } from "react";
import { toast } from "react-toastify";

export default async function Explore(){
    // const [visits,setVisits] = useState([]);

 
    const{ data:visits ,error} = await supabase.from("visits").select("*");
    if(error) toast.error("Error fetching visit: ");
    // else setVisits(data);
    return(
        <div className="min-h-screen bg-[#000000] p-6 md:px-30">
        <div className="mt-20">

        <h1 className="text-white text-2xl font-bold text-center mb-2">
          Available Visits
        </h1>
        <h2 className="text-white text-xl fo text-center mb-6">Login to book visits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visits.map((visit) => (
          <div
            key={visit.id}
            className="bg-[#0d0d0d] p-4 shadow rounded"
            style={{ border: "1px solid #1f1f1f" }}
          >
            <h2 className="text-xl text-white font-semibold mb-2">{visit.title}</h2>
            <p className="text-white flex items-center gap-1">
              <MapPin size={16} /> {visit.industry} - {visit.location}
            </p>
            <p className="text-white flex items-center gap-1 mt-1">
              <Calendar size={16} /> {visit.date}
            </p>
            <p className="text-white flex items-center gap-1 mt-1">
              <Clock size={16} /> {visit.time}
            </p>
            {/* <button
              onClick={() => handleBook(visit)}
              className="bg-[#1cca5b] text-black px-4 py-2 mt-3 rounded hover:bg-[#19b751]"
            >
            Book Visit
            </button> */}
          </div>
        ))}
        </div>
        </div>
        </div>
    );
   
}