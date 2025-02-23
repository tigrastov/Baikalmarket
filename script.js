// Объект с текстами на разных языках
const texts = {
    en: {
        cart: "Cart",
        catalog: "Catalog",
        about: "About Us",
        delivery: "Delivery Information & Contacts",
        language: "Language",
        deliveryInfo: "The Baikal company delivers products in Belgrade free of charge for the client. Delivery of frozen products requires a special approach to organizing the process. Therefore, the assembly and assembly of orders must be done in advance. In this process, dialogue between the contractor and the client is very important to determine the exact location and time of delivery of the order. Therefore, each order is individually discussed by phone or in messages. We try to deliver the order to the client's address on the day of the order or the next day. If we are talking about items that are made individually for the client, the conditions are discussed separately. We value each client. Call - write, and we will agree on everything.",
        aboutInfo: "Baikal Company is a food manufacturing company from Belgrade, Serbia. We specialize in the production of frozen semi-finished products, as well as various salads, confectionery - everything that requires preparations and labor-intensive manual cooking process. Thus, we try to implement a service that saves your time and effort. The product catalog contains a basic list of popular products, which we try to always keep in stock. We also make some dishes on an individual order basis. We deliver finished products around the city by ourselves free of charge for the client. You can place an order in various ways: through the application, by phone, through messages in Telegram and Instagram.",
        cartPage: {
            backToCatalog: "← Back to Catalog",
            orderInstructions: "To order, you just need to take a screenshot (or add the list manually) and send it to us via the link (click on the button: Place an order). Or you can place an order by phone. The number is listed in the menu section 'Delivery information and contacts'.",
            placeOrder: "Place an Order"
        }
    },
    ru: {
        cart: "Корзина",
        catalog: "Каталог",
        about: "О нас",
        delivery: "Информация о доставке и контакты",
        language: "Язык",
        deliveryInfo: "Компания Байкал осуществляет доставку продукции по городу Белграду бесплатно для клиента. Доставка замороженных продуктов требует особого подхода к организации процесса. Поэтому сборка и компоновка заказов должна производиться заблаговременно. В этом процессе очень важен диалог между исполнителем и клиентом для определения точной локации и времени доставки заказа. Поэтому каждый заказ индивидуально обговаривается по телефону или в сообщениях. Мы стараемся осуществлять доставку заказа на адрес клиента в день заказа или на следующий день. Если речь идет о позициях, которые изготавливаются для клиента индивидуально, то условия обсуждаются отдельно. Мы дорожим каждым клиентом. Звоните- пишите, и мы обо всем договоримся.",
        aboutInfo: "Компания Байкал - это пищевая производственная компания из города Белград, Сербия. Мы специализируемся на производстве замороженных полуфабрикатов, а также различных салатов, кондитерских изделий - всего того, что требует заготовок и трудоемкого ручного процесса приготовления блюд. Тем самым мы стараемся реализовывать сервис, который экономит ваше время и силы. Каталог продукции содержит базовый список популярных товаров, который мы стараемся поддерживать всегда в наличии. Также мы изготавливаем некоторые блюда в порядке индивидуальных заказов. Мы осуществляем доставку готовой продукции по городу собственными силами бесплатно для клиента. Вы можете оформить заказ различными способами: через приложение, по телефону, через сообщения в Телеграм и Инстаграм.",
        cartPage: {
            backToCatalog: "← Назад в каталог",
            orderInstructions: "Для заказа просто сделайте скриншот (или добавьте список вручную) и отправьте нам по ссылке (нажмите кнопку: Оформить заказ). Вы также можете сделать заказ по телефону. Номер указан в разделе меню 'Информация о доставке и контакты'.",
            placeOrder: "Оформить заказ"
        }
    },
    sr: {
        cart: "Korpa",
        catalog: "Katalog",
        about: "O nama",
        delivery: "Informacije o dostavi i kontaktima",
        language: "Jezik",
        deliveryInfo: "Компанија Баикал врши испоруку производа на територији града Београда бесплатно за клијента. Испорука смрзнутих производа захтева посебан приступ организацији процеса. Због тога се састављање и састављање налога мора извршити унапред. У овом процесу, дијалог између извођача и наручиоца је веома важан за одређивање тачне локације и времена испоруке наруџбине. Стога се о свакој наруџбини појединачно разговара телефоном или у порукама. Трудимо се да поруџбину испоручимо на адресу купца на дан поруџбине или наредног дана. Ако говоримо о предметима који се израђују појединачно за клијента, онда се о условима разговара посебно. Ценимо сваког клијента. Позовите или пишите и договорићемо се о свему",
        aboutInfo: "Баикал Цомпани је компанија за производњу хране са седиштем у Београду, Србија. Специјализовани смо за производњу смрзнутих полупроизвода, као и разних салата, кондиторских производа - свега што захтева припрему и радно интензиван процес ручног кувања. На овај начин покушавамо да имплементирамо услугу која штеди ваше време и труд. Каталог производа садржи основну листу популарних производа, које се трудимо да у сваком тренутку имамо на залихама. Такође правимо нека јела по наруџбини. Достављамо готове производе по граду сопственим средствима, бесплатно за клијента. Можете наручити на различите начине: преко апликације, телефоном, путем порука на Телеграму и Инстаграму.",
        cartPage: {
            backToCatalog: "← Назад у каталог",
            orderInstructions: "За поруџбину само направите снимак екрана (или додајте листу ручно) и пошаљите нам путем линка (кликните на дугме: Наручите). Такође можете наручити телефоном. Број је наведен у одељку менија 'Информације о испоруци и контактима'.",
            placeOrder: "Наручите"
        }
    }
};

