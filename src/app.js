import {
    Card,
    CardHeader,
    CardMedia,
} from '@wordpress/components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import sampleBluePrint from './sample-blueprint';
import { Header } from './components';
import { Menu, List } from './steps';

function App() {
    return (
        <Card>
            <CardHeader id="app-header">
                <Header blueprint={sampleBluePrint} />
            </CardHeader>
            <CardMedia>
                <Grid columns={3} templateColumns="repeat(2, 1fr) 2fr">
                    <Menu />
                    <List />
                    <SyntaxHighlighter language="json" wrapLongLines={true} customStyle={{ margin: 0 }}>
                        {JSON.stringify(sampleBluePrint, null, "\t")}
                    </SyntaxHighlighter>
                </Grid>
            </CardMedia>
        </Card>
    );
}

export default App;