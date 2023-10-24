import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const user = await res.json();
        setUser(user);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
    };
    fetchUser();
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  } else if (isError) {
    return <h2>Error occured</h2>;
  } else {
    const {avatar_url,company,name,bio} = user;
    return (
      <div>
        <img
          src={avatar_url}
          style={{ width: "150px", borderRadius: "25px" }}
          alt={name}
        />
        <h2>{name}</h2>
        <h4>works at..{company}</h4>
        <p>{bio}</p>
      </div>
    );
  }
};
export default MultipleReturnsFetchData;
