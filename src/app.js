import {
    Card,
    CardHeader,
    CardMedia,
    __experimentalGrid as Grid,
    __experimentalText as Text,
} from '@wordpress/components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import sampleBluePrint from './sample-blueprint';
import Header from './header';
import Steps from './steps';

function App() {
    return (
        <>
            <Card>
                <CardHeader id="app-header">
                    <Header />
                </CardHeader>
                <CardMedia>
                    <Grid columns={3} templateColumns="repeat(2, 1fr) 2fr">
                        <Steps />
                        <Text>Steps List</Text>
                        <SyntaxHighlighter language="json" wrapLongLines={true} customStyle={{ margin: 0 }}>
                            {JSON.stringify(sampleBluePrint, null, "\t")}
                        </SyntaxHighlighter>
                    </Grid>
                </CardMedia>
            </Card>
        </>
    );
}

export default App;