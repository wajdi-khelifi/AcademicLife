from django.db import models

class Course(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    # Add other fields like instructor, duration, etc.

    def __str__(self):
        return self.title
