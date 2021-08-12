class User < ApplicationRecord
  has_many :comments
  has_many :posts

  has_secure_password

  validates :username, :password, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP}
  validates :password, length: {minimum: 6}
end
