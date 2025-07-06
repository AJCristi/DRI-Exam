export function fetchProducts() {
 return Promise.resolve([
    {
      id: 1,
      name: 'Laptop',
      image: '/assets/laptop.png',
      price: 1200,
    },
    {
      id: 2,
      name: 'Mouse',
      image: '/assets/mouse.png',
      price: 25,
    },
    {
      id: 3,
      name: 'Keyboard',
      image: '/assets/keyboard.png',
      price: 70,
    },
    {
      id: 4,
      name: 'Monitor',
      image: '/assets/monitor.png',
      price: 300,
    },
    {
      id: 5,
      name: 'Headphones',
      image: '/assets/headphones.png',
      price: 150,
    },
    {
      id: 6,
      name: 'Webcam',
      image: '/assets/webcam.png',
      price: 80,
    }
  ]);
}
