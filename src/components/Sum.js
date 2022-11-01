export function Sum(props){
    const result = props.numbers.reduce((previus, current) => previus + current)
    return (
     <h1>{result}</h1>
    )
   }