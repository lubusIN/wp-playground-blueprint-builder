/**
 * WordPress Dependencies
 */
import { useContext } from '@wordpress/element';
import { TextControl } from '@wordpress/components';

/**
 * Internal Dependencies
 */
import { BlueprintContext } from "../data";

/**
 * Render Login Form Component
 */
function LoginForm() {
    const {
        selectedItem: { isEdit, data, formDefault },
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