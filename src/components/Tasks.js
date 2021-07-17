import Task from './Task'


const Tasks = ({tasks, onDelete, onToggle}) => {

	return (
  		<>
  			{tasks.map((task) =>(
  				<Task 
  					key={task.id} task = {task} //pass each task as a prop
  					onDelete = {onDelete} 
  					onToggle={onToggle} 

  				/>
  				
  			))}
  		</>
  	)
}

export default Tasks