import "../index.css";

export const Hero = () => {
  const cats = [
    {
      id: 1,
      imageUrl: "https://images.pexels.com/photos/9957510/pexels-photo-9957510.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Playful Cat",
      description: "This playful cat loves to explore!",
    },
    {
      id: 2,
      imageUrl: "https://images.pexels.com/photos/29341284/pexels-photo-29341284/free-photo-of-black-and-white-portrait-of-a-sitting-gray-cat.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Curious Cat",
      description: "This cat is always curious about everything.",
    },
    {
      id: 3,
      imageUrl: "https://images.pexels.com/photos/2575545/pexels-photo-2575545.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Sleepy Cat",
      description: "The best nap spots are always a cat's favorite.",
    },
    {
      id: 4,
      imageUrl: "https://images.pexels.com/photos/2286016/pexels-photo-2286016.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Happy Cat",
      description: "This happy kitty is enjoying life.",
    },
    {
      id: 5,
      imageUrl: "https://images.pexels.com/photos/1398185/pexels-photo-1398185.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Funny Cat",
      description: "This funny cat loves making everyone laugh!",
    },
    {
        id: 6,
        imageUrl: "https://images.pexels.com/photos/26555693/pexels-photo-26555693/free-photo-of-kittens-laying-on-a-wooden-bench.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "Cute Cat",
        description: "This funny cat loves making everyone laugh!",
    }
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Meet Our Cats</h2>
        {/* Set grid to always have 3 columns */}
        <div className="grid gap-6 grid-cols-3">
          {cats.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={cat.imageUrl}
                alt={cat.title}
                className="w-full h-60 object-none"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
                <p className="text-gray-600">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
