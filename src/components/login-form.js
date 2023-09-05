import {
    Button,
    TextControl,
    __experimentalHStack as HStack,
} from '@wordpress/components';
import { addCard } from "@wordpress/icons";

function LoginForm() {
    return (
        <>
            <TextControl label="Username" />
            <TextControl label="Password" />
            <HStack>
                <Button variant="primary" icon={addCard}>Add</Button>
            </HStack>
        </>
    );
}

export default LoginForm;