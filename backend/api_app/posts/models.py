from django.contrib.auth import get_user_model
from django.db import models


class Post(models.Model):
    text = models.TextField("Post Text")
    pub_date = models.DateField("Publication Date", auto_now=True)
    author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name="posts")

    def __str__(self):
        return self.text
