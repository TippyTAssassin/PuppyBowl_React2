import { createRoot } from 'react-dom/client';
import { fetchAllPlayers } from './ajaxHelpers';
import { renderAllPlayers, renderNewPlayers } from './renderHelpers';


const PuppyBowl = () => {
    return (
        <div>
            <p>Hello World!</p>
        </div>
    )
}
const appElement = document.getElementById('app');
const root = createRoot(appElement);

root.render(<PuppyBowl />);