    setInterval(function () {
            var element = document.querySelector('.setStyle');
            let WindowWidth = window.innerWidth - 20;
            if (WindowWidth < 768) {
                let setWidthValue = WindowWidth + "px";
                element.style.setProperty('width', setWidthValue);
            } else if (WindowWidth < 820) {
                element.style.setProperty('width', '340px');
            } else if (WindowWidth < 912) {
                element.style.setProperty('width', '380px');
            }
            else {
                element.style.setProperty('width', '420px');
            }
        });
