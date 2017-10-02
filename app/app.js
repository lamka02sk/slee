import Settings from "./Modules/Settings";
import Core from "./Modules/Core";

module.exports = {

    configure(settings = {}) {
        Settings.save(settings);
    },

    prepare(settings = {}) {

        Settings.save(settings);
        Core.prepare();

    },

    success(settings = { type: 'success' }) {
        Core.pushNotification('success', settings);
    },

    info(settings = { type: 'info' }) {
        Core.pushNotification('info', settings);
    },

    warning(settings = { type: 'warning' }) {
        Core.pushNotification('warning', settings);
    },

    error(settings = { type: 'error' }) {
        Core.pushNotification('error', settings);
    },

    neutral(settings = { type: 'neutral' }) {
        Core.pushNotification('neutral', settings);
    },

    create() {
        Core.pushNotification();
    }

};