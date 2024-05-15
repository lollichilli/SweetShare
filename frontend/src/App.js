import React, { useState } from 'react';
import BobaList from './components/BobaList';
import AddBobaForm from './components/AddBobaForm';

function App() {
    const [refresh, setRefresh] = useState(false);

    const handleAdd = () => {
        setRefresh(!refresh);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to SweetShare</h1>
            </header>
            <main>
                <AddBobaForm onAdd={handleAdd} />
                <BobaList refresh={refresh} />
            </main>
        </div>
    );
}

export default App;
