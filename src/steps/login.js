import {
    __experimentalNavigationMenu as NavigationMenu,
    __experimentalNavigationItem as NavigationItem,
} from '@wordpress/components';

import {LoginForm} from '../components'

function Login() {
    return (
        <NavigationMenu
            menu="login-menu"
            parentMenu="root"
            title="Login"
        >
            <NavigationItem item="login" className='step-form'>
                <LoginForm />
            </NavigationItem>
        </NavigationMenu>
    );
}

export default Login;