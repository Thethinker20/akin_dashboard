var activePage = window.location.pathname;
console.log(activePage);

if (activePage == "/home") {
    var dash_home = document.getElementById("dash_home");
    dash_home.classList.add("bg-gradient-primary");
    document.getElementById('dash_text').innerText = "Dashboard";
    document.getElementById('dash_text_2').innerText = "Dashboard";
} else if (activePage == "/quotation") {
    var dash_q = document.getElementById("dash_quotation");
    dash_q.classList.add("bg-gradient-primary");
    document.getElementById('dash_text').innerText = "Quotation";
    document.getElementById('dash_text_2').innerText = "Quotation";
}else if (activePage == "/profile") {
    var dash_q = document.getElementById("dash_profile");
    dash_q.classList.add("bg-gradient-primary");
    document.getElementById('dash_text').innerText = "Profile";
    document.getElementById('dash_text_2').innerText = "Profile";
}