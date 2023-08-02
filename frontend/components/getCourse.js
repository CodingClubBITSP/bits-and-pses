  async function getCourselist (name) {

    const response = await fetch("https://bits-and-pses.duckdns.org/courselist/");
    const CourseList = await response.json();

    let reqIndex = -1;
    
    CourseList.map( el => {name === el.course_name ? reqIndex = CourseList.findIndex( el=> el.course_name === name) : null})
    
    // console.log(CourseList)
    // console.log(reqCode)
    
    if (reqIndex < 0) {
      return false;
    } else{  
    const reqCode = CourseList[reqIndex].CourseID;
     return reqCode;
    }  
  }

  async function getCodelist (code) {

    const response = await fetch("https://bits-and-pses.duckdns.org/courselist/");
    const CourseList = await response.json();

    let reqIndex = -1;
    
    CourseList.map( el => { el.CourseID === code ? reqIndex = CourseList.findIndex( el=> el.CourseID === code) : null})

       console.log(reqIndex)
    
    if (reqIndex < 0) {
      return false;
    } else{  
    const reqName = CourseList[reqIndex].course_name;

     return reqName;
    }  
  }



  import React, { useState, useEffect } from 'react';


  function DropdownMenuC() {
    const [menuItems, setMenuItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');
  
    useEffect(() => {
      // Fetch the data from the API and update the menuItems state
      fetchMenuItems();
    }, []);
  
    // Function to fetch the menu items from the API
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('https://bits-and-pses.duckdns.org/courselist/')

        if (!response.ok) {
          throw new Error('Failed to fetch menu items from API');
        }
        
        const data = await response.json();
        console.log(data)
        setMenuItems(data); // Update the menuItems state with the fetched data
      } catch (error) {
        console.error(error);
      }
    };
  
    // Function to handle the selection of a menu item
    const handleSelect = (e) => {
      setSelectedItem(e.target.value);
    };
  
    return (
      <div>
        <select style={{"width":"500px","border":"2px solid black",'height':"30px"}} value={selectedItem} onChange={handleSelect}>
          <option value="">Select an option</option>
          {menuItems.map((item) => (
            <option  key={item.id} value={item.course_name}>
              {item.course_name}
            </option>
          ))}
        </select>
        {selectedItem && <p>Selected item: {selectedItem}</p>}
      </div>
    );
  }

  function DropdownMenuD() {
    const [menuItems, setMenuItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');
  
    useEffect(() => {
      // Fetch the data from the API and update the menuItems state
      fetchMenuItems();
    }, []);
  
    // Function to fetch the menu items from the API
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('https://bits-and-pses.duckdns.org/courselist/')

        if (!response.ok) {
          throw new Error('Failed to fetch menu items from API');
        }
        
        const data = await response.json();
        console.log(data)
        setMenuItems(data); // Update the menuItems state with the fetched data
      } catch (error) {
        console.error(error);
      }
    };
  
    // Function to handle the selection of a menu item
    const handleSelect = (e) => {
      setSelectedItem(e.target.value);


    };
  
    return (
      <div>
        <select style={{"width":"500px","border":"2px solid black",'height':"30px"}} value={selectedItem} onChange={e => handleSelect(e)}>
          <option value="">Select an option</option>
          {menuItems.map((item) => (
            <option  key={item.id} value={item.CourseID}>
              {item.CourseID}
            </option>
          ))}
        </select>
        {selectedItem && <p>Selected item: {selectedItem}</p>}
      </div>
    );
  }

export {getCourselist , getCodelist , DropdownMenuC , DropdownMenuD}
