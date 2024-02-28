document.addEventListener("DOMContentLoaded", function() {
    const comments = [
      {
        id: 1,
        text: "This is the first comment",
        parentId: null,
        replies: [
          {
            id: 2,
            text: "This is a reply to the first comment",
            parentId: 1,
            replies: [
              {
                id: 3,
                text: "This is a nested reply",
                parentId: 2,
                replies: [] 
              }
            ]
          }
        ]
      },
      {
        id: 4,
        text: "This is an independent comment",
        parentId: null,
        replies: []
      },
    ];

    const commentsContainer = document.getElementById('comments-container');

    function generateComment(comment, level) {
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment');
      commentElement.innerHTML = `<p>${comment.text}</p>`;
      
      commentElement.style.marginLeft = `${level * 20}px`;

      if (comment.replies.length > 0) {
        level++; 
        comment.replies.forEach(reply => {
          const replyElement = generateComment(reply, level);
          commentElement.appendChild(replyElement);
        });
      }

      return commentElement;
    }

    function generateComments(comments) {
      comments.forEach(comment => {
        if (comment.parentId === null) {
          const commentElement = generateComment(comment, 0);
          commentsContainer.appendChild(commentElement);
        }
      });
    }
    generateComments(comments);
  });