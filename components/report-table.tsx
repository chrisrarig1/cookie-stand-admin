import { hours} from "../data/fakeData"

const tablehrs = hours;





export default function Table({resources,loading,onDelete}){
    return(
        <table className=' w-3/4 my-5 mx-48 rounded-md'>
            <thead className="bg-emerald-500 ">
            <tr>
                <th className="px-4 py-2    text-black">Location</th>
                {tablehrs.map((hr) => (
                        <td key={hr} className="p-2 font-medium">
                        {hr}
                        </td>
                ))}
                <th className="px-4 py-2    text-black">Totals</th>
            </tr>
            </thead>
            <tbody>
                  {resources.map((stand) => (
                    <StandList stands={stand} loading={loading} onDelete={onDelete}/> 
                  ))}
            </tbody>
            <tfoot>

            </tfoot>
        
        </table>
    )
}

function StandList({ stands, loading, onDelete }) {

  if (loading) return (<p>Loading...</p>)
  if (stands.hourly_sales.length == 0) {
    stands.hourly_sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}




return (
  <>
  <tr>
      
      <td className="flex justify-between p-2 pl-4 font-medium text-center bg-green-200 border border-black">{stands.location}
      <div className="pr-2" onClick={onDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 stroke-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          </div>        
       </td>


  </tr>
  </>
);
}