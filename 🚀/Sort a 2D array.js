// In the office we love to do amazing activities all together so we can share incredible experiences. 
// This time, we decided to do bungee jumping. To decide the order we are going to jump, we need to create a sorter algorithm with the next rules.

// We will receive a list of names for each department, so at the end we will have a 2D array with different length

// We will return a normal array with all the names in the correct order

// The sequence will be to add all the names sorted by the length of the name (ASC). In case there are more than one with the same length, sort them alphabetically.

function namesSorter (departmentsArray) {
    let arr = []
       departmentsArray.forEach((array)=>{
         array.forEach((name)=>{
           arr.push(name)
         })
         
         arr.sort((a, b)=>{
        if(a.length < b.length){
          return -1
        }else if(a.length > b.length){
          return 1
        }else if(a < b){
          return -1
        }else{
          return 1
        }
           
      })
       })
      return arr;
    }

    // You have passed all of the tests! :)