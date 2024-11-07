## 🚀 Intermediate Level: Blog API

Create a fully functional blog API with user interaction features.

### Required Features

1. User Authentication (similar to beginner level)
2. Blog Post Management
3. Comments System
4. Categories
5. Like/Unlike functionality

### Technical Requirements

1. API Endpoints:

```
Posts:
- Create: POST /api/posts
- Read: GET /api/posts
- Update: PUT /api/posts/:id
- Delete: DELETE /api/posts/:id

Comments:
- Add: POST /api/posts/:id/comments
- Get: GET /api/posts/:id/comments
- Delete: DELETE /api/posts/:id/comments/:commentId

Likes:
- Like: POST /api/posts/:id/like
- Unlike: DELETE /api/posts/:id/like
```

2. Data Models Structure:

```javascript
Post {
  title: string (required),
  content: string (required),
  author: ObjectId (reference),
  category: string,
  likes: [ObjectId] (user references),
  createdAt: timestamp
}

Comment {
  content: string (required),
  author: ObjectId (reference),
  post: ObjectId (reference),
  createdAt: timestamp
}
```

3. Implementation Requirements:
   - User authentication
   - Role-based permissions
   - Input validation
   - Error handling
   - Pagination
   - Search functionality

### Bonus Features

- Image upload
- Post drafts
- Tags system
- Post views counter
