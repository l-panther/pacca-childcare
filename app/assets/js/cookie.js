function setCookie(name, value, days) {

    const date = new Date();

    date.setTime(
        date.getTime() + (days * 24 * 60 * 60 * 1000)
    );

    document.cookie =
        `${name}=${value};expires=${date.toUTCString()};path=/;SameSite=Lax`;
}


function getCookie(name) {

    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {

        cookie = cookie.trim();

        if (cookie.startsWith(name + "=")) {
            return cookie.substring(name.length + 1);
        }
    }

    return null;
}


document.addEventListener("DOMContentLoaded", () => {

    const banner = document.getElementById("cookie-banner");

    if (!banner) return;


    const accept = document.getElementById("accept-cookies");
    const reject = document.getElementById("reject-cookies");
    const save = document.getElementById("save-cookie-settings");


    // Hide banner if choice already saved
    if (getCookie("cookieConsent")) {
        banner.style.display = "none";
    }


    accept?.addEventListener("click", () => {

        setCookie("cookieConsent", "accepted", 365);

        banner.style.display = "none";

    });


    reject?.addEventListener("click", () => {

        setCookie("cookieConsent", "rejected", 365);

        banner.style.display = "none";

    });


    save?.addEventListener("click", () => {

        setCookie("cookieConsent", "custom", 365);

        banner.style.display = "none";

    });

});