import { Link } from 'react-router-dom';

import heroImage from '../assets/restauranfood.jpg';

import greekSalad from '../assets/greek salad.jpg';

import bruschetta from '../assets/bruchetta.svg';

import lemonDessert from '../assets/lemon dessert.jpg';

import avatar1 from '../assets/avatar-1.jpg';

import avatar2 from '../assets/avatar-2.jpeg';

import avatar3 from '../assets/avatar-3.jpeg';

import avatar4 from '../assets/avatar-4.jpg';

import './Home.css';



function Home() {

  const specials = [

    { name: 'Greek Salad', image: greekSalad, price: 12.99, description: 'Experience a taste of the Mediterranean with our crisp Greek salad. Fresh lettuce, ripe tomatoes, cucumbers, and olives are topped with creamy feta and our signature house dressing.' },

    { name: 'Bruschetta', image: bruschetta, price: 5.99, description: 'Savor the flavors of Italy with our classic bruschetta. Toasted artisan bread rubbed with garlic and topped with a blend of juicy tomatoes, fresh basil, and extra virgin olive oil.' },

    { name: 'Lemon Dessert', image: lemonDessert, price: 5.00, description: 'Indulge in our zesty lemon dessert, a family recipe passed down through generations. This refreshing treat balances sweet and tart flavors for the perfect end to your meal.' },

  ];



  const testimonials = [
    { id: 1, name: 'Sarah M.', avatar: avatar1, text: "Little Lemon exceeded all my expectations! The flavors were incredible and the service was top-notch." },
    { id: 2, name: 'John D.', avatar: avatar2, text: "I can't get enough of their Greek Salad. It's fresh, delicious, and reminds me of my travels in Greece." },
    { id: 3, name: 'Steven R.', avatar: avatar3, text: "The atmosphere at Little Lemon is so welcoming. It's become our family's go-to spot for special occasions." },
    { id: 4, name: 'Michael T.', avatar: avatar4, text: "As a food critic, I'm impressed by Little Lemon's attention to detail and commitment to authentic flavors." },
  ];



  return (

    <div className="home">

      <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>

        <div className="hero-content">

          <h1>Little Lemon</h1>

          <h2>Chicago</h2>

          <p className="lead-text">Embark on a culinary journey through the Mediterranean at our family-owned restaurant, where traditional recipes meet modern flair.</p>

          <Link to="/reservations">

            <button className="cta-button">Book Your Table</button>

          </Link>

        </div>

      </section>



      <section className="specials-section">

        <h2 className="section-title">This Week&apos;s Culinary Delights</h2>

        <div className="specials-grid">

          {specials.map((item) => (

            <div key={item.name} className="special-item">

              <img src={item.image} alt={item.name} className="special-image" />

              <div className="special-content">

                <h3 className="card-title">{item.name}</h3>

                <p className="highlight-text">${item.price.toFixed(2)}</p>

                <p>{item.description}</p>

                <button className="order-button">Order for Delivery</button>

              </div>

            </div>

          ))}

        </div>

      </section>



      <section className="testimonials-section">

        <h2 className="section-title">Voices of Our Guests</h2>

        <div className="testimonials-grid">

          {testimonials.map((item) => (

            <div key={item.id} className="testimonial-item">

              <img src={item.avatar} alt={item.name} className="testimonial-avatar" />

              <p>&quot;{item.text}&quot;</p>

              <p className="highlight-text">- {item.name}</p>

            </div>

          ))}

        </div>

      </section>

    </div>

  );

}



export default Home;



