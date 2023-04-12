import CustomHeader from "./components/CustomHeader";
import Card from "./components/Card"

const App = () => {

  const skillSets = [
    {
      id: 0,
      skill: "HTML Knowledge",
      description: "A good grasp of the fundamentals of HTML"
    },
    {
      id: 1,
      skill: "CSS Prodiciency",
      description: "A strong foundation in building sites with CSS"
    },
    {
      id: 2,
      skill: "JavaScript Wizz",
      description: "A magician when it comes to all things JavaScript"
    },
    {
      id: 3,
      skill: "Node.js Master",
      description: "Wonderful with all things Node.js"
    }
  ]

  return (
    <div>
      <CustomHeader title={"My App"} />
      <div className="cards-containers">
        {skillSets.map(skillSet => <Card key={skillSet.id} skillSet={skillSet} />)}
      </div>
    </div>
  );
}

export default App;
