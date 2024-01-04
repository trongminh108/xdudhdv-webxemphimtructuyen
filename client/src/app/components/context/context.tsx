// context.js
import { createContext, useContext, useState } from 'react';

const DataContext = createContext<any>(null);

export const DataProvider = ({ children }: any) => {
    const [data, setData] = useState(null);

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    return useContext(DataContext);
};
