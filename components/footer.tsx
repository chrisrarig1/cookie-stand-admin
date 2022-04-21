
export default function Footer(props){
    const standCount = props.resources ? props.resources.length : 0;
    return(
        <>
            <footer className='bg-emerald-500 p-4'>
                <p>{standCount} Locations World Wide</p>
            </footer>
        </>
    )
}