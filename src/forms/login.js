import { useContext } from '@wordpress/element';

import {
    TextControl,
} from '@wordpress/components';

import { BlueprintContext } from "../data";

function LoginForm() {
    const formDefault = {
        step: 'login',
        username: '',
        password: ''
    };

    const {
        selectedItem : {isEdit, data},
        formData = isEdit ? data : formDefault,
        setFormData
    } = useContext(BlueprintContext);

    return (
        <>
            <TextControl
                label="Username"
                value={formData.username}
                onChange={(value) => setFormData({ ...formData, username: value })}
            />
            <TextControl
                label="Password"
                value={formData.password}
                onChange={(value) => setFormData({ ...formData, password: value })}
            />
        </>
    );
}

export default LoginForm;