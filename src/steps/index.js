import {
    __experimentalNavigation as Navigation,
    __experimentalNavigationMenu as NavigationMenu,
    __experimentalNavigationItem as NavigationItem,
} from '@wordpress/components';

import Login from './login';
import InstallPlugin from './install-plugin';
import InstallTheme from './install-theme';

function Steps() {
    return (
        <Navigation className="steps-navigation">
            <NavigationMenu title="Steps" hasSearch>
                <NavigationItem
                    item="item-login"
                    navigateToMenu="login-menu"
                    title="Login"
                />

                <NavigationItem
                    item="item-install-plugin"
                    navigateToMenu="install-plugin-menu"
                    title="Install Plugin"
                />

                <NavigationItem
                    item="item-install-theme"
                    navigateToMenu="install-theme-menu"
                    title="Install Theme"
                />
            </NavigationMenu>

            <Login />
            <InstallPlugin />
            <InstallTheme />

        </Navigation>
    );
}

export default Steps;