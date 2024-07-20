import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "src/types/User";

type UserContextType = {
  user: User | null;
  setUser: (user: User) => void;
};

// 1 create context
const UserContext = createContext<UserContextType | undefined>(undefined);

// 2. useContext: useUser : custorm hook
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

// provider
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
