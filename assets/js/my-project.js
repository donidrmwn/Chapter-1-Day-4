document.getElementById('containerProject').innerHTML = ""

let projectLists = [];
function getFileName()
{
    let selectedFile = document.getElementById("projectImage").value;
    selectedFile = selectedFile.replace( "C:\\fakepath\\","")
    document.getElementById("textProjectImage").value = selectedFile;
}

function insertProject() {
    event.preventDefault();
   
    let projectName = document.getElementById("projectName").value;
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
    let description = document.getElementById("description").value;
    let nodeJs = document.getElementById("nodeJs").checked;
    let reactJs = document.getElementById("reactJs").checked;
    let vueJs = document.getElementById("vueJs").checked;
    let javaScript = document.getElementById("javaScript").checked;
    let projectImage = document.getElementById("projectImage").files;
    let image;
   
    
    let tagListIcon = "";

    let listIcon = [
        '<i class="fa-brands fa-node-js fa-2xl"></i>',
        '<i class="fa-brands fa-react fa-2xl"></i>',
        '<i class="fa-brands fa-vuejs fa-2xl"></i>',
        '<i class="fa-brands fa-js fa-2xl"></i>'
    ]

    let listIconChecked = [
        nodeJs,reactJs,vueJs,javaScript
    ]

    for(i = 0;i <= listIcon.length; i++){
        if(listIconChecked[i] == true){
            tagListIcon += listIcon[i]
        }else{
            tagListIcon += "";
        }
    }
    let objData;
    console.log(projectName)
    if(projectName == ""){
        alert("Project name masih kosong..!")
        return
    }else if(startDate == ""){
        alert("Start Date masih kosong..!")
        return
    }else if(endDate == ""){
        alert("End Date masih kosong..!")
        return
    }else if(description == ""){
        alert("Description masih kosong..!")
        return
    }else if(tagListIcon == ""){
        alert("Belum ada list icon yang di pilih...!")
        return
    }else if(projectImage[0] == undefined){
        alert("Belum ada gambar yang di pilih...!")
        return
    }else{
        image = URL.createObjectURL(projectImage[0]);
        objData = {
            projectName,
            startDate,
            endDate,
            description,
            tagListIcon,
            image
        }
        projectLists.push(objData);
        showData();
    }
}

function showData(){
    document.getElementById('containerProject').innerHTML = "";    
    for(var i = 0; i <= projectLists.length - 1; i++){
        //console.log(projectLists[i].startDate.getDate());
   
        document.getElementById('containerProject').innerHTML +=  
        `<div class="project-card default-border">
            <div class="project-card-img">
                <img src="${projectLists[i].image}" alt="">
            </div>
                <a style="text-decoration:none" href="detail-project.html"><h2>${projectLists[i].projectName}</h2></a>
                <h3>Durasi: ${timeDistance(projectLists[i].startDate, projectLists[i].endDate)}</h3>
            <div class="project-card-description">
                <p>
                    ${projectLists[i].description}
                </p>
            </div>
            <div class="list-icon-tech">
                ${projectLists[i].tagListIcon}
            </div>
            <div class="button-group">
                <button class="button-edit">edit</button>
                <button class="button-delete">delete</button>
            </div>
        </div>`
    }
}


function timeDistance(startDate,endDate){
    startDate = new Date(startDate)
    endDate = new Date(endDate)
    distance =  endDate - startDate;
    let monthDistance = Math.floor(distance / (30*24*60*60*1000))
    let weekDistance = Math.floor(distance / (7*24*60*60*1000))
    let dayDistance = Math.floor(distance / (24*60*60*1000))
    let hourDistance = Math.floor(distance / (60*60*1000))
    let minuteDistance = Math.floor(distance / (60*1000))
    
    if(monthDistance > 0){
        return `${monthDistance} bulan`
    }else if(weekDistance > 0){
        return `${weekDistance} minggu`
    }else if(dayDistance > 0){
        return `${dayDistance} hari`
    }else if(hourDistance > 0){
        return `${hourDistance} jam`
    }else if(minuteDistance > 0){
        return `${minuteDistance} menit`
    }else{
        return
    }
    
}