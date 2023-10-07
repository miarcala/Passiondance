export async function GET(request) {
  return new Response(
    JSON.stringify([
      {
        id: 58,
        message:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        postId: 1,
        username: "Lina harry",
      },
      {
        id: 54,
        message: "Qui maiores laborum ",
        postId: 0,
        username: "hobazib",
      },
      {
        id: 95,
        message: "zobi",
        postId: 0,
        username: "aagent",
      },
      {
        id: 88,
        message: "voluptatibus",
        postId: 2,
        username: "johann",
      },
      {
        id: 9,
        message: "My neck, my back and my crack",
        postId: 0,
        username: "John",
      },
      {
        id: 34,
        message: "thrhrh",
        postId: 1,
        username: "drhreth",
      },
    ])
  );
}
