let xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.baaqmd.gov/Feeds/AlertRSS.aspx", true);
xhr.send();

xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            let response = xhr.response;
            if(response.includes("No Alert")) {
                console.log("No alert");
            } else {
                console.log("Alert");
            }
        }
        else {
            console.log("Could not make a determination");
        }
    }
};