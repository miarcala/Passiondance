export async function GET(request) {
  return new Response(
    JSON.stringify([
      {
        id: 0,
        title: "Classic Danse",
        thumb: "1.jpg",
        icon: "1.png",
      },
      {
        id: 1,
        title: "Contemporary Dance",
        thumb: "2.jpg",
        icon: "1.png",
      },
      {
        id: 2,
        title: "Urban Dance",
        thumb: "3.jpg",
        icon: "1.png",
      },
      {
        id: 3,
        title: "Street Dance",
        thumb: "4.jpg",
        icon: "1.png",
      },
    ])
  );
}
