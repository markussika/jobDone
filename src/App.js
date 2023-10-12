import Cilveki from "./Cilveki";

function App() {
  const visiCilveki = [
    {
      "cilveki": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "cilveki": 2,
      "id": 2,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "cilveki": 6,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "cilveki": 31,
      "id": 4,
      "title": "quis ut nam facilis et officia qui",
      "completed": true
    },
    {
      "cilveki": 12,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "cilveki": 85,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    }
  ]

console.log(visiCilveki);
 const CilvekuJSX = visiCilveki.map((cilveki, indekss) =>{
   return <Cilveki key={indekss} cilveki = {cilveki.cilveki} title = {cilveki.title}/>
 });
return(
  <>
  {CilvekuJSX}
  </>
)



}

export default App;
