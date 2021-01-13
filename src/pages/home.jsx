import React from 'react';
import PizzaItem from '../components/pizzaItem';
import Sort from '../components/sort';
import Categories from '../components/categories';

const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);

  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((response) => response.json())
      .then(({ pizzas }) => setPizzas(pizzas));
  }, []);

  const handleSearchValue = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className='content'>
      <div className='container'>
        <div className='content__top'>
          <Categories items={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
          <Sort />
        </div>
        <input
          type='text'
          placeholder='Введите имя для поиска'
          onChange={(e) => {
            handleSearchValue(e);
          }}
        />
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__items'>
          {pizzas
            .filter((item) => {
              if (search === '') {
                return item;
              } else if (item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                return item;
              }
            })
            .map((item) => {
              return <PizzaItem {...item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
