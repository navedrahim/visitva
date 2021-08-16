# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Post.destroy_all
User.destroy_all

# users

user1 = User.create(username: 'valover', email: 'valover@email.com', password: '123456')
user2 = User.create(username: 'touristguy', email: 'touristguy@email.com', password: 'abc123')

pp "#{User.count} users created"

# posts user1

Post.create(imageURL: 'https://i.imgur.com/udstHYb.jpg', name: 'Luray Caverns', location: 'Luray', description: 'Luray Caverns contain breathtaking examples of calcite formations within an extensive underground system that sometimes feels more like an alien landscape than a terrestrial natural landmark.', user: user1)
Post.create(imageURL: 'https://i.imgur.com/KAoOWC6.jpg', name: 'Chincoteague Island', location: 'Chincoteague', description: 'Watch the wild Chincoteague ponies cross the Assateague Channel to Chincoteague Island', user: user1)

# posts user2

busch = Post.create(imageURL: 'https://i.imgur.com/FqbK8Ut.jpg', name: 'Busch Gardens', location: 'Williamsburg', description: 'This European themed park has rides and entertainment that is fun for the whole family', user: user2)

pp "#{Post.count} posts created"

# comments user1
Comment.create(content: 'I made sure to ride each roller coaster twice!', user: user1, post: busch)

pp "#{Comment.count} comments created"