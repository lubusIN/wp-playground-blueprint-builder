import {
    Button,
    TextControl,
    RadioControl,
    ToggleControl,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalNavigationMenu as NavigationMenu,
    __experimentalNavigationItem as NavigationItem,
} from '@wordpress/components';
import { addCard } from "@wordpress/icons";
import { useState } from '@wordpress/element';

function InstallThemesForm() {
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

            <HStack>
                <Button variant="primary" icon={addCard}>
                    Add
                </Button>
            </HStack>


        </VStack>
    );
}

export default InstallThemesForm;