var template = {
    "navbar": [
        {
            "title": "Home",
            "link": "/index.html"
        },
        {
            "title": "Contact",
            "link": "/contact.html"
        }
    ],
    "extranavbar": [
        {
            "title": "daniel4-scratch",
            "link": "https://daniel4-scratch.github.io"
        }
    ],
    "thumbnail": "/thumbnail.png",
}

var navbar = document.getElementsByClassName("navbar")[0];
var extranavbar = document.getElementsByClassName("extrabar")[0];
var thumbnail = document.getElementById("logo");

for (var i = 0; i < template.navbar.length; i++) {
    var a = document.createElement("a");
    a.href=template.navbar[i].link;
    a.innerHTML=template.navbar[i].title;
    navbar.appendChild(a);
}

for (var i = 0; i < template.extranavbar.length; i++) {
    var a = document.createElement("a");
    a.href=template.extranavbar[i].link;
    a.innerHTML=template.extranavbar[i].title;
    extranavbar.appendChild(a);
}

thumbnail.src=template.thumbnail;
