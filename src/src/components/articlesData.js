// Articles data with full content
export const articlesData = {
  1: {
    title: "Building a Complete E-commerce Platform with React",
    category: "React",
    readTime: "8 min read",
    content: `
      <div style="text-align: left; line-height: 1.8; color: #333;">
        <p>In today's digital age, e-commerce websites are everywhere. As a front-end developer, building a fully functional e-commerce platform with React is one of the best ways to demonstrate your skills. React's component-based architecture makes it perfect for creating dynamic, reusable, and scalable applications.</p>

        <h3 style="color: #2196F3; margin: 2rem 0 1rem 0;">Step 1: Project Setup</h3>
        <p>To get started, you can initialize your project with <strong>Create React App</strong> or <strong>Vite</strong>. This gives you a fast development environment and hot-reloading out of the box. Once the setup is done, install additional packages like <strong>React Router</strong> for navigation and <strong>Bootstrap</strong> or <strong>TailwindCSS</strong> for styling.</p>

        <pre style="background: #f5f5f5; padding: 1rem; border-radius: 8px; overflow-x: auto; margin: 1rem 0;">
npx create-react-app ecommerce-app
cd ecommerce-app
npm install react-router-dom</pre>

        <h3 style="color: #2196F3; margin: 2rem 0 1rem 0;">Step 2: Building the Product Catalog</h3>
        <p>Create a ProductCard component that fetches product data (from an API or local JSON) and maps it into individual ProductCard components. Each card should display product details like name, price, and image.</p>

        <pre style="background: #f5f5f5; padding: 1rem; border-radius: 8px; overflow-x: auto; margin: 1rem 0;">
function ProductCard({ product }) {
  return (
    &lt;div className="card"&gt;
      &lt;img src={product.image} alt={product.name} /&gt;
      &lt;h3&gt;{product.name}&lt;/h3&gt;
      &lt;p&gt;${product.price}&lt;/p&gt;
    &lt;/div&gt;
  );
}</pre>

        <h3 style="color: #2196F3; margin: 2rem 0 1rem 0;">Step 3: Shopping Cart with State Management</h3>
        <p>Use Context API to manage cart state globally. For smaller projects, Context API is more than enough. It allows you to add, remove, and update products in the cart seamlessly.</p>

        <pre style="background: #f5f5f5; padding: 1rem; border-radius: 8px; overflow-x: auto; margin: 1rem 0;">
const addToCart = (product) => {
  setCartItems([...cartItems, product]);
};</pre>

        <h3 style="color: #2196F3; margin: 2rem 0 1rem 0;">Step 4: Checkout and Payment Integration</h3>
        <p>After building the cart, the next step is to implement a checkout page. This page should include:</p>
        <ul style="margin: 1rem 0; padding-left: 2rem;">
          <li>A list of selected products</li>
          <li>The total price</li>
          <li>A form for shipping details</li>
          <li>A payment method (you can simulate payments or integrate with services like Stripe or PayPal)</li>
        </ul>

        <h3 style="color: #2196F3; margin: 2rem 0 1rem 0;">Step 5: Enhancing the User Experience</h3>
        <p>Finally, don't forget about performance and UX:</p>
        <ul style="margin: 1rem 0; padding-left: 2rem;">
          <li>Add loading spinners while fetching data</li>
          <li>Implement search and filter for products</li>
          <li>Make the design fully responsive for mobile devices</li>
        </ul>

        <h3 style="color: #2196F3; margin: 2rem 0 1rem 0;">Conclusion</h3>
        <p>Building an e-commerce platform with React is a great way to practice component reusability, state management, and modern front-end development practices. By completing such a project, you not only strengthen your coding skills but also showcase your ability to create real-world applications that can scale.</p>
      </div>
    `
  },
  2: {
    title: "Mastering Responsive Design with Modern CSS",
    category: "CSS",
    readTime: "10 min read",
    content: `
      <div style="text-align: left; line-height: 1.8; color: #333;">
        <p>Responsive design is no longer optional—it's a necessity. With users accessing websites from a variety of devices, ensuring that your site looks great on mobile, tablet, and desktop is a critical skill for every front-end developer. Modern CSS provides powerful tools to create fully responsive layouts without relying on heavy frameworks.</p>

        <h3 style="color: #28a745; margin: 2rem 0 1rem 0;">Why Responsive Design Matters</h3>
        <p>A responsive website adapts to different screen sizes and orientations, providing a seamless user experience. It not only improves usability but also boosts SEO rankings since search engines prioritize mobile-friendly websites.</p>

        <h3 style="color: #28a745; margin: 2rem 0 1rem 0;">Step 1: Embrace Flexbox</h3>
        <p><strong>Flexbox</strong> makes it simple to create flexible layouts that adjust dynamically. For example, you can align items horizontally on desktop and stack them vertically on mobile with just a few lines of CSS.</p>

        <pre style="background: #f5f5f5; padding: 1rem; border-radius: 8px; overflow-x: auto; margin: 1rem 0;">
.container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  flex: 1 1 300px;
  margin: 10px;
}</pre>

        <h3 style="color: #28a745; margin: 2rem 0 1rem 0;">Step 2: Use CSS Grid for Complex Layouts</h3>
        <p>CSS Grid is ideal for building multi-column layouts with precise control. It's especially useful for dashboards, product listings, or image galleries.</p>

        <pre style="background: #f5f5f5; padding: 1rem; border-radius: 8px; overflow-x: auto; margin: 1rem 0;">
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}</pre>

        <p>This setup automatically adjusts the number of columns based on the screen size.</p>

        <h3 style="color: #28a745; margin: 2rem 0 1rem 0;">Step 3: Mobile-First with Media Queries</h3>
        <p>Designing with a mobile-first approach ensures that your site works perfectly on smaller screens first, then scales up for larger devices. Media queries make this process straightforward.</p>

        <pre style="background: #f5f5f5; padding: 1rem; border-radius: 8px; overflow-x: auto; margin: 1rem 0;">
body {
  font-size: 16px;
}

@media (min-width: 768px) {
  body {
    font-size: 18px;
  }
}</pre>

        <h3 style="color: #28a745; margin: 2rem 0 1rem 0;">Conclusion</h3>
        <p>Mastering responsive design with modern CSS is about combining Flexbox, Grid, media queries, and scalable units. By applying these techniques, you'll create websites that not only look beautiful but also provide an excellent user experience across all devices.</p>
      </div>
    `
  },
  3: {
    title: "JavaScript Best Practices for Modern Development",
    category: "JavaScript",
    readTime: "7 min read",
    content: `
      <div style="text-align: left; line-height: 1.8; color: #333;">
        <p>JavaScript is the backbone of modern web development. While it's easy to get started, writing clean, efficient, and maintainable code requires following best practices. In this article, we'll explore essential tips every developer should adopt when working with modern JavaScript (ES6+).</p>

        <h3 style="color: #ffc107; margin: 2rem 0 1rem 0;">Use const and let Instead of var</h3>
        <p>The old <code>var</code> keyword can create unexpected bugs due to function scoping. Always prefer <code>const</code> for values that don't change, and <code>let</code> for variables that need reassignment.</p>

        <pre style="background: #f5f5f5; padding: 1rem; border-radius: 8px; overflow-x: auto; margin: 1rem 0;">
const PI = 3.14;
let counter = 0;</pre>

        <h3 style="color: #ffc107; margin: 2rem 0 1rem 0;">Keep Functions Small and Focused</h3>
        <p>Functions should do one thing and do it well. Small, focused functions are easier to test, debug, and reuse.</p>

        <pre style="background: #f5f5f5; padding: 1rem; border-radius: 8px; overflow-x: auto; margin: 1rem 0;">
function calculateTotal(price, tax) {
  return price + (price * tax);
}</pre>

        <h3 style="color: #ffc107; margin: 2rem 0 1rem 0;">Use Arrow Functions for Simplicity</h3>
        <p>Arrow functions provide cleaner syntax and lexical this binding, making code shorter and more readable.</p>

        <pre style="background: #f5f5f5; padding: 1rem; border-radius: 8px; overflow-x: auto; margin: 1rem 0;">
const numbers = [1, 2, 3];
const squares = numbers.map(n => n * n);</pre>

        <h3 style="color: #ffc107; margin: 2rem 0 1rem 0;">Conclusion</h3>
        <p>By following these best practices—using modern ES6 features, organizing code into modules, and keeping functions clean—you'll write JavaScript that is not only efficient but also maintainable. This approach sets you apart as a professional developer who values quality and scalability.</p>
      </div>
    `
  }
};
