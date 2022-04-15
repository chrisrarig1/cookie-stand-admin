
export default function Header(props){
    return(
        <>
        {props.user ?(
        <header className='flex items-center justify-between p-2 bg-emerald-500 text-3xl font-medium font-sans'>
            <h1 className="mx-28">Cookie Stand Admin</h1>
            <button onClick={props.logout}className="mx-28">logout</button>
        </header>): (<header className='flex items-center justify-between p-4 bg-emerald-500 text-3xl font-medium font-sans'>
            <h1 >Cookie Stand Admin</h1>
        </header>)}
        </>
    )
}