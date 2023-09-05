/**
 * WordPress Dependencies
 */
import {
    TextControl,
    RadioControl,
    ToggleControl,
    __experimentalVStack as VStack,
} from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Export Install Plugin Form Component
 */
function InstallPlugin() {
    const [resourceType, setResourceType] = useState('wordpress.org/plugins');
    const [activate, setActivate] = useState(true);

    const options = [
        { label: 'Url', value: 'url' },
        { label: 'Core Theme', value: 'wordpress.org/plugins' },
        { label: 'VFS', value: 'vfs' },
    ]
    
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

            {resourceType == 'wordpress.org/plugins' &&
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

export default InstallPlugin;