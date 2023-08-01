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
    
    CourseList.map( el => { el.CourseID === 'GS F241' ? reqIndex = CourseList.findIndex( el=> el.CourseID === 'GS F241') : null})

       console.log(reqIndex)
    
    if (reqIndex < 0) {
      return false;
    } else{  
    const reqName = CourseList[reqIndex].course_name;

     return reqName;
    }  
  }











  async function courseArray (params) {
    const response = await fetch("https://bits-and-pses.duckdns.org/courselist/");
    const CourseList = await response.json();

    let arr = [];

    CourseList.map( el => {arr.push(el.course_name)});

    return arr
  }

export {getCourselist , getCodelist , courseArray}