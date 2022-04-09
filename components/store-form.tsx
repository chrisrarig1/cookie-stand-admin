export default function Form(props){
    return(
        <>
        <form className ="bg-emerald-300 px-4 py-3  my-5 mx-48 rounded-md" onSubmit={props.storeSubmit}>
          <legend className="text-center font-semibold text-xl		">Create Cookie Stand</legend>
          <div className="md:flex md:items-center mb-6">
          <div >
            <label className="block md:text-right mb-1 md:mb-0 pr-2" >
              Location
            </label>
          </div>
            <div className="md:w-full py-4">
              <input className="w-full" type="text" name="location" placeholder='Calexico'></input>
            </div>
          </div>
          <div className="flex justify-between mb-2 ">
            <div className=" md:w-1/3 mx-1 mb-6 md:mb-0 bg-emerald-200 rounded-md">
              <label className="block text-center text-sm ">
                Minimum Customers per Hour
              </label>
              <input className="w-11/12 mx-2 " type="number" name="min"placeholder='0' ></input>
            </div>
            <div className=" md:w-1/3 mx-1 mb-6 md:mb-0 bg-emerald-200 rounded-md">
              <label className="block text-sm text-center ">
                Maximum Customers per Hour
              </label>
              <input className="w-11/12 mx-2" type="number" name="max" placeholder='0'></input>
            </div>
            <div className=" md:w-1/3 mx-1  mb-6 md:mb-0 bg-emerald-200 rounded-md">
              <label className="block text-center text-sm ">
                Average Cookies per Sale
              </label>
              <input className="w-11/12 mx-2" type="number" name="ave" placeholder='0'></input>
            </div>
            <div className="w-full 
            mx-1 md:w-1/3  mb-6 md:mb-0 bg-emerald-500 text-center rounded-md ">
              <button className='m-4' >Create</button>
            </div>
          </div>
        </form>
        </>
    )
}