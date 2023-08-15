import {
    Button,
    ButtonGroup,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
} from '@wordpress/components';
import { Icon, wordpress, copy, download, globe } from "@wordpress/icons"

function Header() {
    return (
        <>
            <HStack justify='left' expanded={false}>
                <Icon size={36} icon={wordpress} />
                <Heading level={2}>Playground Blueprint</Heading>
            </HStack>

            <ButtonGroup>
                <HStack>
                    <Button variant="secondary" icon={globe}>
                        Launch
                    </Button>
                    <Button variant="secondary" icon={copy}>
                        Copy
                    </Button>
                    <Button variant="secondary" icon={download}>
                        Download
                    </Button>
                </HStack>
            </ButtonGroup>
        </>
    );
}

export default Header;