import { useEffect, useState } from "react";
import { data } from "./data";

const OptionalSelectOption = () => {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [districtList, setDistrictList] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [upazilaList, setUpazilaList] = useState([]);
  const [selectedUpazila, setSelectedUpazila] = useState("");

  useEffect(() => {
    setDistrictList(
      data.find((item) => item.divisionName === selectedDivision)
    );
    if (selectedDistrict !== "") {
      setUpazilaList(
        districtList.districts.find(
          (item) => item.districtName === selectedDistrict
        )
      );
    }
  }, [districtList, selectedDivision, upazilaList, selectedDistrict]);

  return (
    <div className="py-20 container">
      <div className="grid grid-cols-3 gap-6">
        <select
          value={selectedDivision}
          onChange={(e) => {
            setSelectedDivision(e.target.value);
            setSelectedDistrict("");
            setSelectedUpazila("");
          }}
          className="p-2 border outline-none"
        >
          <option value="" disabled>
            Select a Division
          </option>
          {data.map(({ id, divisionName }) => (
            <option key={id} value={divisionName}>
              {divisionName}
            </option>
          ))}
        </select>
        <select
          disabled={!selectedDivision}
          value={selectedDistrict}
          onChange={(e) => {
            setSelectedDistrict(e.target.value);
            setSelectedUpazila("");
          }}
          className="p-2 border outline-none"
        >
          <option value="" disabled>
            Select a District
          </option>
          {districtList?.districts?.map(({ id, districtName }) => (
            <option key={id} value={districtName}>
              {districtName}
            </option>
          ))}
        </select>
        <select
          disabled={!selectedDistrict}
          value={selectedUpazila}
          onChange={(e) => setSelectedUpazila(e.target.value)}
          className="p-2 border outline-none"
        >
          <option value="" disabled>
            Select a Upazila
          </option>
          {upazilaList?.upazilas?.map(({ id, upazilaName }) => (
            <option key={id} value={upazilaName}>
              {upazilaName}
            </option>
          ))}
        </select>
      </div>
      <div className="my-20 py-10 border-t">
        <p>
          <b>Division:</b> {selectedDivision}
        </p>
        <p>
          <b>District:</b> {selectedDistrict}
        </p>
        <p>
          <b>Upazila:</b> {selectedUpazila}
        </p>
      </div>
    </div>
  );
};

export default OptionalSelectOption;