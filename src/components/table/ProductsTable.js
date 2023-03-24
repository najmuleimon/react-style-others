import { useState, useEffect } from "react";
import { products } from "../../data/products";

const ProductsTable = () => {
  const [allProduct, setAllProduct] = useState([])
  const allStatus = ["pending", "delivered", "cancelled"];
  const [allCheck, setAllCheck] = useState(false);
  const [someCheck, setSomeCheck] = useState(false);
  
  const allChecked = () => {
    if(!allProduct.length) return false;
    return allProduct.every(item => item.isCheck)
  }

  const someChecked = () => {
    if(!allProduct.length) return false;
    return allProduct.some(item => item.isCheck)
  }

  useEffect(() => {
    const prod = products.map((item) => {
      item = {...item, isCheck: false}
      return item
    })
    setAllProduct(prod);

  }, [])
  

  const handleAllStatus = (e) => {
    const updateProd = allProduct.map((item) => {
      item.status = e.target.value;
      return item;
    })
    setAllProduct(updateProd)
  };

  const handleAllCheckbox = (e) => {
    setSomeCheck(false)
    
    if(someCheck && !allCheck){
      const updateProd = allProduct.map((item) => {
        if(item.isCheck){
          item.isCheck = false;
          return item;
        }
        else{
          return item
        }
      })
      setAllProduct(updateProd)
    }
    else{
      const updateProd = allProduct.map((item) => {
        item.isCheck = e.target.checked;
        return item;
      })
      setAllCheck(!allCheck);
      setAllProduct(updateProd)
    }
  };


  const handleSingleCheck = (id, e) => {
    const updateProd = allProduct.map((item) => {
      if(item.id === id){
        item.isCheck = e.target.checked;
        return item;
      }
      else{
        return item
      }
    })
    setAllProduct(updateProd)

    if(someChecked()){
      setSomeCheck(true)
    }
    else{
      setSomeCheck(false)
    }
    
    if(allChecked()){
      setAllCheck(true);
    }else{
      setAllCheck(false);
    }
  };

  const handleStatus = (id, e) => {
    const updateProd = allProduct.map((item) => {
      if(item.id === id){
        item.status = e.target.value;
        return item;
      }
      else{
        return item
      }
    })
    setAllProduct(updateProd)
  }

  return (
    <table>
      <tr>
        <th>
          <label htmlFor="all-check" className={`check-container ${allCheck ? 'check' : 'bar' }`}>
            <input type="checkbox" id="all-check" onChange={handleAllCheckbox} checked={allCheck || someCheck} />
            <span className="checkmark"></span>
          </label>
        </th>
        <th>id</th>
        <th>title</th>
        <th>
          status
          {
            allCheck && 
            <select onChange={(e) => handleAllStatus(e)}>
              {allStatus.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>
          }
        </th>
        <th>quantity</th>
      </tr>

      {allProduct.map(({ id, title, status, quantity, isCheck }) => (
        <tr key={id}>
          <td>
            <input
              type="checkbox"
              checked={isCheck}
              onChange={(e) => handleSingleCheck(id, e)}
            />
          </td>
          <td>{id}</td>
          <td>{title}</td>
          <td>
            <select onChange={(e) => handleStatus(id, e)} disabled={!isCheck}>
              {allStatus.map((item, i) => (
                <option key={i} value={item} selected={item === status}>
                  {item}
                </option>
              ))}
            </select>
          </td>
          <td>{quantity}</td>
        </tr>
      ))}
    </table>
  );
};

export default ProductsTable;
