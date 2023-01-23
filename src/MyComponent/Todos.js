import Todo_list from "./Todo_list";

function Todos(props)
{
    return(
        <>
        <h2 className="text-center pb-5">Todos List</h2>
        {props.todos.length===0? "No Todos to display":
            props.todos.map((todo)=>{
                return(
                    <Todo_list todo = {todo} key={todo.sno} onDelete={props.onDelete}/>
                )
            })
        } 
        </>
    )
}
export default Todos;