'use strict';

const menu = document.querySelector('.menu'),
menuItem = document.querySelectorAll('.menu__item'),
humburger = document.querySelector('.humburger');

humburger.addEventListener('click', () => {
    humburger.classList.toggle('humburger_active');
    menu.classList.toggle('menu_active');
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        humburger.classList.toggle('humburger_active');
        menu.classList.toggle('menu_active');
    });
});

const tabs = document.querySelector(".tabs");
const last = document.querySelector(".last");

tabs.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target !== this && e.target.tagName !== 'HR') {
        const i = e.path.find(element => element.tagName === "A").dataset.i;
        const activeTab = [...last.children].find(div => !div.hidden);

        if (activeTab.dataset.i === i) {
            return;
        }

        activeTab.classList.add('transparent');

        activeTab.ontransitionend = () => {
            activeTab.hidden = true;
            activeTab.ontransitionend = null;
        };

        const nextTab = last.querySelector(`[data-i="${i}"]`);
        nextTab.hidden = false;
        setTimeout(() => {
            nextTab.classList.remove('transparent');
        });
        tabs.style.setProperty("--shift", i * 330 + 'px');
    }
});