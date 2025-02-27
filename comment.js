document.getElementById('btn-comment').addEventListener('click', function() {
    const textBox = document.getElementById('text-box');
    const newComment = textBox.value;

    const container = document.getElementById('comment-container');

    const commentElement = document.createElement('p');
    commentElement.classList.add('comment');
    commentElement.innerText = newComment;

    container.appendChild(commentElement)

    textBox.value = ''
})