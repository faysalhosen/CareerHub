import { useEffect } from "react";
import { useState } from "react";
import CategoryCard from "./CategoryCard";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect( () => {
    fetch('/data/categories.json')
    .then(res => res.json())
    .then(data => setCategories(data))
  }, []);

  return (
    <section className="mt-12">
      <div className="container">
        <h2 className="text-3xl font-semibold text-center mb-2">Job Category List</h2>
        <p className="text-gray-500 text-center mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {
            categories.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>)
          }
        </div>
      </div>
    </section>
  );
};

export default CategoryList;