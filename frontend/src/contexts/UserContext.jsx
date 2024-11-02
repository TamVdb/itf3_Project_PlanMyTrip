import { createContext, useState } from 'react';

const UserContext = createContext({
   user: null,
   setUser: () => { }
});

const UserProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   const userData = { user, setUser };

   return (
      <UserContext.Provider value={userData}>
         {children}
      </UserContext.Provider>
   );
};

export { UserProvider, UserContext };