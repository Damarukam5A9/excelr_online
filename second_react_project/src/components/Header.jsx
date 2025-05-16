//functional component
const Header=function (){
    
    let menus=["Home","About","Contact","Services","portfolio"];
    return(
        <>
            <h1>Header</h1>
            <ul>
                {
                   menus.map((menu,index)=>{
                        return(
                            <li key={index}>{menu}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Header;