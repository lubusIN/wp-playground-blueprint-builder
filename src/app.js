import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardMedia,
    __experimentalGrid as Grid,
    __experimentalHStack as HStack,
    __experimentalText as Text,
    __experimentalHeading as Heading,
} from '@wordpress/components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import sampleBluePrint from './sample-blueprint';

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
                <CardMedia>
                    <Grid columns={3} templateColumns="repeat(2, 1fr) 2fr">
                        <Text>Steps Library</Text>
                        <Text>Steps List</Text>
                        <SyntaxHighlighter language="json" wrapLongLines={true} customStyle={{margin: 0}}>
                            {JSON.stringify(sampleBluePrint, null, "\t")}
                        </SyntaxHighlighter>
                    </Grid>
                </CardMedia>
            </Card>
        </>
    );
}

export default App;