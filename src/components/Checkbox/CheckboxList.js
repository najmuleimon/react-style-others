// import { useState } from "react";

// const CheckboxList = () => {
//   const [userinfo, setUserInfo] = useState({
//     languages: [],
//     response: [],
//   });

//   console.log(userinfo);
//   const handleChange = (e) => {
//     // Destructuring
//     const { value, checked } = e.target;
//     const { languages } = userinfo;

//     // Case 1 : The user checks the box
//     if (checked) {
//       setUserInfo({
//         languages: [...languages, value],
//         response: [...languages, value],
//       });
//     }

//     // Case 2  : The user unchecks the box
//     else {
//       setUserInfo({
//         languages: languages.filter((e) => e !== value),
//         response: languages.filter((e) => e !== value),
//       });
//     }
//   };

//   return <div>{
//     ["JavaScript", "Python", "Ruby"].map((item, i) => (
//       <div key={i} className="form-check m-3">
//         <input
//           type="checkbox"
//           className=""
//           name="languages"
//           style={{ accentColor: "red" }}
//           value={item}
//           id={`langualges${i}`}
//           onChange={handleChange}
//         />
//         <label htmlFor={`langualges${i}`}>{item}</label>
//       </div>
//     ))
//   }</div>
// };

// export default CheckboxList;

import { useState } from "react";

const CheckboxList = () => {
  const [userinfo, setUserInfo] = useState([]);

  console.log(userinfo);
  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setUserInfo([...userinfo, value]);
    } else {
      setUserInfo(userinfo.filter((e) => e !== value));
    }
  };

  return (
    <div>
      {["JavaScript", "Python", "Ruby"].map((item, i) => (
        <div key={i} className="form-check m-3">
          <input
            type="checkbox"
            className=""
            name="languages"
            style={{ accentColor: "red" }}
            value={item}
            id={`langualges${i}`}
            onChange={handleChange}
          />
          <label htmlFor={`langualges${i}`}>{item}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxList;
