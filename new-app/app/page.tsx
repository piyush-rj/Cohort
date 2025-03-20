import axios from "axios";

async function fetchData(){
  const response = await axios.get("http://localhost:3000/api/user")
  console.log("response is " + JSON.stringify(response.data))
  return response.data
}

export default async function Home() {
  const data = await fetchData();

  return (
    <div>
        {data.email}
        {data.password}
    </div>
  );
}
