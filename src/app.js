import { BlueprintProvider } from './data';
import Builder from './builder';

function App() {
    return (
        <BlueprintProvider>
           <Builder />
        </BlueprintProvider>
    );
}

export default App;