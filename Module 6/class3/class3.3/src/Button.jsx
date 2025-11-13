export function Button({ count, setCount, operation }) {
  
  if (operation === "+") {
    return (<div>
    <button onClick={() => setCount(count + 1)}>
      {operation}
    </button>
    </div>
  )
  } else if (operation === "-") {
    return (<div>
    <button onClick={() => setCount(count - 1)}>
      {operation}
    </button>
    </div>
  )
  } else if (operation === "*") {
    return (<div>
    <button onClick={() => setCount(count * 1)}>
      {operation}
    </button>
    </div>
  )
  } else if (operation === "+") {
    return (<div>
    <button onClick={() => setCount(count / 1)}>
      {operation}
    </button>
    </div>
  )
  }
  
  
}