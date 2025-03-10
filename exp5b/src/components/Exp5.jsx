import ResponsiveAppBar from './Appbar';
import './style.css'

export default function Exp5 () {
    return(

        <div className ='parent'>
            

        <ResponsiveAppBar/>
        <center>
        <div>
        <table className ='login-form'>
            <tr>
                <td colSpan={2} style ={{backgroundColor:'yellowgreen'}}> Login Page </td>
            </tr>
            <tr> 
                <td> Name: </td>
                <td> <input type = "text" className="form-control"name ="t1" id ="un"/> </td>
            </tr>
            <tr>
                <td> Password: </td>
                <td><input type ="text" className="form-control" name ="t2" id="pwd" /> </td>
            </tr>
            <tr>
                <td> Role: </td>
                <td> <select class="form-control" id="sel1">
                    <option value={1}>Admin</option>
                    <option value={2}>User</option>
                   </select></td>
            </tr>
            <tr><td>Enter Department Name</td>
            <td><label>
                <input type="checkbox" />CSE
            </label><br />
            <label>
                <input type="checkbox" />ECE
            </label><br />
            <label>
                <input type="checkbox" />AI/DS
            </label>
            </td>
            </tr>
            <tr> 
                <td colSpan={2}> <button class="btn btn-success"> Login </button>  </td>
            </tr>
        </table>
        </div>
        </center>
        </div>
        
    );
}