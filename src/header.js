import {
    Button,
    ButtonGroup,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
} from '@wordpress/components';
import { Icon, wordpress, copy, download, globe } from "@wordpress/icons"

function Header({blueprint}) {
    const playgroundBase = "https://playground.wordpress.net/#";
    const blueprintString = JSON.stringify(blueprint);
    const playgroundWithBlueprint = playgroundBase + blueprintString;

    const blueprintData = new Blob([blueprintString], { type: 'text/html' });
    const blueprintDownload = URL.createObjectURL(blueprintData);

    return (
        <>
            <HStack justify='left' expanded={false}>
                <Icon size={36} icon={wordpress} />
                <Heading level={2}>Playground Blueprint</Heading>
            </HStack>

            <ButtonGroup>
                <HStack>
                    <Button variant="secondary" icon={globe} href={playgroundWithBlueprint} target='_new'>
                        Launch
                    </Button>
                    <Button 
                        variant="secondary" 
                        icon={copy}  
                        onClick={() => { navigator.clipboard.writeText(blueprintString) }}>
                        Copy
                    </Button>
                    <Button 
                        variant="secondary" 
                        icon={download}
                        href={blueprintDownload}
                        download="playground-blueprint.json">
                        Download
                    </Button>
                </HStack>
            </ButtonGroup>
        </>
    );
}

export default Header;