import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
const [storedValue, setStoredvalue] = useState(()=>{
    const myitem = window.localStorage.getItem(key);
    return myitem ? JSON.parse(myitem) : initialValue
})
const setValue = value => {
    setStoredvalue(value)
    window.localStorage.setItem(key,JSON.stringify(value))
}
return [storedValue, setValue]
}

export default useLocalStorage
