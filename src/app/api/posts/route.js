export async function GET(request) {
  return new Response(
    JSON.stringify([
      {
        body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.\n\n Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        excerpt:
          "Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        id: 0,
        meta: {
          categories: ["creative"],
          created: "02 July, 2019",
          tags: ["Women fashion"],
        },
        title: "Facere repellat prov ident occaecati",
        userId: 1,
      },
      {
        body: "Est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        excerpt:
          "Est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        id: 1,
        meta: {
          categories: ["design"],
          created: "08 june, 2019",
          tags: ["men fashion"],
        },
        title: "Qui est esse recus andae consequuntur",
        userId: 2,
      },
      {
        body: "Et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        excerpt:
          "Et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        id: 2,
        meta: {
          categories: ["creative, design"],
          created: "12 august, 2019",
          tags: ["clothing"],
        },
        title: "Wuasi exercitat ionem repellat qui",
        userId: 3,
      },
      {
        body: "Ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        excerpt:
          "Ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        id: 3,
        meta: {
          categories: ["creative"],
          created: "19 jun, 2019",
          tags: ["Women fashion"],
        },
        title: "Eum et est occaecati",
        userId: 1,
      },
      {
        body: "Repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        excerpt:
          "Repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        id: 4,
        meta: {
          categories: ["design"],
          created: "02 feb, 2019",
          tags: ["Women", "men"],
        },
        title: "Nesciunt quas odio",
        userId: 3,
      },
    ])
  );
}
