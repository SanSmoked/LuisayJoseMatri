document.addEventListener("DOMContentLoaded", function(event) {
    setInterval(updateDate,1000);
});

let show1 = show2 = show3 = show4 = show5 = show6 = show7 = show8 = show9 = show10 = show11 = show12 = show13 = show14 = true;
document.addEventListener("scroll", (event) => {

    let aux = window.innerHeight*0.75;
    let scrollY = window.scrollY + aux;
    let scrollYBranches = window.scrollY + window.innerHeight;
    var ceremonyContainer = document.getElementById('ceremony-container');
    var receptionContainer = document.getElementById('reception-container');
    var dressContainer = document.getElementById('dress-container');
    var giftContainer = document.getElementById('gift-container');
    var attendanceContainer = document.getElementById('attendance-container');
    var nosotros1 = document.getElementById('nosotros1');
    var nosotros2 = document.getElementById('nosotros2');
    var nosotros3 = document.getElementById('nosotros3');
    var nosotros4 = document.getElementById('nosotros4');
    var nosotros5 = document.getElementById('nosotros5');

    var branch1 = document.getElementsByClassName('first-branch')[0];
    var branch2 = document.getElementsByClassName('second-branch')[0];
    var branch3 = document.getElementsByClassName('third-branch')[0];
    var branch4 = document.getElementsByClassName('fourth-branch')[0];




    if(show1 && scrollY > ceremonyContainer.offsetTop){
        show1 = false;
        ceremonyContainer.classList.add("appear-element");
    }
    if(show2 && scrollY > receptionContainer.offsetTop){
        show2 = false;
        receptionContainer.classList.add("appear-element");
    }
    if(show3 && scrollY > dressContainer.offsetTop){
        show3 = false;
        dressContainer.classList.add("appear-element");
    }
    if(show4 && scrollY > giftContainer.offsetTop){
        show4 = false;
        giftContainer.classList.add("appear-element");
    }
    if(show5 && scrollY > attendanceContainer.offsetTop){
        show5 = false;
        attendanceContainer.classList.add("appear-element");
    }

    if(show6 && scrollY > nosotros1.offsetTop){
        show6 = false;
        nosotros1.classList.add('move-element');
    }

    if(show7 && scrollY > nosotros2.offsetTop){
        show7 = false;
        nosotros2.classList.add('move-element');
    }

    if(show8 && scrollY > nosotros3.offsetTop){
        show8 = false;
        nosotros3.classList.add('move-element');
    }

    if(show9 && scrollY > nosotros4.offsetTop){
        show9 = false;
        nosotros4.classList.add('move-element');
    }

    if(show10 && scrollY > nosotros5.offsetTop){
        show10 = false;
        nosotros5.classList.add('move-element');
    }

    if(show11 && scrollYBranches > branch2.offsetTop){
        show11 = false;
        branch2.classList.add('move-branch-left');
    }

    if(show12 && scrollYBranches > branch3.offsetTop){
        show12 = false;
        branch3.classList.add('move-branch-left');
    }

    if(show13 && scrollYBranches > branch1.offsetTop){
        show13 = false;
        branch1.classList.add('move-branch-right');
    }

    if(show14 && scrollYBranches > branch4.offsetTop){
        show14 = false;
        branch4.classList.add('move-branch-right');
    }
});

function updateDate(){
    var countDownDate = new Date("Oct 12, 2024 11:30:0").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days ;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}
function openGoogleMaps(place) {
    var url = '';
    if (place == 1) {
        // url iglesia
        url = 'https://maps.app.goo.gl/uU6gNxNgXgyWSEG48';
    } else {
        //url contuamor
        url = 'https://maps.app.goo.gl/xJYrZ68oeZJgs49EA';
    }
    window.location.href = url;
}

function confirmation() {
    const phoneNumber = '573136568109';
    const message = 'Hola,%20quiero%20confirmar%20mi%20asistencia%20a%20la%20boda%20de%20Luisa%20%26%20José.%20Mi%20nombre%20es:';
    var url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.location.href = url;
}

function addEventToCalendar(){
    const title = "Matrimonio Luisa & José";
    const description = "";
    const location = "Parroquia nuestra señora de Chiquinquira, Rionegro";
    const startDateTime = "20241012T113000";
    const endDateTime = "20241012T170000";
    const timezone = "America/Bogota";

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDateTime}/${endDateTime}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&sf=true&output=xml&ctz=${timezone}`;

    window.open(url, '_blank');
}
