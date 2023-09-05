import {
    __experimentalNavigationMenu as NavigationMenu,
    __experimentalNavigationItem as NavigationItem,
} from '@wordpress/components';

import {InstallPluginsForm} from '../components';

function InstallPlugin() {
    return (
        <NavigationMenu
            menu="install-plugin-menu"
            parentMenu="root"
            title="Install Plugin"
        >
            <NavigationItem item="install-plugin" className='step-form'>
                <InstallPluginsForm />
            </NavigationItem>
        </NavigationMenu>
    );
}

export default InstallPlugin;