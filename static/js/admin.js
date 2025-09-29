

/* ADMIN DASHBOARD INFO */
$.get("/admin_info", function(mesg){
    document.getElementById("user").innerHTML = mesg.user;
    document.getElementById("asset").innerHTML = mesg.asset;
    document.getElementById("cat").innerHTML = mesg.cat;
});