import axios from "axios"
import { useState } from "react"

export default function Exp6(){
    
        const[result, setResult] = useState("Nothing")
        if(result == "Nothing"){
        axios.get("https://reqres.in/api/users",{}).then((res)=>{
            setResult(res.data.data)   
                console.log(result)})
            }
    if(result != "Nothing")
    return(
        <div>
            Dr.A.Siva Krishna Reddy
            <br/> <br/> 
            <table border={1}>
                <tr>
                    <th>ID</th>
                    <th>EMAIL</th>
                    <th> FIRST NAME</th>
                    <th> LAST NAME</th>
                    <th> IMAGE </th>
                </tr>
                {result.map((element, index) => {
                    return(
                        <tr>
                            <td> {element.id}</td>
                            <td> {element.email}</td>
                            <td> {element.first_name}</td>
                            <td> {element.last_name}</td>
                            <td><img src={element.avatar} alt = "error"width={75} height={75}/> </td>       
                        </tr>
                    )
                })}
            </table>
        </div>
    )
    else
    return(
     <div> Data is fetching </div>
)
}