 
 export default function footer(){
    const year = new Date().getFullYear();
    return(
        <footer>
        <p>Copyright © {year}</p>
        </footer>
    )
 }