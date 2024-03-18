import { useCustomRequest } from './useCustomRequest'

function App() {
  const { makeRequest } = useCustomRequest();

  return (
    <div>
      <button onClick={() => makeRequest("https://randomuser.me/api/")}>Click me</button>
    </div>
  )
}

export default App
