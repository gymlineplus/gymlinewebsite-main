

export type Product = {
    id: number;
    sku: string;
    name: string;
    image: string;
    category: string;
    description: string;
    featured: boolean;
  };
  
  export const Treadmills: Product[] = [
    {
      id: 1,
      sku: "X9001A",
      name: "Gymline Commercial Treadmill X9001A",
      image: "https://gymlineplus.com/cdn/shop/files/IMG-20240401-WA0035.jpg?v=1711982776",
      category: "Treadmills",
      description: "Commercial grade treadmill with advanced features for intense cardio workouts.",
      featured: true,
    },
    {
      id: 2,
      sku: "X7000",
      name: "Gymline Commercial Treadmill X7000",
      image: "https://gymlineplus.com/cdn/shop/files/X7000.jpg?v=1698665500",
      category: "Treadmills",
      description: "The Gymlineplus Commercial Treadmill Gymline X7000 is a high-performing piece of equipment designed for serious fitness enthusiasts. With a VFD driven AC motor and RHYMEBUS inverter, this treadmill offers a smooth and powerful workout experience with speeds up to 20kmph. The 0-15% incline system, multiplex-cushioning system, and reversible running deck provide a comfortable and versatile workout. With a user weight capacity of 150kg and a durable construction, this treadmill is perfect for intense training sessions.",
      featured: true,
    },
    {
      id: 3,
      sku: "X8200A",
      name: "Gymline Commercial Treadmill X8200A",
      image: "https://gymlineplus.com/cdn/shop/files/X8200.png?v=1738664482&width=1100",
      category: "Treadmills",
      description: "The Gymlineplus Commercial Treadmill, X8200A-Treadmill, is the ideal choice for a high-quality workout experience. With a powerful Ac Variable Frequency Motor and G-Way - 2.2 KW inverter, it can reach speeds of up to 20kmph. The 1525*560mm running surface, 25mm thick reversible running deck, and multiplex-cushioning system provide optimal comfort. Its sturdy construction can support up to 150kg, making it suitable for all fitness levels. Plus, the LED display and precision engineering ensure a seamless workout",
      featured: true,
    },
    {
      id: 4,
      sku: "CT100B",
      name: "Gymline Commercial Curve Treadmill CT100B",
      image: "https://gymlineplus.com/cdn/shop/files/IMG-20240401-WA0027.jpg?v=1711983272&width=1100",
      category: "Treadmills",
      description: "As an industry expert, I can confidently say the Gymlineplus Commercial Curve Treadmill is a durable and efficient workout machine. With its self-powered, zero maintenance technology and liquid crystal display, it offers high intensity workouts for all fitness levels. Featuring a curved design and resistance levels from 1 to 6, this treadmill is perfect for running, walking, lunges, and more. With a maximum user weight of 180kg and a crawler type belt, it's a top choice for fitness enthusiasts.",
      featured: false,
    },
];
    export const ExcerciseBikes: Product[] = [
    {
      id: 5,
      sku: "X9107",
      name: "Gymlline Commercial Upright Bike X9107",
      image: "https://gymlineplus.com/cdn/shop/files/X9107.png?v=1698665270&width=1100",
      category: "Exercise Bikes",
      description: "Upgrade your workout routine with the Gymline Plus Commercial Upright Bike. With a self-powered design, LED display, and heart rate monitoring, you can track your progress with precision. The keypad resistance control and maximum weight capacity of 150kg make it a efficient and durable choice for any gym.",
      featured: false,
    },
    {
      id: 6,
      sku: "S300",
      name: "Gymline Commercial Spinning Bike S300",
      image: "https://gymlineplus.com/cdn/shop/files/PHONIXS300new.jpg?v=1698304949",
      category: "Exercise Bikes",
      description: "The Gymline Plus Spinning Bike offers a smooth and efficient workout with its 23kg main wheel weight and magnetic technology. With a maximum user weight of 150kg, this bike is built to support intense workouts. Weighing 42.5kg, its compact size of 1260*500*1000mm makes it perfect for home use.",
      featured: false,
    },
    {
      id: 7,
      sku: "S500L",
      name: "Gymline Home Series Upright Bike S500L",
      image: "https://gymlineplus.com/cdn/shop/files/S500_L.png?v=1697458462&width=1100",
      category: "Exercise Bikes",
      description: "Self-powered curved treadmill for natural running motion and intense workouts.",
      featured: true,
    },
    {
      id: 8,
      sku: "XN905",
      name: "Gymline Spinning Bike XN905 ",
      image: "https://gymlineplus.com/cdn/shop/files/XN905.png?v=1712052150",
      category: "Exercise Bikes",
      description: "Experience a smooth and challenging workout with the Gymlineplus Spinning Bike. With a 24kg main wheel weight and belt driven technology, it offers a realistic cycling experience. The sturdy flat elliptical and round stainless steel tube design can support up to 150kg user weight. Built with high-quality aluminum alloy, it weighs 68kg and measures 1088*560*1045-1300mm.",
      featured: false,
    },
  ];
    export const EllipticalTrainers: Product[] = [
    {
      id: 9,
      sku: "LDE-13",
      name: "Gymline Commercial Elliptical Trainer LDE-13",
      image: "https://gymlineplus.com/cdn/shop/files/LDE-13CrossTraniner.png?v=1712048250",
      category: "Exercise Bikes",
      description: "Experience a full-body workout with the Gymline Plus Commercial Elliptical Trainer. Its self-powered generator and automatic electromagnetic resistance system provide a challenging yet smooth exercise session. The LED screen displays real-time progress and the joystick allows for easy resistance control. With a max user weight of 150kg, this gym equipment is perfect for all fitness levels.",
      featured: false,
    },
    {
      id: 10,
      sku: "XZ117A",
      name: "Gymline Commercial Cross Trainer XZ117A",
      image: "https://gymlineplus.com/cdn/shop/files/XZ117A.jpg?v=1698664988",
      category: "Exercise Bikes",
      description: "The Gymline Plus Commercial Cross Trainer is a self-powered generator with 8 pre-set exercise programs. Its automatic electromagnetic resistance system allows for a maximum user weight of 149kg. The LED screen displays speed, calories, distance, time, and heart rate, while the joystick allows for easy resistance control. With a net weight of 162kg and dimensions of 2093*749*1643mm, this elliptical trainer offers a professional, efficient, and effective workout experience.",
      featured: false,
    },
  ];
  export const allCardioProducts: Product[] = [
    ...Treadmills,
    ...ExcerciseBikes,
    ...EllipticalTrainers,
  ];