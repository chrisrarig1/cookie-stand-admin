import { hours, data } from "../data/fakeData"

const tablehrs = hours;
const city = data;




export default function Table(props){
    return(
        <table className=' w-3/4 my-5 mx-48 rounded-md'>
            <thead className="bg-emerald-500 ">
            <tr>
                <th className="px-4 py-2    text-black">Location</th>
                {tablehrs.map((i, idx) => (
                        <td 
                        key={i+idx} 
                        className="p-2 font-medium"
                        >
                        {i}
                        </td>
                ))}
               
            </tr>
            </thead>
            <tbody>
            {city.map((city, idx) => (
        <tr key={idx+city.location} className="odd:bg-emerald-400 even:bg-emerald-300">
          <td 
            className="p-1 pl-2 text-left border border-black"
          >
            {city.location}
          </td>
          {city.hourlySales.map((sale, idx) => (
            <td 
            key={idx+'_sales'} 
            className="text-center border border-black"
            >
              {sale}
            </td>
          ))}
        <td className="text-center border border-black">
          {city.hourlySales.reduce((accu, sale) => {
            accu += sale;
            return accu;
            },0)}
        </td>
      </tr>
      ))}
            </tbody>
            <tfoot>

            </tfoot>
        
        </table>
    )
}