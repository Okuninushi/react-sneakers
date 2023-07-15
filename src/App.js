import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Input from "./components/Input";

const data = [
  {id: 1, title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999},
  {id: 2, title: "Мужские Кроссовки Nike Air Max 270", price: 15599}
]

function App() {
  return (
    <div className="bg-bg-default shadow-main-shadow rounded-[20px] p-4 m-8">
      <Drawer />
      <Header />
      <main>
        <div className="flex justify-between mb-[40px] ">
          <div>
            <h1 className="text-[32px] font-bold">Все кроссовки</h1>
          </div>
          <Input />
        </div>
        <div className="cards flex flex-wrap ">
          {data.map((card) => 
            <Card id = {card.id} title = {card.title} price = {card.price}/>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
