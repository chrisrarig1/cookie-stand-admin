
export default function Header(props){
    return(
        <>
        {props.user ?(
        <header className='flex items-center justify-between p-2 bg-emerald-500 text-3xl font-medium font-sans'>
            <h1 className="mx-28">Cookie Stand Admin</h1>
            <div className="mx-28">
            <button className="mx-2 rounded-md bg-emerald-200 text-sm p-2">{props.user.username}</button>
            <button onClick={props.logout}className="text-white rounded-md bg-emerald-600 text-sm p-2">Sign Out</button>
            <button className="mx-2 rounded-md bg-emerald-100 text-sm p-1">Overview</button>
            </div>
        </header>): (<header className='flex items-center justify-between p-4 bg-emerald-500 text-3xl font-medium font-sans'>
            <h1 >Cookie Stand Admin</h1>
        </header>)}
        </>
    )
}