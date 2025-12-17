document.addEventListener('DOMContentLoaded', () => {
    const marqueeContent = document.querySelector('.marquee-content');
    const marqueeContainer = document.querySelector('.marquee-brands');
    if (marqueeContent) {
        const clone = marqueeContent;
        marqueeContainer.appendChild(clone.cloneNode(true));
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const tabItems = document.querySelectorAll('.tab-item');

    tabItems.forEach(clickedItem => {
        clickedItem.addEventListener('click', () => {
            tabItems.forEach(item => {
                item.classList.remove('active');
            });
            clickedItem.classList.add('active');
        });
    });

    const tabsFinance = document.querySelectorAll('[data-tab-target]');
    const tabContentsFinance = document.querySelectorAll('.accordion-content');

    tabsFinance.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget);
            tabsFinance.forEach(t => t.classList.remove('active'));
            tabContentsFinance.forEach(content => content.classList.remove('active'));
            tab.classList.add('active');
            target.classList.add('active');
        });
    });

    var options = {
        offset: 200
    };
    var myElement = document.querySelector("header");
    if (myElement) {
        var headroom = new Headroom(myElement, options);
        headroom.init();
    }

});


 