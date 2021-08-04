import useLocalStorage from "./useLocalStorage"

const useDarkMode = () =>{
const [storedValue, setValue] = useLocalStorage('toggle',false)
return [storedValue,setValue]
}

export default useDarkMode