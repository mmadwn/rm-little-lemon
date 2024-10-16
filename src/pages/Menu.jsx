import menuImage from '../assets/restaurant.jpg';
import greekSalad from '../assets/greek salad.jpg';
import bruschetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon dessert.jpg';
import './Menu.css';

function Menu() {
  const menuItems = [
    { name: 'Greek Salad', price: 12.99, description: 'A refreshing blend of crisp vegetables, tangy feta, and Kalamata olives, drizzled with our house-made Mediterranean dressing.', image: greekSalad },
    { name: 'Bruschetta', price: 8.99, description: 'Artisanal bread toasted to perfection, topped with a medley of ripe tomatoes, fragrant basil, and a hint of garlic.', image: bruschetta },
    { name: 'Grilled Sea Bass', price: 24.99, description: 'Locally sourced sea bass, delicately grilled and served with a lemon-herb sauce and seasonal roasted vegetables.', image: menuImage },
    { name: 'Lemon Garlic Pasta', price: 15.99, description: 'Al dente pasta tossed in a zesty lemon garlic sauce, finished with fresh parsley and shaved Parmesan.', image: menuImage },
    { name: 'Mediterranean Pizza', price: 16.99, description: 'Thin-crust pizza topped with sun-dried tomatoes, artichokes, olives, and crumbled feta cheese.', image: menuImage },
    { name: 'Lemon Olive Oil Cake', price: 7.99, description: 'A moist and fragrant cake infused with lemon zest and extra virgin olive oil, served with a dollop of whipped mascarpone.', image: lemonDessert },
  ];

  return (
    <div className="menu">
      <h1>Our Culinary Offerings</h1>
      <div className="menu-header">
        <div className="menu-image">
          <img src={menuImage} alt="Little Lemon dishes" />
        </div>
        <div className="menu-description">
          <p className="lead-text">
            At Little Lemon, we take pride in crafting dishes that celebrate the vibrant flavors of the Mediterranean. Our menu is a carefully curated selection of both traditional and innovative recipes, prepared with locally sourced ingredients and a dash of passion.
          </p>
        </div>
      </div>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.name} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <div className="menu-item-content">
              <h3 className="card-title">{item.name}</h3>
              <p>{item.description}</p>
              <p className="highlight-text">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
