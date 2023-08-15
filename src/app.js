import { useState } from '@wordpress/element';
import {
    Button,
    Card,
    CardHeader,
    CardMedia,
    __experimentalHeading as Heading,
    __experimentalItemGroup as ItemGroup,
    __experimentalItem as Item,
    __experimentalGrid as Grid,
    __experimentalView as View,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalConfirmDialog as ConfirmDialog
} from '@wordpress/components';
import { Icon, edit, closeSmall, cancelCircleFilled } from "@wordpress/icons"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import sampleBluePrint from './sample-blueprint';
import Header from './header';
import Steps from './steps';

function App() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Card>
                <CardHeader id="app-header">
                    <Header blueprint={sampleBluePrint} />
                </CardHeader>
                <CardMedia>
                    <Grid columns={3} templateColumns="repeat(2, 1fr) 2fr">
                        <Steps />
                        <ItemGroup
                            isBordered
                            isRounded
                            isSeparated
                            size="large"
                            style={{ marginTop: "10px" }}
                        >
                            <Item>
                                <HStack>
                                    <View>login</View>
                                    <HStack alignment='right' expanded={false}>
                                        <Button icon={edit} size="compact" />
                                        <Button
                                            icon={closeSmall}
                                            size="compact"
                                            onClick={() => setOpen(true)}
                                        />
                                        <ConfirmDialog
                                            isOpen={isOpen}
                                            onConfirm={() => {
                                                alert('Delete Confirmed!');
                                                setOpen(false);
                                            }}
                                            onCancel={() => setOpen(false)}>
                                            <HStack>
                                                <Heading level={4}>Would you like to Delete this step?</Heading>
                                            </HStack>
                                        </ConfirmDialog>
                                    </HStack>
                                </HStack>
                            </Item>
                            <Item>
                                <HStack>
                                    <View>installPlugin</View>
                                    <HStack alignment='right' expanded={false}>
                                        <Button icon={edit} size="compact" />
                                        <Button icon={closeSmall} size="compact" />
                                    </HStack>
                                </HStack>
                            </Item>
                            <Item>
                                <HStack>
                                    <View>installTheme</View>
                                    <HStack alignment='right' expanded={false}>
                                        <Button icon={edit} size="compact" />
                                        <Button icon={closeSmall} size="compact" />
                                    </HStack>
                                </HStack>
                            </Item>
                        </ItemGroup>
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