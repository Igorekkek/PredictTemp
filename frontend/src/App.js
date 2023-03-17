import "./App.css"
import { useState } from 'react'

const App = () => {
  const [image, setImage] = useState(null)

  return (
    <main className="page">
      <form className="container">
        <button type="submit">Показать график</button>
        <select>
          <option>Москва</option>
          <option>Нижний Таганрок</option>
          <option>Шахты</option>
        </select>
        <select>
          <option>День</option>
          <option>Месяц</option>
          <option>Неделя</option>
        </select>
      </form>
      {image && <img className="image" src={image} alt="график"></img>}
    </main>
  );
};

export default App;