// Получение текущего языка из localStorage или установка языка по умолчанию
let currentLanguage = localStorage.getItem('language') || 'en';

// Функция для смены языка
function changeLanguage(language) {
    currentLanguage = language;
    localStorage.setItem('language', language);  // Сохраняем выбранный язык в localStorage
    updateContent();  // Обновляем контент на странице
    closeLanguageMenu();  // Закрываем меню выбора языка
}

// Функция для обновления контента на странице
function updateContent() {
    // Обновляем тексты в меню
    document.querySelector('a[href="index.html"]').textContent = texts[currentLanguage].catalog;
    document.querySelector('a[href="about.html"]').textContent = texts[currentLanguage].about;
    document.querySelector('a[href="info.html"]').textContent = texts[currentLanguage].delivery;
    document.querySelector('a[href="cart.html"]').textContent = texts[currentLanguage].cart;
    document.querySelector('a[onclick="toggleLanguageMenu()"]').textContent = texts[currentLanguage].language;

    // Обновляем текст на странице "Доставка"
    const deliveryText = document.querySelector('.textDelivery p');
    if (deliveryText) {
        deliveryText.textContent = texts[currentLanguage].deliveryInfo;
    }

    // Обновляем текст на странице "О нас"
    const aboutText = document.querySelector('.textAbout p');
    if (aboutText) {
        aboutText.textContent = texts[currentLanguage].aboutInfo;
    }

    // Обновляем текст на странице "Корзина"
    const backToCatalogLink = document.querySelector('.navCart a');
    if (backToCatalogLink) {
        backToCatalogLink.textContent = texts[currentLanguage].cartPage.backToCatalog;
    }

    const orderInstructions = document.querySelector('#order-plate p');
    if (orderInstructions) {
        orderInstructions.textContent = texts[currentLanguage].cartPage.orderInstructions;
    }

    const placeOrderLink = document.querySelector('.telegram-link');
    if (placeOrderLink) {
        placeOrderLink.textContent = texts[currentLanguage].cartPage.placeOrder;
    }
}

// Функция для отображения/скрытия меню выбора языка
function toggleLanguageMenu() {
    const languageMenu = document.getElementById("languageMenu");
    languageMenu.style.display = (languageMenu.style.display === "block") ? "none" : "block";
}

// Функция для закрытия меню выбора языка
function closeLanguageMenu() {
    document.getElementById("languageMenu").style.display = "none";
}

// Функция для переключения бургер-меню
function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

// Инициализация контента при загрузке страницы
updateContent();


