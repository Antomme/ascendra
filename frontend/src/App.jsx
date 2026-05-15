import { useState } from 'react';

import { AscendraAppBar } from './components/AscendraAppBar.jsx';
import { AscendraDrawer } from './components/AscendraDrawer.jsx';
import { CreateNewGoals } from './components/CreateNewGoals.jsx';
import { AscendraAppContainer } from './components/AscendraAppContainer.jsx';

function App() {

  const [open, setOpen] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState('Goals');

  const handleDrawerOpen = () => {
    setOpen(true);
  }

  const handleDrawerClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <AscendraAppBar drawerOpen={open} onDrawerOpen={handleDrawerOpen} />
      <AscendraDrawer open={open} onDrawerClose={handleDrawerClose} />
      {selectedMenuItem === 'Goals' && (
        <AscendraAppContainer drawerOpen={open}>
          <CreateNewGoals />
        </AscendraAppContainer>
      )}
    </div>
  );
}

export default App;   