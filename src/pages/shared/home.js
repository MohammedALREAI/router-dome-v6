import React, { useState } from 'react'

export const Home = () => {
    const [selected, setSelected] = useState()
    
   const   handleChange = e => {
        if (e.target.value) {
            setSelected(e.target.value)
            localStorage.setItem("role", e.target.value)
         
        }
        return
      };


    return (
        <div>
            home

            <form>
          <input
            type="radio"
            value="admin"
            name="content"
            id="rosles"
            onClick={handleChange}
            checked={selected === "admin"}
          />
          <label for="show">admin</label>

          <input
            type="radio"
            value="employer"
            name="content"
            id="rosles"
            onClick={handleChange}
            checked={selected === "employer"}
          />
          <label for="hide">employer</label>
          <input
            type="radio"
            value="talent"
            name="content"
            id="rosles"
            onClick={handleChange}
            checked={selected === "talent"}
          />
          <label for="hide">talent</label>
        </form>        
        </div>
    )
}
