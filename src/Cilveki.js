import Title from "./Title";
function Cilveki(props){
    const titleJSX = props.stundas.map((title, indekss)=>{
        return <title key = {indekss} nosaukums = {title}/>
    });
        return(
            <>
            <h2>{props.cilveki}</h2>
            <ul>
                {titleJSX}
            </ul>
            </>
        )
    
}

export default Cilveki;