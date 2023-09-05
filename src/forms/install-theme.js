/**
 * WordPress Dependencies
 */
import { useState } from '@wordpress/element';
import {
    TextControl,
    RadioControl,
    ToggleControl,
    __experimentalVStack as VStack,

} from '@wordpress/components';

/**
 * Render Install Theme Form Component
 */
function InstallThemes() {
    const [resourceType, setResourceType] = useState('wordpress.org/themes');
    const [activate, setActivate] = useState(true);

    const options = [
        { label: 'Url', value: 'url' },
        { label: 'Core Theme', value: 'wordpress.org/themes' },
        { label: 'VFS', value: 'vfs' },
    ];

    return (
        <VStack spacing={4}>
            <RadioControl
                selected={resourceType}
                label="Resource"
                options={options}
                onChange={setResourceType}
            />

            {resourceType == 'url' &&
                <TextControl
                    label="Url"
                />
            }

            {resourceType == 'wordpress.org/themes' &&
                <TextControl
                    label="Slug"
                />
            }

            {resourceType == 'vfs' &&
                <TextControl
                    label="Path"
                />
            }

            <ToggleControl
                label="Activate"
                checked={activate}
                onChange={setActivate}
            />
        </VStack>
    );
}

export default InstallThemes;