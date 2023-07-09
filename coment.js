

  const submitButton = document.querySelector('.submit-review');
  const inputText = document.querySelector('#input-text');
  const inputFile = document.querySelector('#input-file');
  const listPost = document.querySelector('#list-post');

  submitButton.addEventListener('click', () => {
      const name = 'Nam'; // Tên người gửi mặc định
      const avatar = './images/lacovn.png'; // Đường dẫn đến tệp logo làm ảnh đại diện
      const text = inputText.value;
      const file = inputFile.files[0];

      const newPost = document.createElement('div');
      newPost.classList.add('review-div');

      const reviewInfo = document.createElement('div');
      reviewInfo.classList.add('review-info');
      newPost.appendChild(reviewInfo);

      const avatarImg = document.createElement('img');
      avatarImg.src = avatar;
      avatarImg.style.borderRadius = '50%';
      reviewInfo.appendChild(avatarImg);

      const nameElement = document.createElement('p');
      nameElement.textContent = name;
      reviewInfo.appendChild(nameElement);

      const textElement = document.createElement('p');
textElement.textContent = text;
textElement.style.backgroundColor = 'yellow';
textElement.style.borderRadius = '10px';
textElement.style.fontSize = '15px';
textElement.style.color = 'grey';
textElement.style.padding = '10px';
textElement.style.display = 'inline-block';
textElement.style.width = 'auto';
newPost.appendChild(textElement);


      if (file) {
          const fileElement = document.createElement('p');
          newPost.appendChild(fileElement);
          

          const fileImg = document.createElement('img');
          fileImg.src = URL.createObjectURL(file);
          fileImg.style.maxWidth = '200px';
          fileImg.style.borderRadius ='15px';
          fileImg.style.marginTop = '5px';
          newPost.appendChild(fileImg);
      }

      listPost.appendChild(newPost);

      inputText.value = '';
      inputFile.value = '';
  });
