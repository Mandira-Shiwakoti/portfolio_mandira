import { eventWrapper } from '@testing-library/user-event/dist/utils'
import './custom_button.css'
import React from 'react'

function CustomButton(props){
    const onPressed =(event) => { console.log("button clicked on pressed:", event) 
    }
    return(
        <button id={props.id} onClick={props.onClick}
         className={`btn ${props.colorClass}`}>{props.title}
         {
            props.showicon?
            <span style={{marginLeft:"20px"}}></span>
            :
            <span></span>
         }
         {
            props.showicon && <span class="material-symbols-outlined">
            download
            </span>
         }
        </button>
    )
}

export default CustomButton