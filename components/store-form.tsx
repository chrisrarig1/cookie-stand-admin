export default function Form(props){
    return(
        <>
        <form className ="bg-emerald-200 px-4 py-3 w-3/4 my-5 mx-48 rounded-md font-bold border-emerald-400 border-2	" onSubmit={props.storeSubmit}>
          <div className="flex justify-between mb-2 ">
            <div className=" md:w-2/3 mx-1 mb-6 md:mb-0 bg-emerald-200 rounded-md">
              <label className="block text-center text-sm ">
                Add Location
              </label>
              <input className="w-11/12 mx-2 p-1" type="text" placeholder="Cookie Stand Location" name="location" ></input>
            </div>
            <div className="w-full 
            mx-1 md:w-1/3  mb-6 md:mb-0 bg-emerald-500 text-center rounded-sm ">
              <button className='m-4' >Create Stand</button>
            </div>
          </div>

          <div className="flex justify-between mb-2 ">
            <div className=" md:w-1/3 mx-1 mb-6 md:mb-0 bg-emerald-200 rounded-md">
              <label className="block text-center text-sm ">
                Minimum Customers per Hour
              </label>
              <input className="w-11/12 mx-2 p-1" type="number" name="min"placeholder='0' ></input>
            </div>
            <div className=" md:w-1/3 mx-1 mb-6 md:mb-0 bg-emerald-200 rounded-md">
              <label className="block text-sm text-center ">
                Maximum Customers per Hour
              </label>
              <input className="w-11/12 mx-2 p-1" type="number" name="max" placeholder='0'></input>
            </div>
            <div className=" md:w-1/3 mx-1  mb-6 md:mb-0 bg-emerald-200 rounded-md">
              <label className="block text-center text-sm ">
                Average Cookies per Sale
              </label>
              <input className="w-11/12 mx-2 p-1" type="number" name="ave" placeholder='0'></input>
            </div>

          </div>
        </form>
        </>
    )
}