export default function Login(props){
    async function handleSubmit(event){
        event.preventDefault()
        props.login(event.target.username.value,event.target.password.value)
    }
    return(
        <>
        <div className="grid min-h-screen place-items-center">
        <div className="w-5/6 p-12 bg-emerald-200 rounded-lg border-emerald-400 border-2">
            <form onSubmit={handleSubmit} className="mt-6">
            <label className="block text-center text-lg font-bold text-black uppercase">USER NAME</label>
            <input id="username" type="text" name="username" placeholder="User Name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
            <label  className="block text-center mt-2 text-lg font-bold text-black uppercase">Password</label>
            <input id="password" type="password" name="password" placeholder="password"  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
            <button className="rounded-lg w-full py-3 mt-6 font-bold tracking-widest text-black uppercase bg-emerald-600 shadow-lg focus:outline-none hover:bg-gray-200 hover:shadow-none">
                Sign in
            </button>

            </form>
        </div>
        </div>
        </>
    )
}