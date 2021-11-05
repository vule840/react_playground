import axios from "axios";
import React from "react";

const StoreContext = React.createContext<any>({
  items: {},
  getUser: () => {},
});

interface Items {
  items: [gender: String];
}

export const ContextProvider = (props: any) => {
  const [users, setUsers] = React.useState<any>([]);
  React.useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then(function (response: any) {
        setUsers(response.data.results[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <StoreContext.Provider value={users}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
