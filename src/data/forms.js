/**
 * Internal Dependencies
 */
import * as Forms from '../forms'

/**
 * Forms Data and Component Mapping
 */
const forms = {
    login: {
        title: 'Login',
        form: Forms.Login,
        formDefault: {
            step: 'login',
            username: '',
            password: ''
        }
    },
    installPlugin: {
        title: 'Install Plugin',
        form: Forms.InstallPlugin,
        formDefault: {
            step: "installPlugin",
            pluginZipFile: {
                resource: 'wordpress.org/plugins',
                slug: ''
            },
            options: {
                activate: true
            }
        }
    },
    installTheme: {
        title: 'Install Theme',
        form: Forms.InstallTheme,
        formDefault: {
            step: "installTheme",
            pluginZipFile: {
                resource: 'wordpress.org/themes',
                slug: ''
            },
            options: {
                activate: true
            }
        }
    },
};
export default forms;

export function getForm(step) {
    return forms[step];
}