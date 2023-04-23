/**
 *
 * Преобразува думите от словесния към цифровия им формат.
 *
 * Кодът е заимстван от https://stackoverflow.com/a/12014376
 *
 */

function words2numsBG(s) {
    const Small = {
        нула: 0,
        едно: 1,
        една: 1,
        един: 1,
        две: 2,
        два: 2,
        три: 3,
        четири: 4,
        пет: 5,
        шест: 6,
        седем: 7,
        осем: 8,
        девет: 9,
        десет: 10,
        единадесет: 11,
        дванадесет: 12,
        тринадесет: 13,
        четиринадесет: 14,
        петнадесет: 15,
        шестнадесет: 16,
        седемнадесет: 17,
        осемнадесет: 18,
        деветнадесет: 19,
        двадесет: 20,
        тридесет: 30,
        четиридесет: 40,
        петдесет: 50,
        шестдесет: 60,
        седемдесет: 70,
        осемдесет: 80,
        деветдесет: 90,
        сто: 100,
        двеста: 200,
        триста: 300,
        четиристотин: 400,
        петстотин: 500,
        шестстотин: 600,
        седемстотин: 700,
        осемстотин: 800,
        деветстотин: 900,
    };

    const Magnitude = {
        хиляда: 1000,
        хиляди: 1000,
        милион: 1000000,
        милиона: 1000000,
        милиард: 1000000000,
        милиарда: 1000000000,
        трилион: 1000000000000,
        трилиона: 1000000000000,
        квадрилион: 1000000000000000,
        квадрилиона: 1000000000000000,
        квинтилион: 1000000000000000000,
        квинтилиона: 1000000000000000000,
        секстилион: 1000000000000000000000,
        секстилиона: 1000000000000000000000,
        септилион: 1000000000000000000000000,
        септилиона: 1000000000000000000000000,
        октилион: 1000000000000000000000000000,
        октилиона: 1000000000000000000000000000,
        нонилион: 1000000000000000000000000000000,
        нонилиона: 1000000000000000000000000000000,
        децилиони: 10000000000000000000000000000000000,
        децилиониа: 10000000000000000000000000000000000,
    };

    let a, n, g;

    a = s
        .toString()
        .replace(/[^a-zA-Z\s\u0080-\uFFFF]/g, "")
        .toLowerCase()
        .split(/[\s-]+/);

    n = 0;
    g = 0;
    a.forEach(feach);

    return n + g;

    function feach(w) {
        let x;

        if (x = Small[w]) {
            g = g + x;
            return;
        }

        if (x = Magnitude[w]) {
            n = n + g * x;
            g = 0;
        }
    }
}
