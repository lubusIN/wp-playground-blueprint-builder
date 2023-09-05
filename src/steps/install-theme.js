import {
    __experimentalNavigationMenu as NavigationMenu,
    __experimentalNavigationItem as NavigationItem,
} from '@wordpress/components';

import {InstallThemesForm} from '../components'
 
function InstallTheme() {
    return (
        <NavigationMenu
            menu="install-theme-menu"
            parentMenu="root"
            title="Install Theme"
        >
            <NavigationItem item="install-theme" className='step-form'>
                <InstallThemesForm />
            </NavigationItem>
        </NavigationMenu>
    );
}

export default InstallTheme;