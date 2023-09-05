/**
 * Internal Dependencies
 */
import { BlueprintProvider } from './data';
import Builder from './builder';

/**
 * Render App
 */
function App() {
    return (
        <BlueprintProvider>
           <Builder />
        </BlueprintProvider>
    );
}

export default App;