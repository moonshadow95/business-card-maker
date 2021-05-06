class ImgUploader {
  async upload(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'uploadpreset');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dtyrwyygt/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    );
    return await res.json();
  }
}

export default ImgUploader;
