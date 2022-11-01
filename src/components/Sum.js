export function Sum({numbers = [1,2,3,4,5]}){
    const result = numbers.reduce((previus, current) => previus + current)
    return (
     <h1>{result}</h1>
    )
   }