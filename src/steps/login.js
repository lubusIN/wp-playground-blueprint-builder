import {
    Button,
    TextControl,
    __experimentalHStack as HStack,
    __experimentalNavigationMenu as NavigationMenu,
    __experimentalNavigationItem as NavigationItem,
} from '@wordpress/components';
import { addCard } from "@wordpress/icons";

function Login() {
    return (
        <NavigationMenu
            menu="login-menu"
            parentMenu="root"
            title="Login"
        >
            <NavigationItem item="login" className='step-form'>
                <>
                    <TextControl label="Username" />
                    <TextControl label="Password" />
                    <HStack>
                        <Button variant="primary" icon={addCard}>Add</Button>
                    </HStack>
                </>
            </NavigationItem>
        </NavigationMenu>
    );
}

export default Login;