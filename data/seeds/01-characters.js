exports.seed = async function (knex) {
  await knex('characters').truncate();
  await knex('characters').insert([
    {
      name: 'Mario',
      description:
        'Depicted as the hero of the franchise, Mario remains playable in most of the games and also appears in every Mario spin-off game including sports and kart racing. He is heroic, brave, polite, smart, and kind.'
    },
    {
      name: 'Luigi',
      description:
        'Unlike Mario, Luigi is optimistic, fun-loving, emotional, ambiverted, a bit clumsy, kind and sweet but is a bit cowardly and childish. However, he tries to stay brave in intense situations.'
    },
    {
      name: 'Princess Peach',
      description:
        'Princess Peach (formerly Princess Toadstool outside Japan), is the princess and the ruler of the Mushroom Kingdom and the lead female character from the Mario series since her introduction in 1985. Peach is playable in most of the Mario games. She is sweet, kind, optimistic, cheery, and elegant.'
    },
    {
      name: 'Bowser',
      description:
        "Bowser or King Koopa is the king and leader of the turtle-like race named Koopas. Bowser is depicted as a powerful and evil Koopa who wants to take over the Mushroom Kingdom. He is Mario's nemesis and is the final boss of most Mario games. Bowser is playable in all Mario spin-off games."
    }
  ]);
};
