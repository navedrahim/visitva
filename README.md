# VisitVA


- [Overview](#overview)
- [MVP](#mvp)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**VisitVA** is an app where users can make posts on different attractions in Virginia and what one can do at each attraction. Users can also make comments on posts._


<br>

## MVP

- Build a server with Ruby on Rails
- Database with at least 3 relational tables
- Have at least one association between tables
- Full CRUD functionality
- Implement user authentication
- Front end built with React
- Render data from back end
- Allow user to create, edit, and delete posts and comments

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Component based javascript library to build user interface._ |
|   React Router   | _Library to establish routes in React_ |
| Ruby on Rails | _Web application framework used to build back end server._ |
|     Axios      | _Used to make HTTP requests from client side._ |
|  bcrypt  | _Used to hash passwords._ |

<br>

### Client (Front End)

#### Wireframes

[Desktop](https://www.figma.com/file/uPV04SFiu3zHM5FfHy5SmK/VisitVA?node-id=0%3A1)

[Mobile](https://www.figma.com/file/0Xs8zfGdfh0SGIN1e31zoJ/Untitled?node-id=0%3A1)


#### Component Tree

[Component](https://whimsical.com/visitva-FgvcJDqBZA6wHG63cQpKum)

#### Component File Structure

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ screens/
      |__ Home
      |__ AttractionList
      |__ AttractionDetail
      |__ AttractionEdit
      |__ AttractionAdd
      |__ SignIn
      |__ SignUp
|__ components/
      |__ Nav
      |__ Layout
      |__ AttractionCard
|__ services/
      |__ api-config
      |__ auth
      |__ users
      |__ posts
      |__ comments

```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | 
| ------------------- | :------: | :------------: | :-----------: | 
| Rails backend     |    H     |     5 hrs      |          |     
| Back end CRUD |    H     |     6 hrs      |          |     
| Seed Data     |    H     |     2 hrs      |           |     
| Migrations and Schema |    H     |     1 hrs      |           |     
| Front end CRUD |    H     |     6 hrs      |           |     
| Routes   |    H     |     4 hrs      |           |    
| Services files |    H     |     6 hrs      |          |    
| Front end CRUD edits |    H     |     6 hrs      |          |    
| Debugging |    H     |     4 hrs      |          |     
| CSS               |      H    |     14 hrs      |          |     
| TOTAL               |          |     54hrs      |           |  



<br>

### Server (Back End)

#### ERD Model

[Imgur](https://i.imgur.com/zTy5Cjd.png)
<br>

***

## Post-MVP

- Search functionality
- Tie posts/comments to users so only a user can edit/delete their own posts

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
