import { useState, useEffect } from "react";
import axios from "axios";

function Cat({ selectedCat, setselectedCat }) {
  const api_url = import.meta.env.VITE_API_URL;
  const [cats, setcats] = useState([
    {
      id: 1,
      name: "Lenses",
    },
  ]);

  useEffect(() => {
    axios
      .get(`${api_url}/get_parent_category`)
      .then((res) => {
        //console.log(res);
        setcats(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <div>
      <ul className="flex items-center text-center">
        {cats.map((cat) => (
          <li
            key={cat.id}
            className={
              selectedCat !== cat.id
                ? `mx-2 items-center text-center block w-full`
                : `mx-2 items-center text-center border border-[#E16A16] p-1 rounded block w-full`
            }
            onClick={(e) => setselectedCat(cat.id)}
          >
            <h3 className="text-sm text-center">{cat.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cat;
