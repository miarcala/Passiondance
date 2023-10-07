export async function GET(request) {
  return new Response(
    JSON.stringify([
      {
        id: 0,
        title: "Massage Therapy",
        thumb: "1.jpg",
        icon: "1.png",
      },
      {
        id: 1,
        title: "Body Treatment",
        thumb: "2.jpg",
        icon: "1.png",
      },
      {
        id: 2,
        title: "Waxing Care",
        thumb: "3.jpg",
        icon: "1.png",
      },
      {
        id: 3,
        title: "Facial Care",
        thumb: "4.jpg",
        icon: "1.png",
      },
    ])
  );
}
