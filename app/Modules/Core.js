import Settings from "./Settings";

export default {

    positions: ['top left', 'top center', 'top right', 'bottom left', 'bottom center', 'bottom right'],
    elements: [],

    prepare() {

        this.positions.forEach(position => {

            let element = this.createElement('div', {
                'class': 'slee-element ' + position
            });

            this.elements.push(element);
            document.body.appendChild(element);

        });

    },

    createElement(tagName, attributes = {}, text = false) {

        let element = document.createElement(tagName);

        Object.keys(attributes).forEach(attribute => {
            element.setAttribute(attribute, attributes[attribute]);
        });

        if(text)
            element.innerText = text;

        return element;

    },

    pushNotification(type, settings = {}) {

        const data = Settings.data;
        type = type ? type : data.type;

        const gap = settings.gap ? settings.gap : data.gap;
        const pos = settings.position ? settings.position : data.position;
        const pointer = settings.pointerEvents ? ' pointer-events' : data.pointerEvents ? ' pointer-events' : '';

        const animation = settings.animation !== undefined
            ? settings.animation
                ? ' ' + settings.animation
                : ''
            : data.animation
                ? ' ' + data.animation
                : '';

        let notificationElement = this.createElement('div', {
            'class': 'slee-notification ' + type + pointer + animation,
            'style': 'margin-bottom: ' + gap + 'px'
        });

        let notificationContent = this.createElement('div', {
            "class": 'slee-notification-content'
        });

        const title = settings.title ? settings.title : data.title;

        if(title) {

            let titleElement = this.createElement('span', {
                "class": 'slee-title'
            }, title);

            notificationContent.appendChild(titleElement);

        }

        const description = settings.description ? settings.description : data.description;

        if(description) {

            let descriptionElement = this.createElement('span', {
                "class": 'slee-description'
            }, description);

            notificationContent.appendChild(descriptionElement);

        }

        const picture = settings.picture !== undefined ? settings.picture : data.picture;

        if(picture) {

            notificationContent.classList.add('slee-picture');

            let pictureWrapper = this.createElement('div', {
                "class": 'slee-picture-wrapper'
            });

            let pictureElement = this.createElement('img', {
                src: picture,
                alt: picture
            });

            pictureWrapper.appendChild(pictureElement);
            notificationContent.appendChild(pictureWrapper);

        }

        const autoHide = settings.autoHide !== undefined ? settings.autoHide : data.autoHide;
        const hideDelay = settings.hideDelay ? settings.hideDelay : data.hideDelay ? data.hideDelay : 4000;

        if(autoHide)
            this.hideNotification(notificationElement, hideDelay);

        const clickHide = settings.clickToHide ? settings.clickToHide : data.clickToHide;
        const action = settings.action !== undefined ? settings.action : data.action;

        if(clickHide && !action)
            this.clickToHide(notificationElement);

        if(!!action)
            this.createAction(notificationElement, action);

        notificationElement.appendChild(notificationContent);
        this.elements[this.positions.indexOf(pos)].appendChild(notificationElement);

    },

    hideNotification(element, delay) {

        function createTimer() {

            return setTimeout(() => {

                element.classList.add('hide');

                setTimeout(() => {

                    if(element.parentNode)
                        element.parentNode.removeChild(element);

                    element.removeEventListener('mouseover', mouseOver);
                    element.removeEventListener('mouseout', mouseOut);

                }, 300);

            }, delay);

        }

        function mouseOver() {
            clearInterval(timer);
        }

        function mouseOut() {
            timer = createTimer();
        }

        let timer = createTimer();

        element.addEventListener('mouseover', mouseOver);
        element.addEventListener('mouseout', mouseOut);

    },

    clickToHide(element) {

        function removeNotification() {

            element.classList.add('hide');
            element.removeEventListener('click', removeNotification);

            setTimeout(() => {
                element.parentNode.removeChild(element);
            }, 300);

        }

        element.addEventListener('click', removeNotification);

    },

    createAction(element, action) {

        let actionEvent = () => {

            action();
            element.removeEventListener('click', actionEvent);

            this.clickToHide(element);
            element.click();

        };

        element.addEventListener('click', actionEvent);

    }

};