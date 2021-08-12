# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#users

user1 = User.create(username: 'valover', email: 'valover@email.com', password_digest: '123456')

user2 = User.create(username: 'touristguy', email: 'touristguy@email.com', password_digest: 'abc123')

#user1 posts

Post.create(imageURL: 'https://i.imgur.com/udstHYb.jpg', name: 'Luray Caverns', location: 'Luray', description: 'Luray Caverns contain breathtaking examples of calcite formations within an extensive underground system that sometimes feels more like an alien landscape than a terrestrial natural landmark.')