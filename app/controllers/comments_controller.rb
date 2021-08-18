class CommentsController < ApplicationController
  before_action :authorize_request, only: [:create]

  def index
    # @comments = Comment.all
    # render json: @comments, include: :user
    if params[:post_id] 
      @post = Post.find(params[:post_id])
      render json: @post.comments, include: :user, status: :ok
    else
      @user= User.all
      render json: @user, include: :comments
    end
  end

  def show
    @comment = Comment.find(params[:id])
    render json: @comment, include: :user
  end

  def create
    # @comment = Comment.new(comment_params)
    # if @comment.save
    #   render json: @comment, include: :user, status: :created
    # else
    #   render json: @comment, status: :unprocessable_entity
    # end
    @post = Post.find(params[:post_id])
    @comment = Comment.new(comment_params)
    @comment.post = @post
    @comment.user = @current_user

    if @comment.save
      render json: @comment, include: :user, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  private
    def comment_params
      params.require(:comment).permit(:content, :user_id, :post_id)
    end
end
