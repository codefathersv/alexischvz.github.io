export default function menuHamburger(btn, menu, enlace) {
    const d = document;

    d.addEventListener("click", (e) => {

        if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
            d.querySelector(menu).classList.toggle("is-active");
            d.querySelector(btn).classList.toggle("is-active");
        }

        if (e.target.matches(enlace)) {

            d.querySelector(menu).classList.remove("is-active");
            d.querySelector(btn).classList.remove("is-active");

        }

    })
}