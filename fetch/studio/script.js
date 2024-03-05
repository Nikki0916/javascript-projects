//TODO: Add Your Code Below
window.addEventListener('load', function() {
    const container = this.document.getElementById('container')
    
    let astronautCount = 0; 
    const count = document.getElementById('count');

    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
        .then(function(response) {
             response.json().then(function(data){
                data.sort(function(a,b){
                    return b.hoursInSpace - a.hoursInSpace
                });
                

               

        for (let i= 0; i < data.length; i++){
            let astronaut = data[i];
            // let activeAstronaut = astronaut.active;
            // if (astronaut.active = true) {
            // activeAstronaut.style.color = 'green'
            // } else {

            // }
            let activeClass = astronaut.active ? 'active' : '';


                container.innerHTML  += `
                <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li class= "${activeClass}">Active: ${astronaut.active} </li>
                        <li>Skills: ${astronaut.skills.join(", ")}</li>
                    </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}">
            </div>
                `
                astronautCount++;
        }

        count.innerText = `Total astronauts: ${astronautCount}`;
    });
             });
            
        });

        // countContainer.innerText = `Total astronauts: ${data.length}`;



























//             <div class="astronaut">
//     <div class="bio">
//         <h3>Mae Jemison</h3>
//         <ul>
//         <li>Hours in space: 190</li>
//         <li>Active: false</li>
//         <li>Skills: Physician, Chemical Engineer</li>
//         </ul>
//     </div>
//     <img class="avatar" src="images/mae-jemison.jpg">
// </div>
//         }