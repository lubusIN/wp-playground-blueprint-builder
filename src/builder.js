import { useContext } from '@wordpress/element';
import {
    Card,
    CardHeader,
    CardMedia,
    __experimentalGrid as Grid,
} from '@wordpress/components';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { Header } from './components';
import { Menu, List } from './steps';
import { BlueprintContext } from './data'

function Builder() {
    const { blueprint } = useContext( BlueprintContext );

    return (
        <Card>
            <CardHeader id="app-header">
                <Header />
            </CardHeader>
            <CardMedia>
                <Grid columns={3} templateColumns="repeat(2, 1fr) 2fr">
                    <Menu />
                    <List />
                    <SyntaxHighlighter id="blueprint-code" language="json" wrapLongLines={true} customStyle={{ margin: 0 }}>
                        {JSON.stringify(blueprint, null, "\t")}
                    </SyntaxHighlighter>
                </Grid>
            </CardMedia>
        </Card>
    );
}
export default Builder;