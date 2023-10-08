/**
 * Internal Dependencies
 */
import * as Forms from '../forms'

/**
 * Forms Data and Component Mapping
 */
const forms = {
    login: {
        once: true,
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
            themeZipFile: {
                resource: 'wordpress.org/themes',
                slug: ''
            },
            options: {
                activate: true
            }
        }
    },
    activatePlugin: {
        title: 'Activate Plugin',
        form: Forms.ActivatePlugin,
        formDefault: {
            step: 'activatePlugin',
            pluginName: '',
            pluginPath: ''
        }
    },
    activateTheme: {
        title: 'Activate Theme',
        form: Forms.ActivateTheme,
        formDefault: {
            step: 'activateTheme',
            themeFolderName: '',
        }
    },
    copy: {
        title: 'Copy',
        form: Forms.Copy,
        formDefault: {
            step: 'cp',
            fromPath: '',
            toPath: '',
        }
    },
    defineSiteUrl: {
        once: true,
        title: 'Define Site Url',
        form: Forms.DefineSiteUrl,
        formDefault: {
            step: 'defineSiteUrl',
            siteUrl: '',
        }
    },
    importFile: {
        title: 'Import File',
        form: Forms.ImportFile,
        formDefault: {
            step: 'importFile',
            file: '',
        }
    },
};
export default forms;

export function getForm(step) {
    return forms[step];
}

export function allowEntry(step, once = false, blueprint) {
    const hasEntry = blueprint.steps.some(entry => entry.step == step);
    return once && hasEntry ? false: true;
}