export async function GET(request) {
  return new Response(
    JSON.stringify([
      {
        body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.\n\n Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        excerpt:
          "An elegant and technical dance characterized by precise movements and graceful positions.",
        id: 0,
        meta: {
          categories: ["creative"],
          created: "02 July, 2019",
          tags: ["Women fashion"],
        },
        title: "Classic Danse",
      },
      {
        body: "An expressive and creative form of dance, combining elements of modernity and improvisation.",
        excerpt:
          "An expressive and creative form of dance, combining elements of modernity and improvisation.",
        id: 1,
        meta: {
          categories: ["design"],
          created: "08 june, 2019",
          tags: ["men fashion"],
        },
        title: "Contemporary Dance ",
      },
      {
        body: "A dynamic and energetic dance, inspired by street styles like hip-hop and breakdancing.",
        excerpt:
          "A dynamic and energetic dance, inspired by street styles like hip-hop and breakdancing.",
        id: 2,
        meta: {
          categories: ["creative, design"],
          created: "12 august, 2019",
          tags: ["clothing"],
        },
        title: "Urban Dance",
      },
    ])
  );
}
