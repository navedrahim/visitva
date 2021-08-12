class PostsController < ApplicationController
  before_action :get_post, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:update, :create, :destroy]

  def index
    @posts = Post.all
    render json: @posts
  end

  def show
    render json: @post, include: :comments
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def update
    if @post.update(post_params)
      render json: @post, status: :ok
    else
      render json: post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy
  end


  private

  def get_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:imageURL, :name, :location, :description, :user_id)
  end
  
end
