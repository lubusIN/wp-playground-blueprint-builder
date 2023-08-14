import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    __experimentalGrid as Grid,
    __experimentalHStack as HStack,
    __experimentalText as Text,
    __experimentalHeading as Heading,
} from '@wordpress/components';

function App() {
    return (
        <>
            <Card>
                <CardHeader>
                    <Heading level={4}>WordPress Playground Blueprint Builder</Heading>
                    <ButtonGroup>
                        <HStack>
                            <Button variant="secondary">
                                Launch
                            </Button>
                            <Button variant="secondary">
                                Copy
                            </Button>
                            <Button variant="secondary">
                                Download
                            </Button>
                        </HStack>
                    </ButtonGroup>
                </CardHeader>
                <CardBody>
                    <Grid columns={3} templateColumns="repeat(2, 1fr) 2fr">
                        <Text>Steps Library</Text>
                        <Text>Steps List</Text>
                        <Text>Blueprint Json</Text>
                    </Grid>
                </CardBody>
            </Card>
        </>
    );
}

export default App;