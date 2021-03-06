export default {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "tiposDeProfissional",
      [
        {
          id: 1,
          descricao: "Medico",
          situacao: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          descricao: "Programador",
          situacao: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("tiposDeProfissional", null, {});
  },
};
