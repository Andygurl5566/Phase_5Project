import React, {useState} from "react"
import EditEntryForm from "./EditEntryForm";

function EntryCard({entries, edited, setEdited, onDeleteEntries, handleDeleteEntry, setMenuItem}){
    const {id} = entries
    const [toggle, setToggle] = useState(false);

    function handleToggle(){
    
        setToggle(!toggle)
      
    }

    function confirmDelete(){
        let result = window.confirm("Are you sure you want to delete this entry?")
        if (result) {
            handleDeleteEntry()
        }
    }

    function handleDeleteEntry() {
        fetch(`/entries/${id}`, {
          method: "DELETE",
        }).then((res) => {
            console.log(res)
          if (res.ok) {
            onDeleteEntries(entries);
          }
        }).then(setEdited(entries))
        .then(setMenuItem([]))

            
          }
       console.log(entries)


       function addEvent(){

       }


    return (
        <div className = "card" style={{ width: '25rem' }}>

        <div className = "card-body">

            {entries.image == "" || null  ? "" : <img className="card-img-top" src={entries.image} alt="Card image cap"/>}

            <h5 className="card-title">{entries.title}</h5>

            
            {/* 🔴🟠🟡🟢🔵🟣🟤⚫⚪ */}

            <p className="card-text">{entries.details}</p>
            
            {/* <a href="#" className="btn btn-primary">Details</a> */}
           
            <button onClick={handleToggle} className="general-button2">{toggle==false? "Edit":"Close"}</button>
            
            <button onClick={confirmDelete} className="general-button2"> Delete </button>

            <button onClick={addEvent} className="general-button2"> Add To Calander</button>

            {toggle == false? "" : <EditEntryForm 
                edited={edited}
                setEdited={setEdited}
                onDeleteEntry={onDeleteEntries}
                handleDeleteEntry={handleDeleteEntry}
                entries ={entries} 
                id={id} setToggle={setToggle} />  }

            {/* {1 == 1? "" : <AddEventForm 
                />  }     */}

        </div>
    </div>
    )
}

export default EntryCard