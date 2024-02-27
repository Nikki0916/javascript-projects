function init() {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    button.addEventListener('click', function(event) {
        paragraph.textContent = 'Houston! We have liftoff!';
    });   

    missionAbort.addEventListener('mouseover', function(event) {
        missionAbort.style.backgroundColor = 'red';
    });   

    missionAbort.addEventListener('mouseout', function(event) {
        event.target.style.backgroundColor = '';
    });

    missionAbort.addEventListener('click', function(event) {
        let confirmation = confirm('Are you sure you want to abort the mission?');
        if (confirmation) {
            paragraph.textContent = 'Mission Aborted! Space shuttle returning home.';
        }
    });
}

window.addEventListener("load", init);
